import React, { useState, useEffect, useRef } from 'react';
import './assets/App.scss';

function Notes() {
  return (
    <div id="noteLayout">
      <ul>Notes:</ul>
      <hr></hr>
      <div id="notesContainer">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React Routers</li>
        <li>BCrypt</li>
        <li>Acorns</li>
      </div>
    </div>
  );
}

export default Notes;
