
import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children, log}) => {


  return (log) ? (<Navigate to="/*" />) : children
    
}
