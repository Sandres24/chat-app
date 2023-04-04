import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  return (
    ( !isAuthenticated )
      ? <Component { ...props } />
      : <Navigate to='/' />
  )
}
