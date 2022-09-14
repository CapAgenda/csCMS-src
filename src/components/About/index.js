import React from 'react'
import csbLogo from '../../Assets/Images/csbLogo.png'
import { Button } from '../ButtonElement'
import { animateScroll as scroll } from 'react-scroll';
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img
} from './AboutElements'


const toggleHome = () => {
  scroll.scrollToTop();
}

const About = () => {
  return (
    <>
    <AboutContainer id='about'>
      <AboutWrapper>
        <AboutRow>
          <Column1>
            <TextWrapper>
              <TopLine>About </TopLine>
              <Heading >csb.lol</Heading>
              <Subtitle>Comics created by Comic Strip Blogger.</Subtitle>
              <BtnWrap>
                <Button 
                to='/' onClick={toggleHome}
                >Back to The Comics</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={csbLogo} alt='csb logo' />
            </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
    </>
  )
}

export default About