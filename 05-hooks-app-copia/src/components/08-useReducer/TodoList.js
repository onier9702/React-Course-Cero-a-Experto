
import React from 'react';
import { TodoListItems } from './TodoListItems';



export const TodoList = ({todos, handleDeleted, handleToogle}) => {

  return (

      <ul className='list-group list-group-flush'>
                  {
                      todos.map( (e, index) => 
                          (
                              <TodoListItems  key={e.id}
                                              todos={e}  
                                              i={index}
                                              handleDeleted={handleDeleted}
                                              handleToogle={handleToogle}
                              />
                          ))           
                  }
      </ul>
  )
}
