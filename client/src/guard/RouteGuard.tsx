import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const RouteGuard: React.FC<Props> = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RouteGuard;
