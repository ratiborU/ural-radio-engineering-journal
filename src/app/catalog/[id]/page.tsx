"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getIssueById } from '@/data/IssueApi';
import { getArticlesByIssueId } from '@/data/AticleApi';
import { FormattedMessage } from 'react-intl';
import Article from '@/components/Article';
import { IRuEng } from '@/lib/types';
import { useLanguageContext } from '@/i18n/languageContext';

const IssuePage = ({ params }: { params: { id: string } }) => {
  const {lang} = useLanguageContext();
  const { data: issue, status: issueStatus, error } = useQuery({
    queryKey: ['issue', params.id],
    queryFn: async () => await getIssueById(params.id)
  });

  const {status: articlesStatus, data: articles} = useQuery({
    queryFn: async () => await getArticlesByIssueId(params.id),
    queryKey: ["articles", params.id],
    staleTime: Infinity
  });

  return (
    <div>
      <p className='issue__title'>{issue?.title[lang as keyof IRuEng]}</p>
      <a href={''}>
        <button className='issue__button'>
        <FormattedMessage id='issue-issue__button' />
        </button>
      </a>
      
      <p className='issue__title'><FormattedMessage id='issue-issue__title' /></p>

      {articlesStatus == 'pending' 
        ? "загрузка"
        : articles?.map(article => <Article key={article["id"]} article={article}/>)
      }
    </div>
  );
};

export default IssuePage;