import React from 'react'

import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
  return (
    <> 
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="comics" onClick={toggle}>
                    Comics
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar