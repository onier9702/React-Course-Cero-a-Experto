

import React, { memo } from 'react';

export const Hijo = memo(({number, increment}) => {

    console.log('Called :(');

  return (
    <div>

        <ul >

            <button className="btn btn-primary mr-3"
                    onClick={() => increment(number)}
            >
                {number}
            </button>

        </ul>
    </div>
  )
})
