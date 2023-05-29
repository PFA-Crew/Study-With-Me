import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notes() {
  // Populate Notes Container with saved notes
  // const noteElements = notes.map((note, i) => (
  //   <li key={i} onClick={() => *show note* }>{noteName}</li>
  // ));

  return (
    <div id="noteLayout">
      <ul>Notes:</ul>
      <hr />
      <div id="notesContainer">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React Routers</li>
        <li>BCrypt</li>
        <li>Acorns</li>
        {/* {noteElements} */}

      </div>
    </div>
  );
}

export default Notes;
