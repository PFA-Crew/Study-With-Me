import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notes({notes}) {
  // Populate Notes Container with saved notes
  // let noteElements;
  // useEffect(() => {
  //   console.log(notes)
  //   noteElements = notes.map((note, i) => <li key={i} >{note.title}</li>
  // );
  // }, notes)
  console.log(notes)
  const noteElements = notes.map((note, i) => (
    <li key={i} >{note.title}</li>
  ))
  return (
    <div id="noteLayout">
      <ul>Notes</ul>
      <hr />
      <div id="notesContainer">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React Routers</li>
        <li>BCrypt</li>
        <li>Acorns</li>
        {noteElements}
      </div>
    </div>
  );
}

export default Notes;
