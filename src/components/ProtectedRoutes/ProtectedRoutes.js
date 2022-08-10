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
  const { showAuth } = true;
  return user != null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ showAuth, path: location.pathname }} />
  );
};

export default ProtectedRoutes;
