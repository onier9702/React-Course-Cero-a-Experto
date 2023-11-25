
import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './components/auth/AuthContext';
import { authReducer } from './components/auth/AuthReducer';
import { AppRouter } from './routers/AppRouter';



const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
  // return localStorage.setItem( 'user', JSON.stringify('Onierrrrr') );

}


export const HeroesApp = () => {
  
  const [ user, dispatch ] = useReducer(authReducer, {}, init);

  useEffect(() => {
      localStorage.setItem( 'user', JSON.stringify(user) );
  }, [user]);

  return (

      <AuthContext.Provider value={{ user, dispatch }}>
          <AppRouter />
      </AuthContext.Provider>

  )
}
