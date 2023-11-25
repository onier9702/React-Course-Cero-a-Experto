
import axios from 'axios';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

const getPokemons = ( page = 0) => {

    return async(dispatch) => {

        try {

            dispatch( startLoadingPokemons() );

            // TODO: make http petition

            // With via Fetch 
            const baseUrl = process.env.REACT_APP_API_URL;
            // const resp = await fetch(`${baseUrl}/products?limit=3&since=${page * 3}`);
            // const data = await resp.json();

            // With via Axios
            const getPokes = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
            });

            const {data} = await getPokes.get(`/products?limit=3&since=${page * 3}`);
            console.log(data);

            dispatch( setPokemons({ pokemons: data.products, page: page + 1 }) );
            
        } catch (error) {
            console.log(error);
        }

    };

};

export {
    getPokemons,
}