import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
// import my page components
import Home from './pages/Home';
import Nasalist from './pages/Nasalist';
import About from './pages/About';
// import my components
import Nav from './components/Nav';



function App() {
  

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/nasalist' element={<Nasalist/>} />
         </Routes>

  
      </div>
  )
}

export default App
