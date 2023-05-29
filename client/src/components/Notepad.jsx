import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notepad() {

  return (
    <div className="note">
      <input type='text' placeholder='Note Title' id='noteTitle' required></input>
      <textarea type='text' placeholder='Jot some notes!' id='noteBody' rows='44' cols='54' required></textarea>
      {/* <textarea name="text" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea> */}
      {/* <input type='text' placeholder='Jot some notes!' id='noteBody' required></input> */}

      <button>save</button>
    </div>
  );
}

export default Notepad;
