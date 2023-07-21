import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, checkToken, loggedIn }) {

   return checkToken && (loggedIn ? (children) : (<Navigate to="/" />));

}

export default ProtectedRoute;
