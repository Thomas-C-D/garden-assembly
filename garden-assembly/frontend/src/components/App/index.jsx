import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './styles.css'
import './app.js'
import HomePage from '../HomePage/index.jsx'
import IndexPage from '../IndexPage/index.jsx'
import AuthFormPage from '../AuthFormPage/index.jsx'
import NewFlowerPage from '../NewFlowerPage/index.jsx'

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('userToken')) { setLoginStatus(true) }
  }, [])

 let authLink = <>
 <li><Link to="/auth/signup">Sign up</Link></li>
 <li><Link to="/auth/login">Log in</Link></li>
 </>

if (loginStatus) {
  authLink = <button
    onClick={() => {
      localStorage.clear()
      setLoginStatus(false)
    }}
  >
    Log out
  </button>
}



  return (
    <>
    <nav>
    <div><Link to="/">Garden-Assembly</Link></div>
    <div>
      <ul>
        <li><Link to="/newflower">Plant a flower</Link></li>
        {authLink}
        <li><Link to="/index">Index</Link></li>
      </ul>
    </div>
    </nav>

    <Routes>
      <Route path="/"
      element={
        <HomePage />
      } />
    <Route  path="/index"
    element={
      <IndexPage />
    } />
    <Route  path="/auth/:formType" 
    element={
    <AuthFormPage  setLoginStatus={setLoginStatus} />
    } />
    <Route path="/newflower" 
    element={
      <NewFlowerPage />
    }
    ></Route>
    </Routes>
    </>
  )
}

export default App
