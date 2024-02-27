import { Routes, Route, Link } from 'react-router-dom'

import './styles.css'
import './app.js'
import HomePage from '../HomePage/index.jsx'
import IndexPage from '../IndexPage/index.jsx'
function App() {
 

  return (
    <>
    <audio controls loop muted autoPlay  id="darkness"><source src={darkAudio} type="audio/mp3"/></audio>
    <Routes>
      <Route path="/"
      element={
        <HomePage />
      } />
    <Route  path="/index"
    element={
      <IndexPage />
    } />
    </Routes>
    </>
  )
}

export default App
