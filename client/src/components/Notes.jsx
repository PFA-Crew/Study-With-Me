import React from 'react';
import './assets/App.scss';

function Notes({ totalNotes }) {
  //totalNotes is an array containing objects { title: string, content: string }
  return (
    <div id='noteLayout'>
      <h3>Notes</h3>
      <hr />
      <div id='notesContainer'>
        <ul>
          {totalNotes.map((note, i) => (
            <li key={i}>{note.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Notes;
