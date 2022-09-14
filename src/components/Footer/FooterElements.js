import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: #000;

`

export const FooterWrap = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #E3F2FD;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #E3F2FD;
    margin-bottom: 16px;

    & a.pLink {
        color: #FFF;
        text-decoration: none; 
    }

    & a.pLink:hover {
        color: #E3F2FD;
        text-decoration: none; 
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #E3F2FD;
    font-size: 24px;
`
