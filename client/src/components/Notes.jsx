import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notes({notes, setNoteContent}) {
  // Populate Notes Container with saved notes
  // let noteElements;
  // useEffect(() => {
  //   console.log(notes)
  //   noteElements = notes.map((note, i) => <li key={i} >{note.title}</li>
  // );
  // }, notes)
  function displayNote(noteIndex) {
    setNoteContent({ title: notes[noteIndex].title, content: notes[noteIndex].content})
  }
  const noteElements = notes.map((note, i) => (
    <li key={i} onClick={() => displayNote(i)}>{note.title}</li>
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
