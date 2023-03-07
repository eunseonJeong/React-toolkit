import React from 'react'
import Home from './reducer/Page/Home'
import About from './reducer/Page/About'
import { Route, Routes } from 'react-router-dom'
import "./App.css";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About/:id' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App