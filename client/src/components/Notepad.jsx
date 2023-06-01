import React, { useState } from 'react';
import './assets/App.scss';

function Notepad({ totalNotes, setTotalNotes, savedNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = async () => {
    try {
      // Create a new note
      const response = await fetch('/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      const newNote = await response.json();
      console.log('newNote in notepad', newNote);
      // Update state (located in MainContainer)
      setTotalNotes([...totalNotes, newNote]); //update totalNotes to the newer version

      console.log('Created a new note.');
    } catch (err) {
      console.error(err);
    }
  };
  console.log('totalNotes after save button click', totalNotes);
  console.log(savedNote);

  // create function to handle sending a patch request to update note
  // also update state

  // create function to handle deleting a note from both db and state

  // create onclick handler for delete and cancel buttons to reset
  // displayed title / content to this component's state

  let saved = savedNote;
  let displayedTitle = title;
  let displayedContent = content;
  if (saved) {
    displayedTitle = saved.title;
    displayedContent = saved.content;
  }

  console.log('saved in Notepad: ', saved);
  return (
    <div className='note'>
      <input
        id='noteTitle'
        type='text'
        placeholder='Note Title'
        value={displayedTitle}
        onChange={e => setTitle(e.target.value)}
        required
      ></input>
      <textarea
        id='noteBody'
        type='text'
        placeholder='Jot some notes!'
        rows='44'
        cols='54'
        value={displayedContent}
        onChange={e => setContent(e.target.value)}
        required
      ></textarea>
      <button onClick={saveNote}>save</button>
    </div>

    // <div className='note'>
    // <input
    //   id='noteTitle'
    //   type='text'
    //   placeholder='Note Title'
    //   value={title}
    //   onChange={e => setTitle(e.target.value)}
    //   required
    // ></input>
    // <textarea
    //   id='noteBody'
    //   type='text'
    //   placeholder='Jot some notes!'
    //   rows='44'
    //   cols='54'
    //   value={content}
    //   onChange={e => setContent(e.target.value)}
    //   required
    // ></textarea>
    // <button onClick={saveNote}>save</button>
    // </div>
  );
}

export default Notepad;
