import React, { useState } from 'react';
import {
  BrowserRouter, Router, Routes, Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainContainer from './components/MainContainer.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import './index.scss';

function App() {
  const [clientDataObject, setClientData] = useState({});
  console.log() // {user: {username: "hello", duckColor: "yellow"}, notes: []}
  return (
      <Routes>
        <Route exact path="/"
          element={clientDataObject.user !== undefined ?
            (<MainContainer clientDataObject={clientDataObject} setClientData={setClientData}/>) :
            (<LoginComponent setClientData={setClientData} />)} />
      </Routes>
  );
}

export default App;
