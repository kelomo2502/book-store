import React from 'react'

import Book from './Book';

const BookList = () => {
  const books = [{
    id: 1, title: 'title', author: 'author', genre: 'genre',
  }];

  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default BookList;
