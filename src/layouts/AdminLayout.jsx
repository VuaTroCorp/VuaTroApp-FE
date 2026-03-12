import { Outlet } from "react-router-dom";
import AdminHeader from "../components/layout/AdminHeader/AdminHeader";
import AdminSidebar from "../components/layout/AdminSidebar/AdminSidebar";

function LandlordLayout() {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <AdminSidebar />
      <main className="content-container">
        <Outlet />
      </main>
    </div>
  );
}
export default LandlordLayout;
