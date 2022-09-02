import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import HeaderImage from '../components/HeaderImage';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection'

function About() {
  return (
    <div className="container-grid">
        <Header />
        <Nav />
        <HeaderImage />
        <AboutSection />
        <FooterSection />
        
    </div>
  )
}

export default About