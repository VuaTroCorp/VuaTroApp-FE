import { Routes, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "features/Login/Login/Login";
import Register from "features/Login/Register/Register";
import PostNews from "features/postNews/postNews";
import UpgradeAccount from "features/upgradeAccount/upgrade";
import ForgotPassword from "features/Login/ForgotPass/ForgotPassword";
import ResetPassword from "features/Login/ForgotPass/ResetPassword";
export default function AppRoutes() {
  return (
    <>
      <div className="route-wrapper">
        <Routes>
          {/* Auth routes */}
          <Route element={<AuthRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path="post-news" element={<PostNews />} />
            <Route path="upgrade-account" element={<UpgradeAccount />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
