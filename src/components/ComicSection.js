import { useState } from "react";
import Comics from "./comics.json";

function ComicSection () {
   
    let [comicIndex, setComicIndex] = useState(0)
// Goto most recent Comic
    const comicsEnd = () => {
        setComicIndex(0);
    };
//Goto next or if at end goto first Comic
    const comicsNext = () => {
        if (comicIndex === 0) {
            setComicIndex(Comics.length - 1);
        }
        else {
            setComicIndex(comicIndex - 1);
        }
    };
//Got to random Comic
    const comicsRand = () => {
        const min = 0;
        const max = Comics.length - 1;
        const rand = Math.floor(Math.random() * (max-min));
            setComicIndex(rand)
            console.log(rand);
    };
//Goto previous or if at beginning got to most recent Comic
    const comicsPrev = () => {
        if (comicIndex === Comics.length - 1) {
            setComicIndex(0)
        }
        else 
            setComicIndex(comicIndex + 1);
    };
//Goto first comic published 
    const comicsStart = () => {
            setComicIndex(Comics.length - 1);
    };
//Create an <li> element with the current comic's tags
   const tags =  Comics[comicIndex].tags
   const renderTags = (tags) => {
        return tags.map(tag => <li key={tag}>{tag}</li>)
   }
     
return (
    <section className="comic-container">
        <div className="comic-nav">
            <ul className="comic-nav-list">
                <li><button onClick={comicsStart}>|&#10096;</button></li>
                <li><button onClick={comicsPrev}>Prev</button></li>
                <li><button onClick={comicsRand}>Random</button></li>
                <li><button onClick={comicsNext}>Next</button></li>
                <li><button onClick={comicsEnd}>&#10097;|</button></li>
            </ul>
        </div>
        <div className="comic-title">
            <h3>{Comics[comicIndex].title}</h3>  
        </div>
        
        <div className="comic-image">
            <img src={process.env.PUBLIC_URL +'/images/'+ Comics[comicIndex].filename} alt="" />
        </div>
        <p className="text-center">Posted: <span className="text-primary-500 text-light">{Comics[comicIndex].date}</span></p>
        <div className="comic-nav">
            <ul className="comic-nav-list">
                <li><button onClick={comicsStart}>|&#10096;</button></li>
                <li><button onClick={comicsPrev}>Prev</button></li>
                <li><button onClick={comicsRand}>Random</button></li>
                <li><button onClick={comicsNext}>Next</button></li>
                <li><button onClick={comicsEnd}>&#10097;|</button></li>
            </ul>
        </div>
        <div className="comic-text">
        <p>Category:  <span className="text-primary-500 capitalize">{Comics[comicIndex].category}</span></p>
            <p>Tags:</p>
            <ul className="tag-list">{renderTags(tags)}</ul>
            
            
        </div>
    </section>
)
}

export default ComicSection