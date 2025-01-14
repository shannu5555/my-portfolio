import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';






const Navbar = () => {
  return (
    <nav className="navbar">
     {/*<h1 className="navbar-title">SAGIR SHAIK</h1> */} 
      <ul className="navbar-links">
      
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
       <h1 className="navbar-title">SAGIR SHAIK</h1>
       
       
      </NavLink>
      
        <li className="search-container">
          <input type='text' placeholder="Search..." />
          <button className="search-icon">
          <i className="fa fa-search fa-lg"></i>
          </button>
         
        </li>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            EDUCATION
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            PROJECTS
          </NavLink>
        </li>
       
        <li>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            CERTIFICATIONS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <ThemeToggle/>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

