import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import './index.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginComponent />} />
      <Route path='/app' element={<MainContainer />} />
    </Routes>
  );
}

export default App;
