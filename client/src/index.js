import React from 'react';
import {
  BrowserRouter, Router, Routes, Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import MainContainer from './MainContainer.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
// root.render(<LoginComponent />);
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <MainContainer />
  </BrowserRouter>,
  // <BrowserRouter>
  //   <Routes>
  //     <Router>
  //       <Route exact path="/" element={clientDataObject !== {} ? (<App clientDataObject={clientDataObject} />) : (<LoginComponent />)} />
  //     </Router>
  //   </Routes>
  // </BrowserRouter>,
  // <Route exact path="/" element={clientDataObject !== {} ? (<App clientDataObject={clientDataObject} />) : (<LoginComponent />)} />,
);

