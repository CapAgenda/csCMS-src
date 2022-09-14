import React from 'react';
import ComicsCard from './ComicsCard';
import { projectOne } from './ComicData';
import {
    ComicsContainer,
    ComicsWrapper,
} from './ComicCardElements'





const Comics = () => {
  

  
  return (
   <>
   <ComicsContainer id="comics">
        <ComicsWrapper >
            <ComicsCard
             {...projectOne}/>
        </ComicsWrapper>
   </ComicsContainer>
   </>
  )
}

export default Comics