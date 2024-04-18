import React from 'react';
import { FormattedMessage } from 'react-intl'
import { IArticle, IRuEng } from '@/lib/types';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getFile } from '@/data/FileApi';
import { useLanguageContext } from '@/i18n/languageContext';

type ArticleComponentProps = {
  article: IArticle
}

const Article = ({article} : ArticleComponentProps) => {
  const {lang} = useLanguageContext();

  const { data: file } = useQuery({
    queryFn: async () => await getFile(article?.editionId),
    queryKey: ["file"],
    staleTime: Infinity,
    retry: 0
  });

  return (
    <div className="article-paragraph">
    <a href={file}>
      <button className='article-paragraph__button'><FormattedMessage id='article-article-paragraph__button' /></button>
    </a>
    <div className="article-paragraph__description">
      <Link href={`/catalog/article/${article["id"]}`} className='article-paragraph__name'>
        {article["title"][lang as keyof IRuEng]}
      </Link>
      <p className='article-paragraph__authors'>{article["authors"].join(", ")}</p>
    </div>
  </div>
  );
};

export default Article;