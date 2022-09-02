import React from 'react'
import Comics from "./comics.json";

function CategoriesSection() {

//Create a list of unique categories
let catList = [];
for (let item in Comics) {
    let cat = Comics[item].category;
    if (catList.indexOf(cat) === -1) {
      catList.push(cat);
    }
  
}

// Render each tag as a list item
const renderTags = (cats) => {
  return cats.map(cat => <li key={cat}>{cat}</li>)
}

  return (
    <section className="comic-container">
        <div className="tags-list-container">
            <h2>Comic Categories</h2>   
            <ul className="tag-list">
              {renderTags(catList)}
            </ul> 
            
        </div> 
    </section>
  )
}

export default CategoriesSection