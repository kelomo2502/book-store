import React, { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [titleValue, setTitleValue] = useState();
  const [authorValue, setAuthorValue] = useState();
  const [genreValue, setGenreValue] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      title: titleValue,
      author: authorValue,
      genre: genreValue,
    }));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD BOOK</h2>
      <form onSubmit={onSubmit}>
        <input
          className="form-book-title"
          type="text"
          required
          placeholder="Title"
          value={titleValue}
          onChange={(event) => setTitleValue(event.target.value)}
        />
        <input
          className="form-book-author"
          type="text"
          required
          placeholder="Author"
          value={authorValue}
          onChange={(event) => setAuthorValue(event.target.value)}
        />
        <div className="form-book-category">
          <select className="select" default name="category">
            <option value="">
              Category
            </option>
            <option
              value={genreValue}
              onChange={(event) => setGenreValue(event.target.value)}
            >
              Romance
            </option>
            <option
              value={genreValue}
              onChange={(event) => setGenreValue(event.target.value)}
            >
              Science
            </option>
            <option
              value={genreValue}
              onChange={(event) => setGenreValue(event.target.value)}
            >
              Action
            </option>
            <option
              value={genreValue}
              onChange={(event) => setGenreValue(event.target.value)}
            >
              Crime
            </option>
            <option
              value={genreValue}
              onChange={(event) => setGenreValue(event.target.value)}
            >
              Fiction
            </option>
          </select>
        </div>
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
