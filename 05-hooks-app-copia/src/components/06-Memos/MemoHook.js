

import React, { useMemo, useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/HeavyProcess';

import '../02-useEffect/effect.css';

export const MemoHook = () => {

   const {counter, increment} = useCounter(80);

   const [show, setShow] = useState(false);
   
   const memorizedProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (

    <div>
        <h1 >MemoHook</h1>
        <h3 >Counter: <small>{counter}</small></h3>
        <hr />

        {/* <p >{heavyProcess(counter)}</p> // this way whatever the button was clicked, consumed RAM */}
        {/*  //this way below useMemo hook  memorize the state and not consumed RAM  */}
        <p >{memorizedProcess}</p>
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



