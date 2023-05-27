import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Ducky() {
  const handleClick = () => {
    const audio = new Audio("http://www.greatbluemarble.com/quack.wav");
    audio.play();
  }

  return (
    <div id="luckyducky">
      <img src="https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Images.png" alt="ducky" onClick={handleClick}/>
    </div>
  );
}

// Have img source point to a state? Allow state to be updated with whatever Ducky you want.

export default Ducky;
