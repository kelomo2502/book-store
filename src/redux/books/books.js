const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const newBook = (action) => {
  const { title, author, genre } = action;
  return {
    title,
    author,
    genre,
    completed: '0%',
    chapter: '0',
    id: Date.now(),
  };
};

const removeBook = (state = [], action) => {
  console.log(action.title);
  const books = state.filter((book) => book.title !== action.title);
  return books;
};

export default function booksReducer(state = [], action) {
  let books = [];
  switch (action.type) {
    case ADD_BOOK:
      books = [...state, newBook(action)];
      return books;
    case DELETE_BOOK:
      books = removeBook(state, action);
      return books;
    default:
      return state;
  }
}

export const addBook = ({ title, author, genre }) => ({
  type: ADD_BOOK,
  title,
  author,
  genre,
});

export const deleteBook = ({ title }) => ({
  type: DELETE_BOOK,
  title,
});
