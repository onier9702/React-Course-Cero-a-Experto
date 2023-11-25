
import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  
  export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return (

      <BrowserRouter >
        <div>
            <Routes>
                <Route path="/login" element={
                  <PublicRoute >
                    <LoginScreen />
                  </PublicRoute>  
                } />

                <Route path="*" element={
                  <PrivateRoute >
                    <DashboardRoutes />
                  </PrivateRoute>
                }/>
            </Routes>
        </div>
      </BrowserRouter>


    )
  }
  
