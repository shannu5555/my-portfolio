

// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import './ThemeToggle.css'; // Import the CSS file

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved user preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Apply theme based on the state
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

 {/* const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }; */}

  return (
    <div className="theme-toggle-icon">
    {/* <FontAwesomeIcon 
        icon={isDarkMode ? faSun : faMoon} 
        onClick={toggleTheme} 
        style={{ cursor: 'pointer' }} 
      /> 
      {/* GitHub icon that opens in a new tab */}
      <a 
        href="https://github.com/your-profile" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
      >
        <FaGithub style={{ fontSize: '24px', color: '#333' }} />
      </a>
    </div>
  );
};

export default ThemeToggle;
