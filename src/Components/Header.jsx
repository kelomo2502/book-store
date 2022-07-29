import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo-nav">
      <h1>Bookstore</h1>
      <nav>
        <Link to="/" className="nav-link">
          BOOKS
        </Link>
        <Link to="/categories" className="nav-link categories">
          CATEGORIES
        </Link>
      </nav>
    </div>

    <i className="fas fa-user-alt"></i>
  </header>
);

export default Header;
