import SideBar from "components/shared/User/Management/SideBar/SideBar";
import "./PreOrderPage.scss";
import React from "react";
import PreOderManage from "components/shared/User/Management/PreOderManage/PreOderManage";

const PreOrderPage = () => {
  return (
    <div className="main-pre-order-container">
      <div className="left-infor-container">
        <SideBar />
      </div>
      <div className="right-pre-order-container">
        <PreOderManage />
      </div>
    </div>
  );
};

export default PreOrderPage;
