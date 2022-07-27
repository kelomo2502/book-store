import React from 'react'
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './Book.css'

const Book = (props) => {
  const {
    genre, title, author,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    console.log({ title }, 'click');
    dispatch(deleteBook({ title }));
  };

  return (
    <li className="Lesson-Panel">
      <div className="book-header">
        <span className="School-of">
          {genre}
        </span>
        <h3 className="Title">{title}</h3>
        <p className="Suzanne-Collins">{author}</p>
        <div className="book-header-buttons">
          <button className="Comments" type="button">Comments</button>
          <button onClick={handleRemoveClick} className="Comments" type="button">Remove</button>
          <button className="Comments" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
