import React from 'react';
import './header.css';

 function Header()
 { 
    return(
    <header>
    <h1 className="site-title">ReactOne</h1>
    <nav>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
    );
 }
 export default Header

