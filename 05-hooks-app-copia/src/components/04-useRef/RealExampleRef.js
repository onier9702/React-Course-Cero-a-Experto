
import React, { useState } from 'react';

import '../02-useEffect/effect.css';
import { MultiplesHooks } from '../03-examples/MultiplesHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1 >Real Use of useRef</h1>
        <hr />

        { show && <MultiplesHooks />}

        <button 
            className="btn btn-primary"
            onClick={ () => {
                setShow(!show);
            } }
        >
            Show/Hide
        </button>

    </div>
  )
}
