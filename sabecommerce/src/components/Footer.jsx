// src/components/Footer.jsx
import React from 'react';
import './all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2  >Sabstore</h2>
          <p>Your trusted partner for innovative software solutions. We combine expertise, vision, and passion to drive digital transformation and deliver exceptional results.</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Mobile App</li>
              <li>System Development</li>
              <li>API Development</li>
              <li>API Integration</li>
              <li>Online Marketing</li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Call Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Services</li>
              <li>Article & News</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
