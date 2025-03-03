import React from 'react';

const MainVegetableShape = () => {
  return (
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M150 100C150 100 200 50 300 50C400 50 450 100 500 150C550 200 550 250 500 300C450 350 400 350 300 350C200 350 150 300 100 250C50 200 50 150 100 100C150 50 250 50 300 50"
        fill="white"
        stroke="#8B2635"
        strokeWidth="2"
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))"
      />
      <defs>
        <filter id="shadow" x="-20" y="-20" width="640" height="440">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.1"/>
        </filter>
      </defs>
    </svg>
  );
};

export default MainVegetableShape;