import React from 'react';
import CartoonNav from '../CartoonNav';

import { 
    HeroContainer,
    HeroBg,
    CoverBg,
    HeroContent,
} from './HeroElements'

const HeroSection = () => {





  return (
    <HeroContainer id="comics">
        <HeroBg>  <CoverBg />  </HeroBg>  
        <HeroContent >     
        <CartoonNav />
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection