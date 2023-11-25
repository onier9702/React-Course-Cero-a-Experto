
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth);
  
  useEffect(() => {
    
    dispatch(startChecking());
    
  }, [dispatch, uid])
  
  if (checking) {
    return ( <h3>Loading...</h3> )
  }

  return (
    <div>
        <Routes >
            <Route path="/" element={ 
                <PrivateRoute isAuthenticated={(uid) ? true : false}>
                  <CalendarScreen />
                </PrivateRoute>
                                            } 
            />
            <Route path="/login" element={
                <PublicRoute isAuthenticated={(uid) ? true : false} >
                  <LoginScreen />
                </PublicRoute>
                                    } 
            />

            
        </Routes>
    </div>
  )
}
