
import React from 'react';
//import ReactDOM from 'react-dom';
import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Messi', 'Cristiano', 'Neymar'];
    const [categories, setCategories] = useState(['Messi']);
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Bale'] );
    //     setCategories( (categ) => [ ...categ, 'Bale' ] );
    // }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            {/* <input /> */}
            <hr></hr>
            {/* <button onClick={ handleAdd }>Add</button> */}
            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid key={category} category={category} />
                        // return <li key={category}>{category}</li>
                    } )
                }
            </ol>

        </>
  )
}


