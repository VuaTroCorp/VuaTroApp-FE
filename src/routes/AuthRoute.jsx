import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
    const isAuthenticated = Boolean(localStorage.getItem("authToken"));
    const userRole = localStorage.getItem("role");

    if (isAuthenticated) {
        if (userRole === "USER") return <Navigate to="/user" replace />;
        if (userRole === "ADMIN") return <Navigate to="/admin" replace />;
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}