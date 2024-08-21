import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Correção da importação


const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isValid = isTokenValid(token);

  return isValid ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
