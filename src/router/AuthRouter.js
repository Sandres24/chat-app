import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

import '../css/login-register.css';

export const AuthRouter = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes>
            <Route path='/login' Component={ LoginPage } />
            <Route path='register' Component={ RegisterPage } />

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
          </Routes>
        </div>
      </div>
    </div>
  )
}
