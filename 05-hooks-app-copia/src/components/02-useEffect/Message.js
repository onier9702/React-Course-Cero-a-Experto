
import React, { useEffect, useState } from 'react';

export const Message = () => {


    const [coords, setCoords] = useState({ x:0 , y:0 });
    const { x, y } = coords;

    useEffect(() => {
      
        console.log('Heyy');
        
        const mousemove = (e) => {
            // const coords = { x:e.x, y:e.y };
            setCoords( {
                x: e.x,
                y: e.y,
            } );
        };

        window.addEventListener('mousemove', mousemove);
    
      return () => {
        window.removeEventListener('mousemove',mousemove);
      }
    }, []);

  return (
    <div>

        <h3 >Great</h3>

        <p >
            X: {x}
            Y: {y}
        </p>

    </div>
  )
}






