import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavLogo,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavLinks,
    MobileIcon 
} from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
    <IconContext.Provider value={({ scrollNav }) => (scrollNav ? '#00072d' : '#FFF')}>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo scrollNav ={scrollNav} to="/#" onClick={toggleHome}>ROBORAI</NavLogo>
                <MobileIcon scrollNav ={scrollNav} onClick={toggle}>
                    <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks scrollNav = {scrollNav}
                        onClick={toggleHome}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Comics</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks scrollNav ={scrollNav}
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks scrollNav ={scrollNav}
                        to="footer"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar