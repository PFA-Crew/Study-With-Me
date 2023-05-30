import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notepad() {
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    }
    return [ value, onChange ];
  }
  const [ title, setNoteTitle ] = useInput('');
  const [ content, setNoteBody ] = useInput('');

  const saveNote = () => {
    const body = {
      title,
      content,
      username
    }

    fetch('/notes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .then(() => {
        props.history.push('/');
      })
      .catch(err => console.log('saveNote fetch /notes/create: ERROR: ', err));
  }

  return (
    <div className="note">
      {/* Issues with scaling textarea to page */}

      {/* <input type='text' placeholder='Note Title' id='noteTitle' value={title} required></input> */}
      {/* <textarea type='text' placeholder='Jot some notes!' id='noteBody' rows='44' cols='54' value={content} required></textarea> */}
      <input type='text' placeholder='Note Title' id='noteTitle' required></input>
      <textarea type='text' placeholder='Jot some notes!' id='noteBody' rows='44' cols='54' required></textarea>


      <button onClick={() => saveNote()}>save</button>
    </div>
  );
}

export default Notepad;
