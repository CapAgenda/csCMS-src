import React, {useEffect, useState} from 'react'
import {    
    ComicCard,
    Comic,
    ComicH1,
    ComicSmall,
    ComicP,
    } from './ComicCardElements'

const ComicsCard = () => {
  const [cartoon, setCartoons] = useState([])
  
  const latest = 'https://apicsb.herokuapp.com/get-latest'
  const imageUrl = 'https://apicsb.herokuapp.com/image/'

  const fetchData = () => {
    fetch(latest, {
      headers: {
          "Method": "GET",
          "Content-Type": "text/plain",
          

          }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setCartoons(data)
    })
}

  useEffect(() => {
    fetchData()
  }, [])


 return (
    <>
    
    <ComicH1>{cartoon.title}</ComicH1>
    <ComicCard className='paperCard' >
        <Comic src={imageUrl+cartoon.filename} alt={cartoon.filename}/>
        <ComicSmall>Published: {cartoon.published_at}</ComicSmall>
    </ComicCard>
    <ComicP>Tags: {cartoon.tags}</ComicP>
    </>
  )
}

export default ComicsCard