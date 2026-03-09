import React from "react";
import "./WaitUpload.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  Clock,
  X,  
} from "lucide-react";

const WaitUpload = () => {
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
          <b style={{ fontSize: "22px" }}>Bài Đăng Chờ Duyệt</b>
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
            <span style={{ color: "#E1A730", fontWeight: "bold" }}>10</span> bài
            đăng chờ duyệt
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
      <div>
        <div className="item-wating">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "100%", borderRadius: "15px" }}
              src={demo}
              alt=""
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "11px" }}
          >
            <div style={{ marginBottom: "28px", fontSize:'19px' }}>
              <b>Phòng trọ sinh viên giá rẻ sốc</b>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <MapPin size={20} color="#e1a730" />
              </div>
              <div style={{ color: "#757575" }}>
                Phan Rang - Tháp Chàm, Ninh Thuận
              </div>
            </div>
            <div>
              <b style={{ color: "#e1a730", fontSize: "24px" }}>3.600.000</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  <div style={{ color: "#757575" }}>1,234</div>
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
            <div style={{ position: "relative", textAlign:'ccenter', textAlign:'center'}}>
              <div style={{ position: "absolute", top: "6px", left: "52px" }}>
                <Eye  size={18} color="#0063B8" />
              </div>
              <button
                style={{
                  padding: "7px 18px",
                  borderRadius: "6px",
                  backgroundColor: "#D9F5FD",
                  border: "1px solid #5CC1EE",
                  width: "68%",
                  color: "#0063B8",
                  textAlign: "end",
                }}
              >
                Xem chi tiết
              </button>
            </div>
            <div style={{ position: "relative",textAlign:'ccenter', textAlign:'center'}}>
              <div style={{ position: "absolute", top: "6px", left: "52px" }}>
                <Clock  size={17} color="#925400" />
              </div>
              <button
                style={{
                  padding: "7px 18px",
                  borderRadius: "6px",
                  backgroundColor: "#FEEFCB",
                  border: "1px solid #E6AC28",
                  width: "68%",
                  color: "#925400",
                  textAlign: "end",
                }}
              >
                Đăng lại
              </button>
            </div>
            <div style={{ position: "relative", textAlign:'center', textAlign:'center'}}>
              <div style={{ position: "absolute", top: "6px", left: "52px" }}>
                <X size={18} color="#BB2A33" />
              </div>
              <button
                style={{
                  padding: "7px 18px",
                  borderRadius: "6px",
                  backgroundColor: "#FFECEE",
                  border: "1px solid #FF99A1",
                  width: "68%",
                  color: "#BB2A33",
                  textAlign: "end",
                }}
              >
                Hủy yêu cầu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitUpload;
