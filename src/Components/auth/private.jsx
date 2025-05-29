import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
    let auth = {token: token}
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
