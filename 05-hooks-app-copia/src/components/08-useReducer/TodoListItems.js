
import React from 'react';

export const TodoListItems = ({todos, i: index, handleDeleted, handleToogle}) => {


  return (

    <li     
        key={todos.id}
        className='list-group-item' 
    >
        <p  className={ `${ todos.done && 'complete'}` }
            onClick={ () => handleToogle(todos.id) }
        >
            {index + 1}.  {todos.desc}
        </p>

        <button className='btn btn-danger'
                onClick={ () => handleDeleted(todos.id) }
        >
            Erase
        </button>
    </li>
    )
}
