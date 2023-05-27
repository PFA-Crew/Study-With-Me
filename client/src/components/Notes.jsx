import React, { useState, useEffect, useRef } from 'react';
import './assets/App.css';

function Notes() {
  return (
    <div id="noteLayout">
      <ul>Notes:</ul>
      <li>React</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>React Routers</li>
      <li>BCrypt</li>
      <li>Acorns</li>
    </div>
  );
}

export default Notes;
