import styled from 'styled-components';
import {Link as LinkRo} from 'react-router-dom';
import {Link as LinkSc} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#FFF' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0 0px 40px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.2)' : 'none')};
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;       
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;    
`;

export const NavLogo = styled(LinkRo)`
    color: ${({ scrollNav }) => (scrollNav ? '#00072d' : '#FFF')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: ${({ scrollNav }) => (scrollNav ? '#000' : '#e3f2fd')};
        transition: 0.5s all ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        color: ${({ scrollNav }) => (scrollNav ? '#00072d' : '#FFF')};
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px; // Remove if not needed

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkSc)`
    color: ${({ scrollNav }) => (scrollNav ? '#00072d' : '#FFF')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
        color: ${({ scrollNav }) => (scrollNav ? '#000' : '#e3f2fd')};
        transition: 0.5s all ease-in-out;
    }

    &.active {
        border-bottom: 3px solid #e3f2fd;
    }
`;