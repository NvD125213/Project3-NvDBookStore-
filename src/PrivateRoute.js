import React, { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('auth_token');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
