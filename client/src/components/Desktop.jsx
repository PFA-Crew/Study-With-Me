import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';
import Ducky from './Ducky.jsx';

function Desktop({ notes }) {
  return (
    <div className="desktopContainer">
      {/* <h1>test</h1> */}
      <div className="cell" id="cell1"><Ducky /></div>
      <div className="cell" id="cell2">Cell 2</div>
      <div className="cell" id="cell3">Cell 3</div>
      <div className="cell" id="cell4">Cell 4</div>
      <div className="center">{notes}</div>
      <div className="cell" id="cell6">Cell 6</div>
      <div className="cell" id="cell7">Cell 7</div>
      <div className="cell" id="cell8">Cell 8</div>
      <div className="cell" id="cell9">Cell 9</div>
    </div>
  );
}

// reference a state for cells 1-9
// instead of the Cell # text, we reference an index
// Customization will allow mutation of the state array

export default Desktop;
