"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, {useState} from 'react';
import { useQueryClient } from '@tanstack/react-query';

const SearchInput = ({setUpdate, setIsAppdating}: {setUpdate: React.Dispatch<React.SetStateAction<string>>, setIsAppdating: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryClient = useQueryClient();
  // const navigator = useNavigate()

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUpdate(searchQuery);
    setIsAppdating(true);
    
    // await queryClient.invalidateQueries({queryKey: ["issues"]});
  }
  const onClickButton = async () => {
    setUpdate(searchQuery);
    setIsAppdating(true);
    // await queryClient.invalidateQueries({queryKey: ["issues"]});
  }

  return (
    <form className="search-form" onSubmit={onSearch}>
      <input 
        className='search-input' 
        type="text" 
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder='Поиск...'
      />
      <button onClick={(e) => {onClickButton()}} className='search-button' type='button'>Поиск</button>
    </form>
  );
};

export default SearchInput;