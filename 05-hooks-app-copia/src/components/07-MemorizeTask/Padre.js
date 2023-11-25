
import React, { useCallback, useState } from 'react';

import '../02-useEffect/effect.css';
import { Hijo } from './Hijo';

export const Padre = () => {

    const numbers = [2,4,6,8,10];

    const [value, setValue] = useState(0);

    const increment = useCallback( (num) => {
        
      setValue( v => v + num);
      // console.log('see');
      // console.log(value);
      // console.log({setValue});
      
    },[setValue])
    
    // const increment = (num) => {

    //     setValue(v => v + num);
    //     console.log('see');
    //     console.log(value);
    //     console.log({setValue});
    // };


  return (
    <div>
        <h1 >Padre</h1>
        <p >Total: {value}</p>
        <hr />

        {
            numbers.map( n => (
                <Hijo key={n}
                      number={n}
                      increment={increment}
                />
             ) )
        }
    </div>
  )
}
