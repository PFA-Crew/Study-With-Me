import React, { useState, useEffect, useRef } from 'react';
import './assets/App.css';

function Desktop() {
  return (
    <div className="desktopContainer">
      {/* <h1>test</h1> */}
      <div className="cell" id="cell1">Cell 1</div>
      <div className="cell" id="cell2">Cell 2</div>
      <div className="cell" id="cell3">Cell 3</div>
      <div className="cell" id="cell4">Cell 4</div>
      <div className="center">Cell 5</div>
      <div className="cell" id="cell6">Cell 6</div>
      <div className="cell" id="cell7">Cell 7</div>
      <div className="cell" id="cell8">Cell 8</div>
      <div className="cell" id="cell9">Cell 9</div>
    </div>
  );
}

export default Desktop;
