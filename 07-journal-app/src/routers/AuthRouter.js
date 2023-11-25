
import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
// import { NotFound } from './NotFound';
// import { JournalScreen } from '../components/journal/JournalScreen';
// import { AppRouter } from './AppRouter';

export const AuthRouter = () => {


  console.log('I am inside Auth Router');
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={ <LoginScreen />} />
        <Route path="/auth/register" element={ <RegisterScreen />} />
        
        <Route path="*" element={  <Navigate to="/auth/login" /> }/>
      </Routes>
    </div>
  )
}
