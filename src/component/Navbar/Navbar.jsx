import React from "react";
import "./Navbar.css"; // Import CSS
import { Link } from "react-router-dom"; // If using React Router

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./images/Medspok.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
