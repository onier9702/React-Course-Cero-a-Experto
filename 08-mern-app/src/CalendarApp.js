
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';

export const CalendarApp = () => {
  return (
    <div>
        <HashRouter>
            <AppRouter />
        </HashRouter>
    </div>
  )
}
