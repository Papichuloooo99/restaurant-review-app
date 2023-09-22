import React from 'react';
import './header.css';
import tastebuddies from './images/tastebuddies.png';

function Header() {
  return (
    <div>
      <nav className="navbar">
      <div className="logo-container">
        <img src={tastebuddies} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Restaurants</li>
        <li className="nav-item">Reviews</li>
        <li className="nav-item">Sign In</li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
