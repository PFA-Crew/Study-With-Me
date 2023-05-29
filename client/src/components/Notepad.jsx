import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notepad() {

  return (
    <div className="note">
      <input type='text' placeholder='Note Title' id='noteTitle' required></input>
      {/* Issues with scaling textarea to page */}
      <textarea type='text' placeholder='Jot some notes!' id='noteBody' rows='44' cols='54' required></textarea>
      <button>save</button>
    </div>
  );
}

export default Notepad;
