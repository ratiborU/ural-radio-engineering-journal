"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`)

    console.log(encodedSearchQuery);
  }

  return (
    <form onSubmit={onSearch}>
      <input 
        className='search-input' 
        type="text" 
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder='Поиск...'
      />
    </form>
  );
};

export default SearchInput;