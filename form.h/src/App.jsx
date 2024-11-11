import React, { useState } from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'

function App() {
  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
      </nav>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/User" element={<User />}/>
       </Routes>
    </div>
  )
}

export default App
