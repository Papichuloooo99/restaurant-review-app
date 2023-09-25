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
      <ul className="nav-links">
      <li className=''><a href="/">Home</a></li>
        <li className=''><a href="/restaurants">Restaurants</a></li>
        <li className=''><a href="/reviews">Reviews</a></li>
        <li className=''><a href="/about">About Us</a></li>
        <li className=''><a href="/reviews">Sign Up</a></li>
        <li className=''><a href="/about">Log In</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
