
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemons';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {pokemons = [], isLoading, page} = useSelector(state => state.pokemon);

  useEffect(() => {
    
    dispatch( getPokemons() );
  
  }, [])
  

  return (
    <div>
        <h1>Pokemon App</h1>
        <hr />

        <span>Loading: {(isLoading) ? 'True' : 'False'} </span>

        <ul>
            {
              pokemons.map( poke => (
                <li>{poke.name}</li>
              ) )
            }
        </ul>

        <button 
                disabled={ (isLoading) ? true : false }
                onClick={ () => dispatch( getPokemons(page) ) }
        >
          Next
        </button>
    </div> 
  )
}
