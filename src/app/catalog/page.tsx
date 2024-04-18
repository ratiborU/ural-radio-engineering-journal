"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getIssues } from '@/data/IssueApi';
import Issue from '@/components/Issue';

const CatalogPage = () => {
  const { data: issues, isLoading, error } = useQuery({
    queryKey: ['issues'],
    queryFn: async () => await getIssues()
  });

  if (error) {
    return <p>Произошла ошибка</p>
  }
  if (isLoading) {
    return <p>Загрузка...</p>
  }

  return (
    <div className="catalog">
      {issues?.map((issue, id) => {
        return <Issue key={id} issue={issue}/>
      })}
    </div>
  );
};

export default CatalogPage;