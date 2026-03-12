import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  const isAuthenticated = localStorage.getItem("authToken");

  const userString = localStorage.getItem("authUser");
  const user = JSON.parse(userString || "{}");
  const userRole = user.role;

  if (isAuthenticated) {
    if (userRole === "USER") return <Navigate to="/user/home" replace />;
    if (userRole === "ADMIN") return <Navigate to="/admin/dashboard" replace />;
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
