
import React, { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

    // const isMounted = useRef(true);
    // console.log(isMounted.current);

    const [state, setState] = useState({ data: null ,loading: true, error: null });

    // useEffect( () => {
          
    //     return () => {
    //       isMounted.current = false;
    //     }
    // }, [])

    useEffect( () => {
        
        setState({ data: null ,loading: true, error: null });
        
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                // if (isMounted.current){

                setTimeout(() => {
                    setState( {
                        loading: false,
                        error: null,
                        data,
                }, 4000);
                } );
                // } else { 
                //     console.log('setState was not called');
                // };
                
            } );
            
    }, [url] )
        
    return state;
  
};
