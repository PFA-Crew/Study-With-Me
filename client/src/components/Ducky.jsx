import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Ducky({duckyVisual}) {
  // Ducky Quacks on Click
  // Future options: Motivational messages on click
  const handleClick = () => {
    const audio = new Audio("http://www.greatbluemarble.com/quack.wav");
    audio.volume = 0.1;
    audio.play();
  }

  // Set the URL for the Ducky based on Customization Modal option
  // Future options: different method for Ducky customization, add hats
  let url;
  console.log(duckyVisual)
  switch (duckyVisual) {
    case "yellow": url = 'https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Images.png'
      break;
    case "blunicorn": url = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1939/17162/LILALU-SHARE-HAPPINESS-Einhorn-Quietscheente-hellblau-design-by-LILALU-F__39151.1622810224.png?c=2'
      break;
    case "black": url = 'https://www.pngarts.com/files/4/Rubber-Duck-Transparent-Image.png'
      break;
    case "santa": url = 'https://www.pngall.com/wp-content/uploads/11/Rubber-Duck-PNG.png'
      break;
    case "sailor": url = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1978/17566/lilalu-quietscheente-matrose-sailor-rubber-duck-HL__80988.1623154912.png?c=2'
      break;
    case "crown": url = 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1966/17454/1925_1_OK__61882.1623067708.png?c=2'
      break;
    case "constable": url = 'https://assets.stickpng.com/thumbs/5c05610a77e79003db621e81.png'
      break;
  }

  return (
    <div id="luckyducky">
      <img src={url} alt="ducky" onClick={handleClick}/>
    </div>
  );
}

export default Ducky;
