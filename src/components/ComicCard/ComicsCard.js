import React, {useEffect, useState} from 'react'
import { useGLobalContext } from '../../Context'
import {    
    ComicCard,
    Comic,
    ComicH1,
    ComicSmall,
    ComicP,
    } from './ComicCardElements'

const ComicsCard = () => {
    const { loading, currentComic } = useGLobalContext();

    if (loading) {
      return <>
      <ComicH1>Loading...</ComicH1>
      </>
    }

    return (
        <>
        
        <ComicH1>{currentComic.title}</ComicH1>
        <ComicCard className='paperCard' >
            <Comic src={imageUrl+cartoon.filename} alt={cartoon.filename}/>
            <ComicSmall>Published: {cartoon.published_at}</ComicSmall>
        </ComicCard>
        <ComicP>Tags: {cartoon.tags}</ComicP>
        </>
      )
}

export default ComicsCard