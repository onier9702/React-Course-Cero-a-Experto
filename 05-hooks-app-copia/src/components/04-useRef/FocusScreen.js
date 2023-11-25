
import React, { useRef } from 'react'
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

    const inputRef = useRef();   // HOOK useRef de React

    const handleClick = () => {
        // document.querySelector('input').select(); // The same as below
        inputRef.current.select();
        console.log(inputRef);

    };

  return (
    <div>
        <h1 >Focus Screen</h1>

        <input 
            ref={inputRef}
            className="form-control"
            placeholder="Your Name"
        />

        <button 
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
        >Focus</button>
    </div>
  )
}
