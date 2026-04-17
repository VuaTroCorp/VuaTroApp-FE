import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import { getHomePath, getCurrentRole } from "lib/auth";
// LAYOUTS
import AuthLayout from "layouts/AuthLayout";
import UserLayout from "layouts/UserLayout";
import AdminLayout from "layouts/AdminLayout";
// AUTH PAGES
import DashboardPage  from "pages/Admin/Dashboard/DashboardPage";
import LoginPage from "pages/Auth/LoginPage/LoginPage";
import RegisterPage from "pages/Auth/RegisterPage/RegisterPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import ForbiddenPage from "pages/Auth/ForbiddenPage/ForbiddenPage";
import VerifyResetTokenPage from "pages/Auth/ResetPasswordPage/VerifyResetTokenPage";
import OAuth2RedirectHandler from "pages/Auth/GoogleCallback/OAuth2RedirectHandler";
import ResetPasswordPage from "pages/Auth/ResetPasswordPage/ResetPasswordPage";
// import GoogleCallback from "pages/Auth/GoogleCallback/GoogleCallback";

// USER PAGES
import HomePage from "pages/User/Home/HomePage";
import PostNewsPage from "pages/User/PostNews/PostNewsPage";
import ProfilePage from "pages/User/Profile/ProfilePage";
import HistoryTransactionPage from "pages/User/HistoryTransaction/HistoryTransactionPage";
import PreOrderPage from "pages/User/PreOrderPage/PreOrderPage";
import ManagePostPage from "pages/User/ManagePostPage/ManagePostPage";
import PostDetailPage from "pages/User/PostDetail/PostDetailPage";
import FavoritePostsPage from "pages/User/FavoritePosts/FavoritePostsPage";
// import UpgradeAccount from "features/upgradeAccount/upgrade";

const RootRoute = () => {
  const role = getCurrentRole();

  if (role === "ADMIN") return <Navigate to="/admin/dashboard" replace />;
  return <HomePage />
};

const FallbackRedirect = () => <Navigate to={getHomePath()} replace />;

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<AuthRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="reset-password/verify" element={<VerifyResetTokenPage />} />
        </Route>
      </Route>

      <Route path="login/oauth2/code/google" element={<OAuth2RedirectHandler />} />

      {/* USER */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<RootRoute />} />
        {/* PUBLIC ROUTES */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailPage/>} />

        {/* PRIVATE ROUTES */}
        <Route path="user" element={<RoleBasedRoute allowedRoles={["USER"]} />}>
          <Route path="post-news" element={<PostNewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="history-transaction" element={<HistoryTransactionPage />} />
          <Route path="pre-order" element={<PreOrderPage />} />
          <Route path="manage-post" element={<ManagePostPage/>} />
          <Route path="favorites" element={<FavoritePostsPage />} />
        </Route>
      </Route>

      {/* ADMIN */}
      <Route element={<AdminLayout />}>
        <Route path="admin" element={<RoleBasedRoute allowedRoles={["ADMIN"]} />} >
          <Route index element={<Navigate to="dashboard" replace />}/>
          <Route path="dashboard" element={<DashboardPage/>}/>
        </Route>
      </Route>

      {/* EXCEPTION */}
      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="*" element={<FallbackRedirect />} />
    </Routes>
  );
}
