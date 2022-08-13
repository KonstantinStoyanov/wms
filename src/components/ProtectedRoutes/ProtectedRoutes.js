import React from "react";

import {
  Navigate,
  Outlet,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoutes = (props) => {
  const { user } = UserAuth();
  const location = useLocation();
  const showAuth = true;
  return user && user?.uid != null ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replaced
      state={{ showAuth, path: location.pathname }}
    />
  );
};

export default ProtectedRoutes;
