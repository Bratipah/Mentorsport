import React from 'react';
// import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
      <p>WE OFFER PROFESSIONAL</p>
      <h1>MENTORSHIP</h1>
    </div>
  );
}

export default HeroSection;