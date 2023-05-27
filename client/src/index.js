import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
