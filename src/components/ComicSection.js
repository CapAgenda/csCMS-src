import { useState } from "react";




function ComicSection () {

   /* Json list of comics to be put in separate file */
   let comics = [
    {
    'comicID': 1,
    'comicName': 'title of comic one',
    'comicURL': require('../images/csb-comic.webp')
    },
    {
    'comicID': 2,
    'comicName': 'no talk too awkward',
    'comicURL': require('../images/2.webp')
    },
    {
    'comicID': 3,
    'comicName': 'Thomas Bayes',
    'comicURL': require('../images/3.webp')
    },
    {
    'comicID': 4,
    'comicName': 'to shave or not to shave?',
    'comicURL': require('../images/4.webp')
    },
    {
    'comicID': 5,
    'comicName': 'not dipping',
    'comicURL': require('../images/5.webp')
    }
];
   
   
   
    let [comicIndex, setComicIndex] = useState(comics.length - 1)

    const comicsEnd = () => {
        setComicIndex(comics.length - 1);
    };
    const comicsNext = () => {
        if (comicIndex == comics.length -1) {
            setComicIndex(0);
        }
        else {
            setComicIndex(comicIndex + 1);
        }
    };
    const comicsRand = () => {
        const min = 0;
        const max = comics.length - 1;
        const rand = Math.floor(Math.random() * (max-min));
            setComicIndex(rand)
            console.log(rand);
    };
    const comicsPrev = () => {
        if (comicIndex == 0) {
            setComicIndex(comics.length - 1)
        }
        else 
            setComicIndex(comicIndex - 1);
    };
    const comicsStart = () => {
            setComicIndex(0);
    };
    
return (
    <section className="comic-container">
        <div className="comic-title"><h3>{comics[comicIndex].comicName}</h3></div>
        
        <div className="comic-image">
            <img src={comics[comicIndex].comicURL} alt="" />
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