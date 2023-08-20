import React from 'react'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App