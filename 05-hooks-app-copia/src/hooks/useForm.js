
import React, { useState } from 'react';

export const useForm = (initial={}) => {

    const [slots, setSlots] = useState(initial);

    const reset = () => {

        setSlots(initial);
    };

    const hanleInputChange = ({target}) => {


        setSlots( {
            ...slots,
            [target.name]: target.value,    // It allows to write
        } );
    };



  return [slots, hanleInputChange, reset];

}
