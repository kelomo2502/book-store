const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3zao3Tn7y1N2fKkbxxXj/books';

// Actions
const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/booksReducer/DISPLAY_BOOKS';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload))];
    default: return state;
  }
}

// Action Creators
const addBook = (book) => async (dispatch) => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, payload: book }));
};

const displayBooks = () => async (dispatch) => {
  await fetch(baseURL)
    .then((res) => res.json())
    .then((books) => {
      const booksArray = [];
      Object.keys(books).forEach((key) => {
        booksArray.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
      dispatch({ type: DISPLAY_BOOKS, payload: booksArray });
    });
};

const removeBook = (bookID) => async (dispatch) => {
  await fetch(`${baseURL}/${bookID}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: REMOVE_BOOK, payload: bookID }));
};

export { addBook, displayBooks, removeBook };
