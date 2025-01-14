import React, { useState } from 'react';
import sliderList from './SliderData';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        <h1>CERTIFICATIONS</h1>
        <img src={sliderList[currentIndex].imgUrl} alt={sliderList[currentIndex].title} />
        <h2>{sliderList[currentIndex].title}</h2>
        <p>by</p>
        <p2>{sliderList[currentIndex].description}</p2>
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
