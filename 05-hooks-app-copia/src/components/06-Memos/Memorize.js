
import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effect.css';

export const Memorize = () => {

   const {counter, increment} = useCounter(1);

   const [show, setShow] = useState(false);


  return (

    <div>
        <h1 >Counter: <Small value={counter}/></h1>
        <hr />


        <button className="btn btn-primary" onClick={increment}>
            Add
        </button>
        <button 
            onClick={ () => {
                setShow(!show);
            } }
        >
            Just See {JSON.stringify(show)}
        </button>
    </div>
  )
}
