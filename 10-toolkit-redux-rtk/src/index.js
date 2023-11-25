import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import { App } from './App';
// import { PokemonApp } from './PokemonApp';
import { store } from './store/store';
import { TodoApp } from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    {/* <App /> */}
    {/* <PokemonApp /> */}
    <TodoApp />
  </Provider>
);


