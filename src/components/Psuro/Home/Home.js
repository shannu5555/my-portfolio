import React from 'react';
import './Home.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="row">
      <h1 className='headd'>Welcome to my Portfolio Website</h1>
      <div className="container-box col-12">
        <div className="col-6 description-container">
          <h1>Hi , I am <a><h1>Sagir Shaik</h1></a></h1>
          <p>I am Shaik Sagir, a B.Tech graduate in Electrical and Electronics Engineering</p>
          <p>I am Shaik Sagir, a B.Tech graduate in Electrical and Electronics Engineering</p>
          <p>
             <a 
                href="https://github.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaGithub className='iconss'/>
                
             </a>
             <a 
                href="https://www.linkedin.com/in/sagirshaik/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaLinkedin className='iconss' />
                
             </a>
             <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaFacebook  className='iconss'/>
                
             </a>
             <a 
                href="https://mail.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaEnvelope className='iconss' />
                
             </a>
             <a 
                href="https://youtu.be/Z-vIiEat-zA" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaYoutube className='iconss'/>
                
             </a>
             <a 
                href="https://www.twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ marginLeft: '10px',alignContent:'center',top:'70%'}}
            >
                <FaTwitter className='iconss' />
                
             </a>

          </p>
        </div>
        <div className="col-6 image-container">
          <img src="https://res.cloudinary.com/dth5uiebz/image/upload/v1725882251/LINKDIN_PROFILE_PIC_v67m82.jpg" alt="Home" className="home-image" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
