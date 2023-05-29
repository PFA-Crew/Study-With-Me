import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Ducky({duckyVisual}) {
  const handleClick = () => {
    const audio = new Audio("http://www.greatbluemarble.com/quack.wav");
    audio.volume = 0.1;
    audio.play();
  }

  let url;
  console.log(duckyVisual)
  switch (duckyVisual) {
    case "yellow": url = 'https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Images.png'
      break;
    case "blue": url = 'https://upload.wikimedia.org/wikipedia/en/4/44/Mr_rubber_ducky.png'
      break;
    case "black": url = 'https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Image.png'
      break;
    case "santa": url = 'https://www.pngall.com/wp-content/uploads/11/Rubber-Duck-PNG.png'
      break;
    case "sailor": url = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1978/17566/lilalu-quietscheente-matrose-sailor-rubber-duck-HL__80988.1623154912.png?c=2'
      break;
    case "crown": url = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1966/17454/1925_1_OK__61882.1623067708.png?c=2'
  }

  return (
    <div id="luckyducky">
      {/* <img src="https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Images.png" alt="ducky" onClick={handleClick}/> */}
      <img src={url} alt="ducky" onClick={handleClick}/>
    </div>
  );
}

// Have img source point to a state? Allow state to be updated with whatever Ducky you want.

export default Ducky;
