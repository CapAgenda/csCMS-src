import React from 'react'
import {FaLinkedin,  FaMastodon, FaTwitter, FaWordpress } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const toggleHome = () => {
    scroll.scrollToTop();
}


const Footer = () => {
  return (
    <FooterContainer id='footer'>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        ROBORAI
                    </SocialLogo>
                    <WebsiteRights>This work is licensed under a <a className='pLink' href='//creativecommons.org/licenses/by-nc/2.5/' target="_blank" aria-label="Creative Commons License">Creative Commons Attribution-NonCommercial 2.5 License</a></WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink 
                        href="//noagendasocial.com/@CSB" 
                        rel="noreferrer"
                        target="_blank" 
                        aria-label="No Agenda Social">
                            <FaMastodon />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="//twitter.com/CSB" 
                        rel="noreferrer"
                        target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="//www.linkedin.com/in/comic-strip-blogger-comic-strip-blogger-7a290b1b9/" 
                        rel="noreferrer"
                        target="_blank" 
                        aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink 
                        href="//comicstripblog.com/" 
                        rel="noreferrer"
                        target="_blank" 
                        aria-label="Wordpress">
                            <FaWordpress />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
             </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer