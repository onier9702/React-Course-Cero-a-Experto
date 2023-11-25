
const initialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}];

const todoReducer = ( state= initialState, action ) => {

    if ( action?.type === 'add' ) {
        return [...state, action.payload];
    }
    return state;
}
// -----------------------------------------------

// new todos
const newTodo = {
    id: 2,
    todo: 'Buy bread',
    done: false
};

// Actions
const addTodoAction = {
    type: "add",
    payload: newTodo,
};

// Calls
let todos = todoReducer();
todos = todoReducer(todos,addTodoAction);






console.log(todos);
