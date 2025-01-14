import React from 'react';
import './Footer.css';
//import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       {/* <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="iconss">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="iconss">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="iconss">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="iconss">
            <FaYoutube />
          </a>
          <a href="mailto:example@gmail.com" className="iconss">
            <FaEnvelope />
          </a>
        </div>*/}
        <p className="footer-text">&copy; 2024 Shaik Sagir. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
