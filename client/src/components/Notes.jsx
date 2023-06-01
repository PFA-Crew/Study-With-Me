import React from 'react';
import './assets/App.scss';

function Notes({ totalNotes, setSavedNote }) {
  //totalNotes is an array containing objects { title: string, content: string }

  // create handler for click of a note
  const handleClick = note => {
    console.log(`${note.title} clicked!`);
    setSavedNote(note);
  };

  // change each note element to be a link, or add styling to let user the text is clickable

  return (
    <div id='noteLayout'>
      <h3>Notes</h3>
      <hr />
      <div id='notesContainer'>
        <ul>
          {totalNotes.map((note, i) => (
            <li
              style={{ cursor: 'pointer' }}
              key={i}
              onClick={() => handleClick(note)}
            >
              {note.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Notes;
