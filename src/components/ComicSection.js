import { useState } from "react";
import Comics from "./components/comics.json";




function ComicSection () {
   
    let [comicIndex, setComicIndex] = useState(Comics.length - 1)

    const comicsEnd = () => {
        setComicIndex(Comics.length - 1);
    };
    const comicsNext = () => {
        if (comicIndex === Comics.length -1) {
            setComicIndex(0);
        }
        else {
            setComicIndex(comicIndex + 1);
        }
    };
    const comicsRand = () => {
        const min = 0;
        const max = Comics.length - 1;
        const rand = Math.floor(Math.random() * (max-min));
            setComicIndex(rand)
            console.log(rand);
    };
    const comicsPrev = () => {
        if (comicIndex === 0) {
            setComicIndex(Comics.length - 1)
        }
        else 
            setComicIndex(comicIndex - 1);
    };
    const comicsStart = () => {
            setComicIndex(0);
    };
    
return (
    <section className="comic-container">
        <div className="comic-title"><h3>{Comics[comicIndex].Title}</h3></div>
        
        <div className="comic-image">
            <img src={Comics[comicIndex].Ref} alt="" />
        </div>
        <div className="comic-nav">
            <ul className="comic-nav-list">
                <li><button  onClick={comicsStart}>|&#10096;</button></li>
                <li><button onClick={comicsPrev}>Prev</button></li>
                <li><button  onClick={comicsRand}>Random</button></li>
                <li><button  onClick={comicsNext}>Next</button></li>
                <li><button  onClick={comicsEnd}>&#10097;|</button></li>
            </ul>
        </div>
        <div className="comic-text">
            <p>Permanent Link:  <a href="/#">url.csb/thiscomic</a></p>
            <p>Image URL (for hotlinking / embedding) <a href="/#">url.csb/thiscomic</a></p>
        </div>
    </section>
)

}

export default ComicSection