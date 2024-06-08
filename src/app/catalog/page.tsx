"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getArticlesBySearch, getIssues } from '@/data/IssueApi';
import Issue from '@/components/Issue';
import SearchInput from '@/components/SearchInput';
import { useSearchParams } from 'next/navigation';
import Article from '@/components/Article';
import ArticleSearch from '@/components/ArticleSearch';

const CatalogPage = () => {
  const [update, setUpdate] = useState('')
  const [isAppdating, setIsAppdating] = useState(false);
  const queryClient = useQueryClient();

  const { data: issues, isLoading, error } = useQuery({
    queryKey: ['issues'],
    queryFn: async () => await getIssues(update),
    staleTime: Infinity
  });

  const { data: articlesSearch, status: articlesSearchStatus, error: articlesSearchError } = useQuery({
    queryKey: ['articlesSearch'],
    queryFn: async () => await getArticlesBySearch(update),
    staleTime: Infinity
  });

  const onButtonBackToIssues = () => {
    setUpdate('');
    setIsAppdating(true);
  }



  useEffect(() => {
    if (isAppdating) {
      queryClient.invalidateQueries({queryKey: ["issues"]});
      queryClient.invalidateQueries({queryKey: ["articlesSearch"]});
      setIsAppdating(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppdating]);

  if (error) {
    console.log(error);
    return <p>Произошла ошибка</p>
  }
  if (isLoading) {
    return <p>Загрузка...</p>
  }


  if (articlesSearch?.length != 0) {
    return (
      <>
        <SearchInput setUpdate={setUpdate} setIsAppdating={setIsAppdating}/>
        <button className='search__back-button' onClick={onButtonBackToIssues} type='button'>Вернуться к выпускам</button>
        {articlesSearchStatus == 'success' && articlesSearch?.map(article => <ArticleSearch key={article["id"]} article={article}/>)}
        {articlesSearchStatus == 'success' && articlesSearch.length == 0 && <p>Ничего не найдено</p>}
      </>
    )
  }


  return (
    <>
      <SearchInput setUpdate={setUpdate} setIsAppdating={setIsAppdating}/>
      <div className="catalog">
        {issues?.map((issue, id) => {
          return <Issue key={id} issue={issue}/>
        })}
      </div>
    </>
  );
};

export default CatalogPage;