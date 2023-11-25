
import { configureStore } from '@reduxjs/toolkit';

import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemons';
import { todosApi } from '../api/todosApi';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,


    [todosApi.reducerPath]: todosApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )

})