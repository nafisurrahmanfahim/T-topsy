import React from 'react'
import Navbar from './components/navbarSection/Navbar'
import Banner from './components/heroSection/Banner'
import About from './components/aboutSection/About'
import LastSection from './components/lastSection/LastSection'
import Footer from './components/footerSection/Footer'
import VideoSection from './components/videoSection/VideoSection'
import SummerSale from './components/summerSale/SummerSale'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <LastSection/>
      <SummerSale/>
      <VideoSection/>
      <Footer/>
    </div>
  )
}

export default App