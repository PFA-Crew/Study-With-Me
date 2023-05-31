import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notes({totalNotes, setNoteContent, setTotalNotes}) {
 //make a get request to Notes to get all recent notes
  // update state of notes with useEffect()
  //render udated notes with state
  const getNotes = async () => {
    const results = await fetch('/notes');

  }

  // Populate Notes Container with saved notes
  // let noteElements;
  // console.log(totalNotes);
  // useEffect(() => {
  //   console.log(totalNotes)
  //   noteElements = totalNotes.map((note, i) => <li key={i} >{note.title}</li>
  // );
  // }, [totalNotes])
  function displayNote(noteIndex) {
    setNoteContent({ title: totalNotes[noteIndex].title, content: totalNotes[noteIndex].content})
  }
  const noteElements = totalNotes.map((note, i) => (
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
