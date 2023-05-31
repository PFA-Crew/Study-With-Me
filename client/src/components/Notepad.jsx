import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notepad({ username, setTotalNotes, noteContent }) {
  const titleRef = useRef(null)
  const noteRef = useRef(null)

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
      title: titleRef.current.value,
      content: noteRef.current.value,
      username
    }

    console.log(body) // - > {title: "", content: "", username: "hello"}

    fetch('/notes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data); // -> note and notes
        setTotalNotes(data.notes);
        // window.location.reload();
      })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch(err => console.log('saveNote fetch /notes/create: ERROR: ', err));
  }

  return (
    <div className="note">
      {/* Issues with scaling textarea to page */}

      {/* <input type='text' placeholder='Note Title' id='noteTitle' value={title} required></input> */}
      {/* <textarea type='text' placeholder='Jot some notes!' id='noteBody' rows='44' cols='54' value={content} required></textarea> */}
      <input type='text' placeholder='Note Title' ref={titleRef} id='noteTitle' defaultValue={ noteContent.title } required></input>
      <textarea type='text' placeholder='Jot some notes!' ref={noteRef} id='noteBody' rows='44' cols='54' defaultValue={noteContent.content} required></textarea>


      <button onClick={() => saveNote()}>save</button>
    </div>
  );
}

export default Notepad;
