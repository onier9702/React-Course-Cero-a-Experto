
import React, { memo } from 'react';

export const Small = memo(({value}) => {         

    console.log('I call me by myself again');

  return (
    <small>{value}</small>
  )
})

// Here, the use of MEMO is that when you call to Small's function because the value changed, 
// it does have to render the whole script but if the value did not change, it does not have 
// to render again the same or call the Small's function.