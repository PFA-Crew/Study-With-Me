import React from "react";
import reactDom, {createRoot} from 'react-dom/client'
import App from './components/App/App.js'
import './index.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)