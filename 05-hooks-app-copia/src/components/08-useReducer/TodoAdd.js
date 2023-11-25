

import React from 'react';
import {useForm} from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description: inputValue} , handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1){

            const newTodo = {
                id: new Date().getTime(),
                desc: inputValue,
                done: false
            };

            handleAddTodo(newTodo);
            reset();
        };
    };

  return (
    <>
        <h3>Add TODO</h3>
        <hr />
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='description'
                placeholder='Write Here...'
                className='formcontrol'
                autoComplete='off'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button 
                className='btn btn-outline-primary btn-block mt-1'
                type='submit'
            >
                Add
            </button>
        </form>
    </>
  )
}
