
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';


import './styles/styles.scss';

export const JournalApp = () => {
  return (
    <>
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
