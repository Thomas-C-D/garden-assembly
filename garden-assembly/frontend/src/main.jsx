import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './components/App'
import './index.css'
import IntroCardOne from './assets/images/IntroCard1.gif'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div id="intro-root"></div>
    <div id="app-root">
    <App />
    </div>
  </Router>,
)
