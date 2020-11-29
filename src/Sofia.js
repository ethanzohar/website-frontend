import React from 'react';
import './App.css';

const Sofia = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{display: 'flex', margin: '0 auto'}}>
        <h5 style={{writingMode: 'vertical-rl', textOrientation: 'upright', fontSize: '42px', letterSpacing: '-7.4px', marginLeft: '0', marginRight: '0'}}>Social Media</h5>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="https://image.freepik.com/free-photo/blooming-white-daisy-flower-isolated-black_112977-7.jpg"
          alt="White Daisy" width="500" height="500"></img>
        </a>
      </div>
    </div>
  );
}

export default Sofia;