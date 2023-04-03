import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </div>
  )
}



export default App
