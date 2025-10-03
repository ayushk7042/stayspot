// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';

// const ProtectedRoute = ({ children }) => {
//   const { token, user } = useAuth();

//   // Adjust this condition based on your user object (check admin role if present)
//   const isAdmin = user?.role === 'admin'; 

//   if (!token || !isAdmin) {
//     return <Navigate to="/admin/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { token, user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const isAdmin = user?.role === "admin";
  console.log("ProtectedRoute user role:", user?.role);

  if (!token || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
