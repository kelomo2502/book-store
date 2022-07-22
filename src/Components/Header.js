import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (

      <nav className="navigation">
        <Link to="/" className="logoStyle">BookStore CMS</Link>

        <ul className="nav-header">
          <li className="nav-link">
            <Link className="nav-link" to="/Book">Books</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/Catogeries">Categories</Link>
          </li>

        </ul>

      </nav>
    );
  }
}

export default Header;
