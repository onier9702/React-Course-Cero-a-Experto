
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// rafc is a shorcut to get all this script
// The next comment lines was set with the above shorcut

// import React from 'react'

// export const CounterApp = () => {
//   return (
//     <div>CounterApp</div>
//   )
// }


// CounterApp es un componente con argumentos por default y obligados
export const CounterApp = ({value=10}) => { 

    const [counter, setCounter] = useState(value) // []

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c+1 );
    };

    const handleSubtract = () => { setCounter(counter - 1) };

    const handleReset = () => { setCounter(value) };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>Increase</button>
            <button onClick={handleSubtract}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

// Default properties from a component
CounterApp.defaultProps = {
    name: 'CounterApp'
}

// Required necessary Property 
// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }