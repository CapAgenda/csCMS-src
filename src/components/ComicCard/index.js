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
   <ComicsContainer >
        <ComicsWrapper >
            <ComicsCard/>
        </ComicsWrapper>
   </ComicsContainer>
   </>
  )
}

export default Comics