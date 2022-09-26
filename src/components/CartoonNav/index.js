import React, {useState, useEffect} from 'react';
import axios from "axios";
import {     
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
} from '../Hero/HeroElements'

import {    
    ComicCard,
    Comic,
    ComicH1,
    ComicSmall,
    ComicP,
    ComicButton
    } from '../ComicCard/ComicCardElements'


export default function CartoonNav() {

    const baseEndpointUrl = 'https://apicsb.herokuapp.com/'
    const baseImageSrcUrl = 'https://apicsb.herokuapp.com/image/'

    const [iconChange, setIconChange] = useState("");
    const [currentComic, setCurrentComic] = useState([])
    const [loading, setLoading] = useState(false)
    const [primeEndpoint, setPrimeEndpoint] = useState(baseEndpointUrl+"get-latest")
    
    const fetchComic = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios.get(url, {
                headers: {
                    "Content-Type": "text/plain"
                }
            })
            if (data) {
                setCurrentComic(data)
            }
            else {
                setCurrentComic([])
            }
        }
        catch (e) {
            console.log(e.response)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchComic(primeEndpoint)
    }, [primeEndpoint])

    
    function handlePrevCartoon() {
        setPrimeEndpoint(baseEndpointUrl+"prev-comic/"+currentComic.published_ts);   
    }

    function handleNextCartoon() {
        setPrimeEndpoint(baseEndpointUrl+"next-comic/"+currentComic.published_ts);   
    
    } 
    function handleFirstCartoon() {
        setPrimeEndpoint(baseEndpointUrl+"first-comic");   
    }
    function handleLatestCartoon() {
        setPrimeEndpoint(baseEndpointUrl+"get-latest");   
    }
    function handleRandomCartoon() {
        setPrimeEndpoint(baseEndpointUrl+"random-comic");   
    } 
    
    return (
        <>    
            {loading
            ?<ComicH1>Loading...</ComicH1>
            :<ComicH1>{currentComic.title}</ComicH1>
            }
            <ComicCard className='paperCard' >
                <Comic src={baseImageSrcUrl+currentComic.filename} alt={currentComic.filename}/>
                <ComicSmall>Published: {currentComic.published_at}</ComicSmall>
            </ComicCard>
            <ComicP>Tags: {currentComic.tags}</ComicP>
            <HeroBtnWrapper>
                <ComicButton 
                onMouseEnter={() => setIconChange("prev")}
                onMouseLeave={() => setIconChange("")}
                onClick={handlePrevCartoon}   
                >{iconChange === "prev" ? <ArrowBack /> : <ArrowLeft/>}
                 Prev 
                </ComicButton>
                <ComicButton 
                onMouseEnter={() => setIconChange("rand")}
                onMouseLeave={() => setIconChange("")}
                onClick={handleRandomCartoon}
                >{iconChange === "rand" ? <IconRandomHover /> : <IconRandom/>} Random 
                </ComicButton>
                <ComicButton 
                onMouseEnter={() => setIconChange("next")}
                onMouseLeave={() => setIconChange("")}
                onClick={handleNextCartoon}
                >Next {iconChange === "next" ? <ArrowForward /> : <ArrowRight/>}
                </ComicButton>
            </HeroBtnWrapper>
            <HeroBtnWrapper>
                <ComicButton 
                onMouseEnter={() => setIconChange("oldest")}
                onMouseLeave={() => setIconChange("")}
                onClick={handleFirstCartoon}
                >{iconChange === "oldest" ? <IconOldestHover /> : <IconOldest/>} Oldest 
                </ComicButton>
                <ComicButton 
                onMouseEnter={() => setIconChange("newest")}
                onMouseLeave={() => setIconChange("")}
                onClick={handleLatestCartoon}
                >Newest {iconChange === "newest" ? <IconNewestHover /> : <IconNewest/>}
                </ComicButton>
            </HeroBtnWrapper>
  
                
        </>
    )
}

