import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import { isAdmin, isUser } from "lib/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

// Hook for role-based access control
export const useRole = () => {
  const { user } = useAuth();

  return {
    userRole: user?.role,
    isAdmin: isAdmin(),
    isUser: isUser(),
    hasRole: (role) => user?.role === role,
  };
};
