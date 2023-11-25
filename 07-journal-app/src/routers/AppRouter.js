import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
 
 export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    
    onAuthStateChanged(auth, async(user) => {
    
      if ( user ){
        dispatch(login(user.uid, user.displayName));
        setLoggedIn(true);
        dispatch( startLoadingNotes(user.uid));

      } else {
        setLoggedIn(false);
        
      }

      setChecking(false);
    })
  
  }, [dispatch, setChecking, setLoggedIn])

  if (checking){

    return (
      <h3>Espere...</h3>
    )
  }
  
   return (
      <div className="journal__container">
        <Routes >

          {/* <Route path="/login" element={ <LoginScreen />} />
          <Route path="/register" element={ <RegisterScreen />} />
          <Route path="/journalScreen" element={<JournalScreen />} />  */}

          <Route path="/login" element={
            <PublicRoute log={loggedIn} >
              <LoginScreen />
            </PublicRoute >} 
          />
          <Route path="/register" element={
            <PublicRoute log={loggedIn} >
              <RegisterScreen />
            </PublicRoute >} 
          />
          <Route path="*" element={
            <PrivateRoute log={loggedIn}>
              <JournalScreen />
            </PrivateRoute>} 
          />
          {/* <Route path="/" element={<JournalScreen />} />
          <Route path="/auth/*" element={<AuthRouter />} /> */}

          {/* <Route path="*" element={<Navigate to="/auth"/>} /> */}
        </Routes>
      </div>
   )
 }
 