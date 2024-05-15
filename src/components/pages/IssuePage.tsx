"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getIssueById } from '@/data/IssueApi';
import { getArticlesByIssueId } from '@/data/AticleApi';
import { FormattedMessage } from 'react-intl';
import Article from '@/components/Article';
import { IRuEng } from '@/lib/types';
import { useLanguageContext } from '@/i18n/languageContext';
import Head from 'next/head';

const IssuePageClient = ({ params }: { params: { id: string } }) => {
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
    <>
      <Head>
        <title lang={lang == "Ru" ? "ru": "en"}>{`${issue?.title[lang as keyof IRuEng]}`}</title>

        <meta property='og:title' content={`${issue?.title[lang as keyof IRuEng]}`}/>
        {/* <meta property='og:description' content={`${article?.content[lang as keyof IRuEng]}`}/> */}
        {/* <meta property='og:type' content="article"/>
        {article?.authors.map((author, i) => <meta key={i} property="article:author" content={author}/>)}
        {article?.keywords.map((keyword, i) => <meta key={i} property="article:tag" content={keyword[lang as keyof IRuEng]}/>)} */}
        {/* <meta property="article:published_time" content={issue?.date}/> */}

        {/* <meta property='og:image' content={issueImage}/> */}
        {/* <meta property="og:image:width" content="600"/> */}
        {/* <meta property="og:image:height" content="850"/> */}
        <meta property='og:url' content={`http://localhost:5173/catalog/${params.id}`}/>
      </Head>
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
    </>
  );
};

export default IssuePageClient;