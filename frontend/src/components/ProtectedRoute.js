import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ logged, children, ...props }) {
  return (
    <Route {...props}>{logged ? children : <Redirect to={'/login'} />}</Route>
  );
}

export default ProtectedRoute;
