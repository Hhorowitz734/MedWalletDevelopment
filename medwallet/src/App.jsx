import { useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import GetStarted from './components/getstarted'
import OurWork from './components/ourwork'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <GetStarted />
      <OurWork />
    </React.Fragment>
  )
}

export default App
