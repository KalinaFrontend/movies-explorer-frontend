import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRoute = ({ element: Component, ...props  }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    currentUser ? <Component {...props} /> : <Navigate to="/signin" replace/>
)}

export default ProtectedRoute;