import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import HeaderImage from '../components/HeaderImage';
import TagsSection from '../components/TagsSection';
import FooterSection from '../components/FooterSection';


function ComicTags() {
  return (
    <div className="container-grid">
        <Header />
        <Nav />
        <HeaderImage />
        <TagsSection /> 
        <FooterSection />
    </div>
    

  )
}

export default ComicTags