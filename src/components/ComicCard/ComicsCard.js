import React
 from 'react'
import {    
    ComicCard,
    Comic,
    ComicH1,
    ComicSmall,
    ComicP,
    } from './ComicCardElements'

const ComicsCard = ({id, topLine, img, published, tags, alt}) => {

  const image = 'http://api.csb.lol/image/young-people-09-05-2021.png'
  return (
    <>
    
    <ComicH1>{topLine}</ComicH1>
    <ComicCard className='paperCard' id={id}>
        <Comic src={image} alt={alt}/>
        <ComicSmall>Published: {published}</ComicSmall>
    </ComicCard>
    <ComicP>Tags: {tags}</ComicP>
    </>
  )
}

export default ComicsCard