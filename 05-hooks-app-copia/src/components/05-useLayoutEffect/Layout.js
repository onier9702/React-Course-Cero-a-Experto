

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

// const url = 'https://www.breakingbadapi.com/api/quotes/1';

export const Layout = () => {

    
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);
    // const { author, quote } = (data) ? data[0] : 'Loading'; // the same below    
    const { author, quote } = !!data && data[0];
    // console.log(state);

    const pTag = useRef();

    const [sizes, setSizes] = useState({});

    // const { width, height } = sizes;
    const sizesInfo = {
        width: sizes.width,
        height: sizes.height,
    }

    useLayoutEffect(() => {

    //   console.log('hey');
    //   console.log(pTag.current.getBoundingClientRect());
      setSizes(pTag.current.getBoundingClientRect());

    }, [quote])



  return (

    <div className="cont">
        <h1 className="head-grid">Layout Effect</h1>
        <hr />
     
        <blockquote className="blockquote text-right">
                    <h3 ref={pTag} className="mb-0">{quote}</h3>
                    <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <h4 >No: {counter}</h4>

        
        
        {/* <pre >{JSON.stringify(sizesInfo, null, 3)}</pre> */}

        <div className="last">
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Add Quote
            </button>

            <quote className="creator">
                        <footer className="quote-footer">Creator: Onier</footer>
            </quote>

        </div>

    </div>
  )
}
