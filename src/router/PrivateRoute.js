import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  return (
    ( isAuthenticated )
      ? <Component { ...props } />
      : <Navigate to='/auth' />
  )
}
