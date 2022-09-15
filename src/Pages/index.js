import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'


const Main = () => {
  
    /* Mobile Nav Toggle */
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    /* ------------ */
  
    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar isOpen={isOpen} toggle={toggle} />
        
        <HeroSection />
        <About />
        <Footer />
    </>
  )
}

export default Main