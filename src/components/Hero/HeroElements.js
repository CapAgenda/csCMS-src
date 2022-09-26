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
    margin-top: 16px;
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