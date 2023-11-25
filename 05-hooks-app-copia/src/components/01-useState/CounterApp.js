
import React from 'react';
import './counter.css';
import { useState } from 'react';


export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,

    });

    // you will extract what you need
    const {counter1, counter2} = state;

  return (
    <>
        <h3 >Counter1 {counter1}</h3>
        <h3 >Counter2 {counter2}</h3>

        <hr ></hr>

        <button className='btn btn-primary'
                onClick={ () => {
                    setState({
                        ...state,
                        counter1: counter1 + 1,
                    })
                } }
        
        >
            +1
        </button>
    </>
  )
}






