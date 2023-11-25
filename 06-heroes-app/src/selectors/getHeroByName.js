import {heroes} from '../data/heroes';

export const getHeroByName = (name = '') => {

    if( name === '' ){
        return [];
    }

    name = name.toLocaleLowerCase();
    // console.log(lowerCaseHero);

  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name)  );

    // other way
    // return heroes.filter( hero => hero.superhero.toLocaleLowerCase() === name  );
     
    
}
