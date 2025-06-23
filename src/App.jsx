import React from 'react'
import Navbar from './components/navbarSection/Navbar'
import Banner from './components/heroSection/Banner'
import About from './components/aboutSection/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
    </div>
  )
}

export default App