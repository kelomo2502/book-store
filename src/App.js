import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BooksList from './Components/BooksList';
import Categories from './Components/Categories';
import Header from './Components/Header';
import React from 'react'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
