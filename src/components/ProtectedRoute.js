import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, render, loggedIn }) {

   return render && (loggedIn ? (children) : (<Navigate to="/" />));

}

export default ProtectedRoute;
