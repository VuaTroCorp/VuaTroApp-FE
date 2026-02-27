import { useState, useEffect, useContext, createContext } from "react";
import { authAPI } from "../lib/apiService";
import {
  setAuthToken,
  getAuthToken,
  setRefreshToken,
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
    try {
      setLoading(true);
      const response = await authAPI.signup(userData);

      return {
        success: true,
        message:
          response.data?.message ||
          "Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.",
        data: response.data,
      };
    } catch (error) {
      console.error("Signup error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Đăng ký thất bại",
        errors: error.response?.data?.errors || {},
      };
    } finally {
      setLoading(false);
    }
  };

  // Đăng nhập
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await authAPI.login(credentials);

      const token = response.data?.token || response.data?.accessToken;
      const refreshToken = response.data?.refreshToken;
      const userData =
        response.data?.user || response.data?.User || response.data;

      if (!token) {
        throw new Error("Không nhận được token từ server");
      }

      // Lưu tokens và user info
      setAuthToken(token);
      if (refreshToken) {
        setRefreshToken(refreshToken);
      }
      setCurrentUser(userData);

      setUser(userData);
      setIsAuthenticated(true);

      return { success: true, user: userData };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.message ||
          "Đăng nhập thất bại",
      };
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
    try {
      setLoading(true);
      const response = await authAPI.verifyEmail(token);
      return {
        success: true,
        message: response.data?.message || "Xác thực email thành công!",
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Xác thực email thất bại",
      };
    } finally {
      setLoading(false);
    }
  };

  // Quên mật khẩu
  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      const response = await authAPI.forgotPassword(email);
      return {
        success: true,
        message:
          response.data?.message || "Đã gửi email hướng dẫn reset mật khẩu!",
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Gửi email thất bại",
      };
    } finally {
      setLoading(false);
    }
  };

  // Reset mật khẩu
  const resetPassword = async (token, newPassword) => {
    try {
      setLoading(true);
      const response = await authAPI.resetPassword(token, newPassword);
      return {
        success: true,
        message: response.data?.message || "Đổi mật khẩu thành công!",
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Đổi mật khẩu thất bại",
      };
    } finally {
      setLoading(false);
    }
  };

  // Đổi mật khẩu (khi đã đăng nhập)
  const changePassword = async (oldPassword, newPassword) => {
    try {
      setLoading(true);
      const response = await authAPI.changePassword(oldPassword, newPassword);
      return {
        success: true,
        message: response.data?.message || "Đổi mật khẩu thành công!",
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Đổi mật khẩu thất bại",
      };
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
    try {
      const response = await authAPI.getProfile();
      const userData = response.data?.user || response.data;
      setCurrentUser(userData);
      setUser(userData);
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    }
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
