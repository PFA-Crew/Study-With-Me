import React, { useState } from 'react';
import {
  BrowserRouter, Router, Routes, Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import './index.scss';

function MainContainer() {
  const [clientDataObject, setClientData] = useState({});
  console.log() // {user: {username: "hello", duckColor: "yellow"}, notes: []}
  return (
      <Routes>
        <Route exact path="/"
          element={clientDataObject.user !== undefined ?
            (<App clientDataObject={clientDataObject} />) :
            (<LoginComponent setClientData={setClientData} />)} />
      </Routes>
  );
}

export default MainContainer;
