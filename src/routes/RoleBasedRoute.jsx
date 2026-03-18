import { Navigate, Outlet } from "react-router-dom";

export default function RoleBasedRoute({ allowedRoles }) {
  const isAuthenticated = localStorage.getItem("authToken");

  const userString = localStorage.getItem("authUser");
  const user = JSON.parse(userString || "{}");
  const userRole = user.role;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}
