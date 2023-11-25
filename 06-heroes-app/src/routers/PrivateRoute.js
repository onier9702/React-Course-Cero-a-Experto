
import React, { useContext } from 'react';
import {  Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';


export const PrivateRoute = ({children}) => {


  const path = useLocation();
  // console.log(path.pathname);
  localStorage.setItem('lastPath', path.pathname);

    const {user} = useContext(AuthContext);

  return ( user.logged ) 
            ? children
            : <Navigate to="/login" />
    
}






