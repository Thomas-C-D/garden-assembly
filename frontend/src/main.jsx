import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './components/App'
import './index.css'

import IntroCard1 from './assets/images/IntroCard1.gif'
import IntroCard2 from './assets/images/IntroCard2.gif'
import IntroCard3 from './assets/images/IntroCard3.gif'
import ButtonClick from './assets/audio/buttonclick.mp3'
let slide = 1
const click = new Audio(ButtonClick)




setTimeout(() => {
  document.getElementById('intro-root').style.backgroundImage = `url('${IntroCard1}')`
  document.getElementById('intro-button').style.display = 'block'
}, 1300)

function introSlide() {
  click.play()
  if (slide == 1) {
    document.getElementById('intro-root').style.backgroundImage = `url('${IntroCard2}')`
  }
  if (slide == 2) {
    document.getElementById('intro-root').style.backgroundImage = `url('${IntroCard3}')`
  }
  if (slide == 3) {
    document.getElementById('intro-button').style.display = 'none'
    document.getElementById('intro-root').style.backgroundImage = "none"
    document.getElementById('intro-root').style.animation = "intropan 2s linear 2.8s reverse forwards"
    document.getElementById('app-root').style.animation = 'apppan 1.5s linear 1s forwards'
  }

  slide++;
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div id="intro-root"><button id="intro-button"  onClick={introSlide} ></button></div>
    <div id="app-root">
    <App />
    </div>
  </Router>,
)
