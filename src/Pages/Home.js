import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import HeaderImage from '../components/HeaderImage';
import ComicSection from '../components/ComicSection';
import FooterSection from '../components/FooterSection';

function Home() {
  return (
    <div className="container-grid">
      <Header />
      <Nav />
      <HeaderImage />
      <ComicSection />
      <FooterSection />
    </div>
  )
}

export default Home