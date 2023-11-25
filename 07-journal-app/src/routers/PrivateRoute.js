
import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children, log}) => {

  return (log)
            ? children
            : (<Navigate to="/login" />) 
  
}
