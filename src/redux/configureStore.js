import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const initialState = {
  books: [{
    id: 1,
    title: 'Things fall apart ',
    author: 'Chinua Achebe',
  }],
};

const rootReducer = combineReducers({ books: booksReducer, categories: categoriesReducer });
const store = createStore(rootReducer, initialState);

export default store;
