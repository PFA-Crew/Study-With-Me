import React from 'react';
import {
  BrowserRouter, Router, Routes, Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
