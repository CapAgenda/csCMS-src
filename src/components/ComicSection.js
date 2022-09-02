import { useState } from "react";
import Comics from "./comics.json";




function ComicSection () {
   
    let [comicIndex, setComicIndex] = useState(0)

    const comicsEnd = () => {
        setComicIndex(0);
    };
    const comicsNext = () => {
        if (comicIndex === 0) {
            setComicIndex(Comics.length - 1);
        }
        else {
            setComicIndex(comicIndex - 1);
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
        if (comicIndex === Comics.length - 1) {
            setComicIndex(0)
        }
        else 
            setComicIndex(comicIndex + 1);
    };
    const comicsStart = () => {
            setComicIndex(Comics.length - 1);
    };

   const tags =  Comics[comicIndex].tags
   const renderTags = (tags) => {
        return tags.map(tag => <li key={tag}>{tag}</li>)
   }
     

return (
    <section className="comic-container">
        <div className="comic-title"><h3>{Comics[comicIndex].title}</h3></div>
        
        <div className="comic-image">
            <img src={process.env.PUBLIC_URL +'/images/'+ Comics[comicIndex].filename} alt="" />
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
            <p>Tags:</p> <ul className="tag-list">{renderTags(tags)}</ul>
            <p>Image Link: <a href={Comics[comicIndex].imageurl}>{Comics[comicIndex].imageurl}</a></p>
            <p>Wordpress Link: <a href={Comics[comicIndex].wppage}>{Comics[comicIndex].wppage}</a></p>
        </div>
    </section>
)

}

export default ComicSection