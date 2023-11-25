
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter';

export const App = () => {

  const dispatch = useDispatch();
  const {value} = useSelector( state => state.counter);

  return (
    <div style={{padding: 80}}>
      <span style={{padding: 20}}>Count is: {value}</span>
      <button type="button"
              onClick={ () => dispatch(increment()) }
      >Increment</button>
      <button type="button"
              onClick={ () => dispatch(decrement()) }
      >decrement</button>
      <button type="button"
              onClick={ () => dispatch(incrementByAmount(4)) }
      >IncrementBy4</button>
        
    </div>
  )
}
