import Footer from "components/footer/Footer";
import "./Home.scss";
import DropdownAdmin from "components/dropdown/DropdownAdmin";
import AdminInfor from "components/admin-infor/AdminInfor";
import { useEffect, useState } from "react";
import AdminListManage from "components/admin-manage-list/AdminListManage";
import WaitUpload from "components/wait-upload/WaitUpload";
import CancelUpload from "components/cancel-upload/CancelUpload";
import ExpireUpload from "components/expired-upload/ExpireUpload";
import OrderManager from "components/order-manager/OrderManager";
import HistoryTransaction from "components/history-duck/HistoryTransaction";
import Logout from "components/logout/Logout";
import Header from "components/header/Header";
import { decodeBase64 } from "utils/AuthToken";

function Home() {
  const [option, setOption] = useState("inf");
  const [showLogout, setShowLogout] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodeData = decodeBase64(token);
    setUserName(decodeData.username);
  }, []);

  return (
    <>
      <div>{showLogout && <Logout setShowLogout={setShowLogout} />}</div>

      <div>
        <Header setShowLogout={setShowLogout} userName={userName} />

        <div className="home-page">
          <div>
            <DropdownAdmin setOption={setOption} userName={userName} />
          </div>
          <div className="right-container-admin">
            <div>
              {(() => {
                if (option === "list-upload") return <AdminListManage />;
                if (option === "inf") return <AdminInfor />;
                if (option === "wait-upload") return <WaitUpload />;
                if (option === "cancel-upload") return <CancelUpload />;
                if (option === "exp-upload") return <ExpireUpload />;
                if (option === "order-manage") return <OrderManager />;
                if (option === "history") return <HistoryTransaction />;
              })()}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
