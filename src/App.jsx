import React from 'react'
import Navbar from './components/navbarSection/Navbar'
import Banner from './components/heroSection/Banner'
import About from './components/aboutSection/About'
import LastSection from './components/lastSection/LastSection'
import Footer from './components/footerSection/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <LastSection/>
      <Footer/>
    </div>
  )
}

export default App