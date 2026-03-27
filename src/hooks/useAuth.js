import { useState, useEffect, useContext, createContext } from "react";
import { authAPI } from "../lib/apiService";
import {
  setAuthToken,
  getAuthToken,
  setCurrentUser,
  getCurrentUser,
  clearAuth,
  isAdmin,
  isLandlord,
  isTenant,
} from "../lib/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      // Kiểm tra user từ localStorage trước
      const savedUser = getCurrentUser();
      if (savedUser) {
        setUser(savedUser);
        setIsAuthenticated(true);
        setLoading(false);
      } else {
        // Verify token với backend
        authAPI
          .getProfile()
          .then((response) => {
            const userData = response.data?.user || response.data;
            setCurrentUser(userData);
            setUser(userData);
            setIsAuthenticated(true);
          })
          .catch(() => {
            // Token không hợp lệ, xóa auth
            clearAuth();
            setUser(null);
            setIsAuthenticated(false);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      setLoading(false);
    }
  }, []);

  // Đăng ký tài khoản
  const signup = async (userData) => {
    setLoading(true);
    try {
      const response = await authAPI.signup(userData);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  // Đăng nhập
  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await authAPI.login(credentials);

      // Response format: { status, token, role, message }
      const token = response.data?.token;
      const role = response.data?.role;

      if (!token) {
        throw new Error("Không nhận được token từ server");
      }

      // Tạo userData object từ response
      const userData = {
        email: credentials.email,
        role: role,
      };

      // Lưu token và user info
      setAuthToken(token);
      setCurrentUser(userData);

      setUser(userData);
      setIsAuthenticated(true);

      return userData;
    } finally {
      setLoading(false);
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      // Gọi API logout (optional)
      await authAPI.logout().catch(() => {});
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Xóa auth data
      clearAuth();
      setUser(null);
      setIsAuthenticated(false);

      // Redirect về trang login
      window.location.href = "/login";
    }
  };

  // Xác thực email
  const verifyEmail = async (token) => {
    setLoading(true);
    try {
      const response = await authAPI.verifyEmail(token);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  // Quên mật khẩu
  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      const response = await authAPI.forgotPassword(email);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  // Reset mật khẩu
  const resetPassword = async (token, newPassword) => {
    setLoading(true);
    try {
      const response = await authAPI.resetPassword(token, newPassword);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  // Đổi mật khẩu (khi đã đăng nhập)
  const changePassword = async (oldPassword, newPassword) => {
    setLoading(true);
    try {
      const response = await authAPI.changePassword(oldPassword, newPassword);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  // Cập nhật thông tin user
  const updateUser = (userData) => {
    setCurrentUser(userData);
    setUser(userData);
  };

  // Làm mới thông tin user từ server
  const refreshUser = async () => {
    const response = await authAPI.getProfile();
    const userData = response.data?.user || response.data;
    setCurrentUser(userData);
    setUser(userData);
    return userData;
  };

  const value = {
    user,
    loading,
    isLoading: loading,
    isAuthenticated,
    signup,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
    changePassword,
    updateUser,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

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
    isLandlord: isLandlord(),
    isTenant: isTenant(),
    hasRole: (role) => user?.role === role,
  };
};
