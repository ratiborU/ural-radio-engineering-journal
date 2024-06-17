"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, {useState} from 'react';
import { useQueryClient } from '@tanstack/react-query';

const SearchInput = ({setUpdate, setIsAppdating, setIsSearching}: {setUpdate: React.Dispatch<React.SetStateAction<string>>, setIsAppdating: React.Dispatch<React.SetStateAction<boolean>>, setIsSearching: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryClient = useQueryClient();

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUpdate(searchQuery);
    setIsAppdating(true);
    setIsSearching(true);
    
  }
  const onClickButton = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setUpdate(searchQuery);
    setIsAppdating(true);
    setIsSearching(true);
  }

  return (
    <form className="search-form" onSubmit={onSearch}>
      <input 
        className='search-input' 
        type="text" 
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder='Поиск...'
      />
      <button onClick={onClickButton} className='search-button' type='button'>Поиск</button>
    </form>
  );
};

export default SearchInput;