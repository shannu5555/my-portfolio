import React from 'react';
import './Sidebar.css'; // Adjust or create this CSS file

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1>SAGIR SHAIK</h1>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#" className="active">PORTFOLIO</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

