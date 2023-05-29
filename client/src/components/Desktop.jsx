import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';
import Ducky from './Ducky.jsx'
import FidgetSpinner from './FidgetSpinner.jsx'
// import App from './App.jsx'

function Desktop({customizationOptions}) {

  // (Not dry, can probably refactor to be more efficient)
  const cell1Populator = () => {
    if (customizationOptions[0] === "ducky") return <Ducky />
    if (customizationOptions[0] === "fidget") return <FidgetSpinner />
    if (customizationOptions[0] === "timer") return <Timer />
  }

  const cell3Populator = () => {
    if (customizationOptions[1] === "ducky") return <Ducky />
    if (customizationOptions[1] === "fidget") return <FidgetSpinner />
    if (customizationOptions[1] === "timer") return <Timer />
  }

  const cell7Populator = () => {
    if (customizationOptions[2] === "ducky") return <Ducky />
    if (customizationOptions[2] === "fidget") return <FidgetSpinner />
    if (customizationOptions[2] === "timer") return <Timer />
  }

  const cell9Populator = () => {
    if (customizationOptions[3] === "ducky") return <Ducky />
    if (customizationOptions[3] === "fidget") return <FidgetSpinner />
    if (customizationOptions[3] === "timer") return <Timer />
  }

  return (
    <div className="desktopContainer">
      {/* <h1>test</h1> */}
      {/* <div className="cell" id="cell1"><Ducky /></div> */}
      <div className="cell" id="cell1">{cell1Populator()}</div>

      <div className="cell" id="cell2">Cell 2</div>
      <div className="cell" id="cell3">{cell3Populator()}</div>
      <div className="cell" id="cell4">Cell 4</div>
      <div className="center">Cell 5</div>
      <div className="cell" id="cell6">Cell 6</div>
      <div className="cell" id="cell7">{cell7Populator()}</div>
      <div className="cell" id="cell8">Cell 8</div>
      <div className="cell" id="cell9">{cell9Populator()}</div>
    </div>
  );
}

// reference a state for cells 1-9
// instead of the Cell # text, we reference an index
// Customization will allow mutation of the state array

export default Desktop;


/*

state brainstorming
array with four spots, Cell 1, Cell 3, Cell 7, and Cell 9
[Cell1, Cell3, Cell7, Cell9]
["ducky", "fidget", "timer", ""]

if
state DuckyEnabled = true
search state


Cell1Populator
if (customizationState[0] === "ducky") return <Ducky />
if (customizationState[0] === "fidget") return <FidgetSpinner />
if (customizationState[0] === "timer") return <Timer />

Cell3Populator
if (customizationState[1] === "ducky") return <Ducky />
if (customizationState[1] === "fidget") return <FidgetSpinner />
if (customizationState[1] === "timer") return <Timer />

Cell7Populator
if (customizationState[2] === "ducky") return <Ducky />
if (customizationState[2] === "fidget") return <FidgetSpinner />
if (customizationState[2] === "timer") return <Timer />

Cell9Populator
if (customizationState[3] === "ducky") return <Ducky />
if (customizationState[3] === "fidget") return <FidgetSpinner />
if (customizationState[3] === "timer") return <Timer />


*/