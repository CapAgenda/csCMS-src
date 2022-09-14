import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import Comics from '../ComicCard';
import { 
    HeroContainer,
    HeroBg,
    CoverBg,
    HeroContent,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    ArrowBack,
    ArrowLeft,
    IconRandom,
    IconRandomHover,
    IconOldestHover,
    IconOldest,
    IconNewestHover,
    IconNewest
} from './HeroElements'

const HeroSection = () => {

const [iconChange, setIconChange] = useState("");

  return (
    <HeroContainer>
        <HeroBg>  <CoverBg />  </HeroBg>  
        <HeroContent >     
            <Comics />
            <HeroBtnWrapper>
                <Button 
                to="work" 
                onMouseEnter={() => setIconChange("prev")}
                onMouseLeave={() => setIconChange("")}
                >{iconChange == "prev" ? <ArrowBack /> : <ArrowLeft/>} Prev 
                </Button>
                <Button 
                to="work" 
                onMouseEnter={() => setIconChange("rand")}
                onMouseLeave={() => setIconChange("")}
                >{iconChange == "rand" ? <IconRandomHover /> : <IconRandom/>} Random 
                </Button>
                <Button 
                to="work" 
                onMouseEnter={() => setIconChange("next")}
                onMouseLeave={() => setIconChange("")}
                >Next {iconChange == "next" ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            <HeroBtnWrapper>
                <Button 
                to="work" 
                onMouseEnter={() => setIconChange("oldest")}
                onMouseLeave={() => setIconChange("")}
                >{iconChange == "oldest" ? <IconOldestHover /> : <IconOldest/>} Oldest 
                </Button>
                <Button 
                to="work" 
                onMouseEnter={() => setIconChange("newest")}
                onMouseLeave={() => setIconChange("")}
                >Newest {iconChange == "newest" ? <IconNewestHover /> : <IconNewest/>}
                </Button>
            </HeroBtnWrapper>
              
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection