import styled from "styled-components";

export const ComicsContainer = styled.div`
    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding-bottom: 10px;
`

export const ComicsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 768px) {   
        padding: 0 5px;
    }
`
 

export const ComicCard = styled.div`    
    height: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 0 0px 40px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    transform: 0;

    &.paperCard:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`
export const ComicH1 = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;
    padding-bottom: 35px;
    word-break: break-all;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        word-break: break-word;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        word-break: break-word;
    }
`

export const ComicSmall = styled.small`
    font-size: 1rem;
    text-align: right;
    color: black;
    width: 100%;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        font-size: .75rem;
    }
`

export const ComicP = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #FFF;
    width: 100%;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

`

export const Comic = styled.img`
    max-height: 60vh;
    height: 100%;
    width: auto;
    max-width: 100%;
    margin-bottom: 10px;
    border: 3px solid black;
    border-radius:3px;
`

import styled from "styled-components";
import {
    MdKeyboardArrowRight,
    MdArrowForward,
    MdArrowBack,
    MdKeyboardArrowLeft,
    MdOutlineFirstPage,
    MdOutlineLastPage  } from 'react-icons/md'
import {
    GiCardRandom,
    GiPerspectiveDiceSixFacesRandom
} from 'react-icons/gi'
import {
    ImFirst,
    ImLast
} from 'react-icons/im'


export const HeroContainer = styled.div`
    background: #e3f2fd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    min-height: 100vh;
    
    position: relative;
    z-index: 1;
    
    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0, 0.2) 0%, 
            rgba(0,0,0, 0.6) 100%
            ),
            linear-gradient(
                180deg,
                rgba(0,0,0, 0.2) 0%, transparent 100% 
            );
        z-index: 2;
    }
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`
export const CoverBg = styled.div`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: red;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 80px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroBtnWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 5px; 
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 3px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 3px;
    font-size: 20px;
`
export const ArrowBack = styled(MdArrowBack)`
    margin-right: 3px;
    font-size: 20px;
`

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
    margin-right: 3px;
    font-size: 20px;
`

export const IconRandom = styled(GiPerspectiveDiceSixFacesRandom)`
    margin-right: 3px;
    font-size: 20px;
`

export const IconRandomHover = styled(GiCardRandom)`
    margin-right: 3px;
    font-size: 20px;
`

export const IconOldest = styled(MdOutlineFirstPage)`
    margin-right: 3px;
    font-size: 20px;
`
export const IconOldestHover = styled(ImFirst)`
    margin-right: 3px;
    font-size: 20px;
`
export const IconNewest = styled(MdOutlineLastPage)`
    margin-left: 3px;
    font-size: 20px;
`
export const IconNewestHover = styled(ImLast)`
    margin-left: 3px;
    font-size: 20px;
`