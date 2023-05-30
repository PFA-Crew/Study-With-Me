import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

// Visual proof of concept, replace with an actual timer
function Timer() {
  const [timer, setTimer] = useState(1500);
  const [first, setfirst] = useState(second)
  
  function Timer() {

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }, [timer])

    return (
      <div>{timer}</div>
      // <button onClick={}> Start </button>
    )
  }

  return (
    <div id="timer">
      <Timer />
      <button onClick={() => {
        setInterval(() => setTimer(timer - 1), 1000)
      }}>Start</button>
    </div>
  );
}
export default Timer;
