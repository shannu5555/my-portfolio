import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Psuro/Navbar/Navbar';
import Projects from './components/Psuro/Projects/Projects';
//import About from './components/Psuro/About/About';
//import Blog from './components/Psuro/Blog/Blog';

import Services from './components/Psuro/Services/Services';

import Slider from './components/Psuro/Slider/Slider';
import Education from './components/Psuro/Education/Education';
import './App.css'
import Home from './components/Psuro/Home/Home';
import Footer from './components/Psuro/Footer/Footer';
//import FlippingCard from './components/Psuro/FlippingCard/FlippingCard';
import Contact from './components/Psuro/Contact/Contact';



const App = () => {
  return (
    <Router>
      <div className="appss">
      
       <Navbar   />
        <div className="main-content">
          <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/about" element={<Education />} />
             <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Slider/>} />
            <Route path="/contact" element={<Contact />} />
            
            {}
          </Routes>
          

        </div>
        
        <div className='bodyy'>
          {/*<h1 >Unchangeble</h1>*/}
          <Footer/>
          
        </div>
      </div>
    </Router>
  );
};

export default App;