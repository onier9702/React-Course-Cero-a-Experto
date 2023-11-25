
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
// import '../../index.css';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);

  return (
    <div className="card-columns" >
        {
            heroes.map( hero => (
                <HeroCard 
                    key={hero.id}
                    {...hero}
                />
            ) )
        }

    </div>
  )
}
