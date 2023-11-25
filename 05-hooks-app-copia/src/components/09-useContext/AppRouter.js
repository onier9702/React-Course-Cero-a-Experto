
import React from 'react';
// import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router,
         Redirect,
         Route, 
         Switch, 
  } from 'react-router-dom';
 
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (

    <Router >
        <div>
          <Switch >
              <Route path="/"  component={HomeScreen}   /> 
              <Route path="/about"   component={AboutScreen}  />
              <Route path="/login"   component={LoginScreen}  />

              <Redirect to="/" />
          </Switch>

          <NavBar />
        </div>
    </Router>
  )
}
