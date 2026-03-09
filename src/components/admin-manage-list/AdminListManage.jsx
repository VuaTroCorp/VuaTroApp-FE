import React, { useState } from "react";
import "./AdminListManage.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  Pencil,
  EyeOff,
  Trash2,
} from "lucide-react";
import { MOCK_ROOMS } from "../../constant/constant-list-manage.js";

const AdminListManage = () => {
  const specialNumb = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(MOCK_ROOMS.length / specialNumb);
  const buttonPage = Array.from({ length: pages }, (_, index) => index + 1);
  const ArrayRender = MOCK_ROOMS.slice(
    (currentPage - 1) * specialNumb,
    (currentPage - 1) * specialNumb + specialNumb,
  );

  return (
    <div className="main-container-list-manage">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            height: "40px",
          }}
        >
          <b style={{ fontSize: "22px" }}>Danh Sách Bài Đăng</b>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            alignItems: "end",
            paddingBottom: "2px",
            gap: "2px",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            Bạn hiện đang có{" "}
            <span style={{ color: "#E1A730", fontWeight: "bold" }}>
              {MOCK_ROOMS.length}
            </span>{" "}
            bài đăng
          </p>
          <input
            style={{
              width: "273px",
              height: "10px",
              border: "1px solid #bdbdbd",
              backgroundColor: "#fff",
            }}
            type="text"
            placeholder="Tìm kiếm theo tên, địa chỉ..."
          />
        </div>
      </div>

      <hr style={{ border: "1px solid #ddd" }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: "1",
          marginTop: "9px ",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {ArrayRender.map((item, index) => {
            return (
              <div key={index}>
                <div className="item-room">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{ width: "100%", borderRadius: "15px" }}
                      src={demo}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "11px",
                    }}
                  >
                    <div style={{ marginBottom: "28px", fontSize: "19px" }}>
                      <b>{item.title}</b>
                    </div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div>
                        <MapPin size={20} color="#e1a730" />
                      </div>
                      <div style={{ color: "#757575" }}>{item.address}</div>
                    </div>
                    <div>
                      <b style={{ color: "#e1a730", fontSize: "24px" }}>
                        {item.price}
                      </b>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ color: "#757575" }}>VND/ tháng</div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "37px",
                        }}
                      >
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <Eye color="#424242" size={22} />
                          </div>
                          <div style={{ color: "#757575" }}>{item.views}</div>
                        </div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <div>
                            <CalendarDays color="#424242" size={20} />
                          </div>
                          <div style={{ color: "#757575" }}>12/12/2026</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ position: "relative", textAlign: "center" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "6px",
                          left: "79px",
                        }}
                      >
                        <Pencil size={18} color="#0063B8" />
                      </div>
                      <button
                        style={{
                          padding: "7px 18px",
                          borderRadius: "6px",
                          backgroundColor: "#D9F5FD",
                          border: "1px solid #5CC1EE",
                          width: "38%",
                          color: "#0063B8",
                          textAlign: "end",
                        }}
                      >
                        Sửa
                      </button>
                    </div>

                    <div style={{ position: "relative", textAlign: "center" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "6px",
                          left: "79px",
                        }}
                      >
                        <EyeOff size={18} color="#925400" />
                      </div>
                      <button
                        style={{
                          padding: "7px 18px",
                          borderRadius: "6px",
                          backgroundColor: "#FEEFCB",
                          border: "1px solid #E6AC28",
                          width: "38%",
                          color: "#925400",
                          textAlign: "end",
                        }}
                      >
                        Ẩn
                      </button>
                    </div>

                    <div style={{ position: "relative", textAlign: "center" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "6px",
                          left: "79px",
                        }}
                      >
                        <Trash2 size={18} color="#BB2A33" />
                      </div>
                      <button
                        style={{
                          padding: "7px 18px",
                          borderRadius: "6px",
                          backgroundColor: "#FFECEE",
                          border: "1px solid #FF99A1",
                          width: "38%",
                          color: "#BB2A33",
                          textAlign: "end",
                        }}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            margin: "25px 0",
          }}
        >
          {buttonPage.map((item) => {
            return (
              <button
                onClick={() => {
                  {
                    setCurrentPage(item);
                  }
                }}
                style={{
                  color: currentPage === item ? "#FFFFFF" : "#000000",
                  border: "1px solid #D9D9D9",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  backgroundColor: currentPage === item ? "#E1A730" : "#ffffff",
                  scale: currentPage == item ? '1.2' : '1'
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminListManage;
