"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getArticlesBySearch, getIssues } from '@/data/IssueApi';
import Issue from '@/components/Issue';
import SearchInput from '@/components/SearchInput';
import ArticleSearch from '@/components/ArticleSearch';
import { IIssue } from '@/lib/typesNew';

const CatalogPage = () => {
  const [update, setUpdate] = useState('')
  const [isAppdating, setIsAppdating] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const queryClient = useQueryClient();

  const [offset, setOffset] = useState(0);
  const [limit, setlimit] = useState(9);
  const [issuesList, setIssuesList] = useState<IIssue[]>([])



  const {data: issues, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await getIssues(offset, limit)
      setIssuesList([...issuesList, ...response.data]);
      setOffset(offset + limit);
      return {...response, data: [...issuesList, ...response.data]}
    }, 
    queryKey: ["issues"],
  });

  const { data: articlesSearch, status: articlesSearchStatus, error: articlesSearchError } = useQuery({
    queryKey: ['articlesSearch'],
    queryFn: async () => await getArticlesBySearch(update),
    staleTime: Infinity
  });

  const onButtonBackToIssues = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setUpdate('');
    setIsAppdating(true);
    setIsSearching(false);
  }

  const handleButtonAddIssues = () => {
    queryClient.invalidateQueries({queryKey: ['issues']});
  }



  useEffect(() => {
    if (isAppdating) {
      queryClient.invalidateQueries({queryKey: ["articlesSearch"]});
      setIsAppdating(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppdating]);

  useEffect(() => {
    if (issues) {
      setOffset(issues.data.length);
      setIssuesList([...issuesList, ...issues.data]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (isLoading) {
    return <p>Загрузка...</p>
  }


  if (isSearching) {
    return (
      <>
        <SearchInput setUpdate={setUpdate} setIsAppdating={setIsAppdating} setIsSearching={setIsSearching}/>
        <button className='search__back-button' onClick={onButtonBackToIssues} type='button'>Вернуться к выпускам</button>
        {articlesSearchStatus == 'success' && articlesSearch?.map(article => <ArticleSearch key={article["id"]} article={article}/>)}
        {articlesSearchStatus == 'success' && articlesSearch.length == 0 && <p>Ничего не найдено</p>}
      </>
    )
  }


  return (
    <>
      <SearchInput setUpdate={setUpdate} setIsAppdating={setIsAppdating} setIsSearching={setIsSearching}/>
      <div className="catalog">
        {issues!.data.map((issue, id) => {
          return <Issue key={id} issue={issue}/>
        })}
      </div>
      {issues!.data.length < issues!.allCount && <button className='catalog__add-issues-button' onClick={() => handleButtonAddIssues()}>Загрузить ещё</button>}
    </>
  );
};

export default CatalogPage;