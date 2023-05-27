import React, { useEffect, useState } from 'react';
import './assets/App.scss';
import ResourceNotepad from './ResourceNotepad.jsx';

function Resources({notes, addNote}) {
  const handleClick = (event) => {
    event.preventDefault();
    addNote(oldArray => [...oldArray, <ResourceNotepad />])
  }
  return (
    <div id="resourceLayout">
      <ul>Resources:</ul>
      <hr></hr>
      <div id="resourcesContainer">
        <li><a href='#' onClick={handleClick}>Best Study Practice</a></li>
        <li><a href='https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques' onClick={handleClick}>Breathing Exercises</a></li>
        <li><a href='https://www.mayoclinic.org/healthy-lifestyle/adult-health/multimedia/stretching/sls-20076525' onClick={handleClick}>Desk Stretches</a></li>
        {notes}
      </div>
    </div>
  );
}

export default Resources;
