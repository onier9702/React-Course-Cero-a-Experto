
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

// const url = 'https://www.breakingbadapi.com/api/quotes/1';

export const MultiplesHooks = () => {


    const { counter, increment } = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);
    // const { author, quote } = (data) ? data[0] : 'Loading'; // the same to below    
    const { author, quote } = !!data && data[0];
    // console.log(state);

  return (
    <div className="cont">
        <h1 className="head-grid">Breaking Bad Quotes</h1>
        {/* <hr /> */}
        {
            loading
            ?
                (
                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                    
                )
            :
                (
                    <blockquote className="blockquote text-right">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                    </blockquote>

                )
        }

        <button 
            className="btn btn-primary"
            onClick={increment}
        
        >
            Add Quote
        </button>

    </div>
  )
}
