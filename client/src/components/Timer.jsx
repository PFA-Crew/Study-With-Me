import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Timer() {
  return (
    <div id="timer">
      <div>25:00</div>
      <button>Start</button>
    </div>
  );
}

export default Timer;
