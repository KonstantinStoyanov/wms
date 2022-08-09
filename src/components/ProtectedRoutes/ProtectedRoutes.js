import React from "react";

import { Navigate, Outlet, useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedRoutes = (props) => {
  const { user } = UserAuth();

  const { showAuth } = true;
  return user != null ? <Outlet /> : <Navigate to="/" state={{ showAuth }} />;
};

export default ProtectedRoutes;
