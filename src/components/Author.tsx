import React from 'react';
import { IAuthor } from '@/lib/typesNew';

type AuthorProps = {
  author: IAuthor
}

const Author = ({author}: AuthorProps) => {
  return (
    <div className='article__author'>
      <p>{author.fullname.Ru}</p>
      <p>{author.affilation}</p>
      <p>{author.email}</p>
    </div>
  );
};

export default Author;