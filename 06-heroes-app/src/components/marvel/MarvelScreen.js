
import React from 'react';

import { HeroList } from '../heroes/HeroList';


// onClick={HeroList('Marvel Comics')} 


export const MarvelScreen = () => {
 
  return (
    <div>
        <h1>MarvelScreen</h1>

        <HeroList publisher='Marvel Comics' />

    </div>
  )
}
