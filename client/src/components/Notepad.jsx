import React, { useState } from 'react';
import './assets/App.scss';

function Notepad({ totalNotes, setTotalNotes }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = async () => {
    try {
      // Create a new note
      await fetch('/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      // Update state (located in MainContainer)
      const newNote = { title, content };
      setTotalNotes([...totalNotes, newNote]); //update totalNotes to the newer version

      console.log('Created a new note.');
      console.log('totalNotes after save button click', totalNotes);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='note'>
      <input
        id='noteTitle'
        type='text'
        placeholder='Note Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      ></input>
      <textarea
        id='noteBody'
        type='text'
        placeholder='Jot some notes!'
        rows='44'
        cols='54'
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      ></textarea>
      <button onClick={saveNote}>save</button>
    </div>
  );
}

export default Notepad;
