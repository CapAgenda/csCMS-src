import React from 'react'
import Comics from "./comics.json";

function TagsSection() {

//Create a list of unique tags
let tagsList = [];
for (let item in Comics) {
  for (let innTags in Comics[item].tags) {
    let tag = Comics[item].tags[innTags];
    if (tagsList.indexOf(tag) === -1) {
      tagsList.push(tag);
    }
  }
}

// Render each tag as a list item
const renderTags = (tags) => {
  return tags.map(tag => <li key={tag}>{tag}</li>)
}

  return (
    <section className="comic-container">
        <div className="tags-list-container">
            <h2>Comic Tags</h2>   
            <ul className="tag-list">
              {renderTags(tagsList)}
            </ul> 
            
        </div> 
    </section>
  )
}

export default TagsSection