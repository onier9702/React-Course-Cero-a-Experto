

import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = () => {

    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, {}, init);
    
    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify(todos));   
    
    }, [todos]);

    const handleAddTodo = (newTodo) => {

        dispatch( {
            type: 'Add',
            payload: newTodo,
        } );
    };
    
    const handleDeleted = (todoId) => {

        const action = {
            type: 'Delete',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToogle = (todoId) => {

        dispatch({
            type: 'Toogle',
            payload: todoId,
        });
    };

  return (
    <div>
        <h1 >TodoApp ({todos.length})</h1>
        <hr />

        <div className='row'>

            <div className='col-7'>

                <TodoList   
                        todos={todos}
                        handleDeleted={handleDeleted} 
                        handleToogle={handleToogle} 
                />
            </div>

            <div className='col-5'>
                
                <TodoAdd handleAddTodo={handleAddTodo}/>
                
            </div>
        </div>
    </div>
  )
}
