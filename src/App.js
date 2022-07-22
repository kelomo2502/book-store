import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Book from './Components/Books';
import Categories from './Components/Categories';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">

          <Routes>
            <Route path="/Book" element={<Book />} />
            <Route index element={<Book />} />
            <Route path="/Catogeries" element={<Categories />} />
            
          </Routes>

        </div>

      </>

    );
  }
}

export default App;