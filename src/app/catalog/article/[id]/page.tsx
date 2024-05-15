import React from 'react';
import { getArticleById } from '@/data/AticleApi';

import ArticlePageClient from '@/components/pages/ArticlePage';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {

  const article = await getArticleById(params.id);
  const title = article?.title.Ru;
  const description = article?.content.Ru;

  return {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      url: `https://ural-radio.vercel.app/catalog/article/${params.id}`,
      title: title,
      description: description,
      siteName: "Ural Radio Enjeenering journal"
    }
  }
}

const ArticlePage = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <ArticlePageClient params={params}/>
    </>
  );
};

export default ArticlePage;