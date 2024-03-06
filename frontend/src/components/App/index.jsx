import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLinkClickHandler } from 'react-router-dom'

import './styles.css'
import './app.js'
import HomePage from '../HomePage/index.jsx'
import IndexPage from '../IndexPage/index.jsx'
import AuthFormPage from '../AuthFormPage/index.jsx'
import NewFlowerPage from '../NewFlowerPage/index.jsx'
import DetailsPage from '../DetailsPage/index.jsx'




function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [flowerId, setFlowerId] = useState()
  
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
    id="logout-button"
>
    Log out
  </button>
}



  return (
    <>
    
    <nav>
    <div><Link to="/">Garden-Assembly</Link></div>
    
      <ul id="link-list">
        <li><Link to="/newflower">Plant a flower</Link></li>
        {authLink}
        <li><Link to="/index">Index</Link></li>
      </ul>
    
    </nav>

    <Routes>
      <Route path="/"
      element={
        <HomePage />
      } />
    <Route  path="/index"
    element={
      <IndexPage  makeFlowerId={setFlowerId}/>
    } />
    <Route path="/details"
      element={
        <DetailsPage myFlowerId={flowerId} loginStatus={loginStatus} />
      }
    />
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
