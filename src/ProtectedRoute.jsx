import React from "react";
import { Navigate } from "react-router-dom";

// This component wraps around routes that require login
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/" replace />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
