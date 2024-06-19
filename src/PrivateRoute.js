
import React, { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ requiredRole }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('auth_token');
  const userRole = localStorage.getItem('auth_role');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (userRole < requiredRole) {
      navigate("/404", { replace: true });
    }
  }, [isAuthenticated, userRole, requiredRole, navigate]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if (userRole < requiredRole) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;




// import React, { useEffect } from 'react';
// import { Outlet, Navigate, useNavigate } from 'react-router-dom';


// const PrivateRoute = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = !!localStorage.getItem('auth_token');


//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login", { replace: true });
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;


