// src/features/routes/AuthRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));

  // Đã login thì không cho vào login / register
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
