
// import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect( () => {
        console.log('hey you');
    }, [] );

    useEffect( () => {
        console.log('formState changed');
    }, [formState] );

    useEffect( () => {
        console.log('email changed');
    }, [email] );
    
    const hanleInputChange = ({target}) => {
        // console.log(target.value);
        // console.log(target.name);

        setFormState( {
            ...formState,
            [target.name]: target.value,    // It allows to write
        } );
    };

  return (
    <>
        <h3 >UseEffect</h3>
        <hr />

        <div className='form-group'>
            <input 
                type= "text"
                name="name"
                className="form-control"
                placeholder="Name"
                autoComplete="off"
                value={ name }
                onChange={hanleInputChange}
            />
                    
        </div>
        <div className='form-group'>
            <input 
                type= "text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={hanleInputChange}
            />
                    
        </div>

        { name === '456' && <Message /> }

    </>
  )
}







