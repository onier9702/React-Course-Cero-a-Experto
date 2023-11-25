

export const todoReducer = (state = [], action ) => {


    switch (action.type) {
        case 'Add':
            return [...state, action.payload];  

        case 'Delete':
            return state.filter( todo => todo.id !== action.payload );
             
        case 'Toogle':
            return state.map( (todo) => 
                (todo.id === action.payload )
                ? {...todo, done: !todo.done}
                : todo 
            );

        default:
            return state;
    }

};

// Notes: Filter return a new arrange of objects and you can handle how you filter the arrange

