import React from 'react'
import "./App.css"
import Hero from './Hero'
import Business from './Business'
import Card from './Card'
import card from '../card'
import Services from './Services'
import Tagline from './Tagline'
import Pfooter from './Pfooter'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Business/>
      <Services/>
      <Tagline/>
      <Pfooter/>
      <Footer/>
    </div>
  )
}

export default App
