import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [name, setName] = useState('');
  const fullName = `I'm Vyshnav Prasanth`;

  useEffect(() => {
    let currentName = '';
    let index = 0;
  
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentName += fullName[index];
        setName(currentName);
        index++;
  
        if (index === fullName.length) {
          clearInterval(interval);
        }
      }, 200); // Adjust the interval duration (in milliseconds) to control the speed of animation
    }, 2000); // Delay execution by 3 seconds (3000 milliseconds)
  
    return () => clearTimeout(timer);
  }, [fullName]); // Empty dependency array to ensure the effect runs only once
  
  return (
    <div className='banner'>
      <div className="banner-info">
        <p className="sub-introduction">Hey there!</p>
        <p className="introduction">{name}</p>
        <button className='projects-button animation-btn'>Projects</button>
      </div>
      <div className="banner-img-head">
        <img
          alt="Project"
          className='banner-img'
          src={`${process.env.PUBLIC_URL}/assets/vys.png`}
        />
      </div>
    </div>
  );
}

export default Banner;
