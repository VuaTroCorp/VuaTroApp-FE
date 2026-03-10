import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

function UserLayout() {
    return (
        <div className="user-layout">
            <Header />
            <main className="content-container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default UserLayout;
