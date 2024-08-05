// src/components/Navbar.jsx
import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

import './all.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Sab<sub>s</sub>TORE</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="/Home">Home</a></li>
        <li><Link to="/About">
        About Us 
          </Link></li> <li><Link to="/contact">
        Contact 
          </Link></li>
        <li><a href="/Signin">Sign In</a></li>
        <div className="user-actions">

        <Link to="/sell">
            <button className="sell-button">SELL</button>
          </Link>
        </div> </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
