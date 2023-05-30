import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';
import Ducky from './Ducky.jsx';
import FidgetSpinner from './FidgetSpinner.jsx'
import Notepad from './Notepad.jsx'
import Timer from './Timer.jsx'
// import App from './App.jsx'

function Desktop({notes, customizationOptions, duckyVisual, resourceURL, resourceWindow, setResourceWindow, username, setTotalNotes, noteContent}) {

  // (Not dry, can probably refactor to be more efficient)
  // Populate the associated Cell with the required widget
  const cell1Populator = () => {
    if (customizationOptions[0] === "ducky") return <Ducky duckyVisual={duckyVisual}/>
    if (customizationOptions[0] === "fidget") return <FidgetSpinner />
    if (customizationOptions[0] === "timer") return <Timer />
  }

  const cell3Populator = () => {
    if (customizationOptions[1] === "ducky") return <Ducky duckyVisual={duckyVisual}/>
    if (customizationOptions[1] === "fidget") return <FidgetSpinner />
    if (customizationOptions[1] === "timer") return <Timer />
  }

  // Not working...
  // const cell5Populator = () => {
  //   <div>
  //     <span className="material-symbols-rounded" id="resourceClose" onClick={() => setResourceWindow(false)}>close</span>
  //     <iframe src={resourceURL} id="iframe"></iframe>
  //   </div>
  // }

  const cell7Populator = () => {
    if (customizationOptions[2] === "ducky") return <Ducky duckyVisual={duckyVisual}/>
    if (customizationOptions[2] === "fidget") return <FidgetSpinner />
    if (customizationOptions[2] === "timer") return <Timer />
  }

  const cell9Populator = () => {
    if (customizationOptions[3] === "ducky") return <Ducky duckyVisual={duckyVisual}/>
    if (customizationOptions[3] === "fidget") return <FidgetSpinner />
    if (customizationOptions[3] === "timer") return <Timer />
  }

  return (
    // Future ideas: place music player in Cell 8, Notepad to primarily be in Cell 5 but relocate to Cell 6 when a Resource is opened.
    <div className="desktopContainer">
      {/* <h1>test</h1> */}
      <div className="cell" id="cell1">{cell1Populator()}</div>
      <div className="cell" id="cell2"></div>
      <div className="cell" id="cell3">{cell3Populator()}</div>
      <div className="cell" id="cell4"></div>
      {/* <div className="center">{notes}</div> */}
      {/* Need to create button for closing out the resource */}
      <div className="center">
         <iframe src={resourceURL}></iframe>
      </div>

      <div className="cell" id="cell6"><Notepad noteContent={noteContent} setTotalNotes={setTotalNotes} username={username}/></div>
      <div className="cell" id="cell7">{cell7Populator()}</div>
      <div className="cell" id="cell8"></div>
      <div className="cell" id="cell9">{cell9Populator()}</div>
    </div>
  );
}

export default Desktop;