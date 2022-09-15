import React from 'react'
import {    
    ComicCard,
    Comic,
    ComicH1,
    ComicSmall,
    ComicP,
    } from './ComicCardElements'

const ComicsCard = ({id, topLine, img, published, tags, alt}) => {



  return (
    <>
    
    <ComicH1>{topLine}</ComicH1>
    <ComicCard className='paperCard' id={id}>
        <Comic src={img} alt={alt}/>
        <ComicSmall>Published: {published}</ComicSmall>
    </ComicCard>
    <ComicP>Tags: {tags}</ComicP>
    </>
  )
}

export default ComicsCard



