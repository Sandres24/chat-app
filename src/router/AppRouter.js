import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { auth, verificarToken } = useContext( AuthContext );

  useEffect( () => {
    verificarToken();
  }, [verificarToken] );

  if ( auth.checking ) {
    return <h1>Espere por favor</h1>
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/auth/*' element={ <PublicRoute isAuthenticated={ auth.logged } component={ AuthRouter } /> } />
          <Route path='/' element={ <PrivateRoute isAuthenticated={ auth.logged } component={ ChatPage } /> } />

          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
