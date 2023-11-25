

import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

  return (
    <>
        <h3 >CounterWithCustomHook  {state}</h3>

        <button onClick={ () => increment(2)} className='btn'>Increase</button>
        <button onClick={ () => decrement(2)} className='btn'>Decrease</button>
        <button onClick={reset}               className='btn'>Reset</button>

    </>
  )
}




