import React from "react";
import "./ExpireUpload.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  RotateCw,
  TriangleAlert,
  Trash2,
  CircleCheck,

} from "lucide-react";

const ExpireUpload = () => {
  return (
    <div style={{}}>
      <div className="main-container-expired-manage">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "20px",
              height: "40px",
            }}
          >
            <b style={{ fontSize: "22px" }}>Bài Đăng Hết Hạn</b>
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
              <span style={{ color: "#E1A730", fontWeight: "bold" }}>10</span>{" "}
              bài đăng hết hạn
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
          <div className="item-cancel">
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
              <div style={{ marginBottom: "28px", fontSize: "19px" }}>
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
              <div
                style={{
                  backgroundColor: "#FEEFCB",
                  border: "1px solid #E6AC28",
                  borderRadius: "10px",
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 15px",
                  gap: "6px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <TriangleAlert color="#925400" size={22} />
                </div>
                <div>
                  <p
                    style={{
                      color: "#925400",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <b>ĐÃ HẾT HẠN</b>{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "25px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <RotateCw color="#925400" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FEEFCB",
                      borderRadius: "6px",
                      border: "1px solid #E6AC28",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#925400",
                    }}
                  >
                    Gia hạn
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <Trash2 color="#BB2A33" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FFECEE",
                      borderRadius: "6px",
                      border: "1px solid #BB2A33",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#BB2A33",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item-cancel">
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
              <div style={{ marginBottom: "28px", fontSize: "19px" }}>
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
              <div
                style={{
                  backgroundColor: "#E9F5CE",
                  border: "1px solid #9BC438",
                  borderRadius: "10px",
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 15px",
                  gap: "6px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <CircleCheck  color="#436F00" size={22} />
                </div>
                <div>
                  <p
                    style={{
                      color: "#436F00",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <b>GIA HẠN THÀNH CÔNG</b>{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "25px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <RotateCw color="#925400" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FEEFCB",
                      borderRadius: "6px",
                      border: "1px solid #E6AC28",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#925400",
                    }}
                  >
                    Gia hạn
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <Trash2 color="#BB2A33" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FFECEE",
                      borderRadius: "6px",
                      border: "1px solid #BB2A33",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#BB2A33",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item-cancel">
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
              <div style={{ marginBottom: "28px", fontSize: "19px" }}>
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
              <div
                style={{
                  backgroundColor: "#FFECEE",
                  border: "1px solid #FF99A1",
                  borderRadius: "10px",
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 15px",
                  gap: "6px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Trash2 color="#BB2A33" size={22} />
                </div>
                <div>
                  <p
                    style={{
                      color: "#BB2A33",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <b>ĐÃ XÓA</b>{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "25px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <RotateCw color="#925400" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FEEFCB",
                      borderRadius: "6px",
                      border: "1px solid #E6AC28",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#925400",
                    }}
                  >
                    Gia hạn
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", top: "8px", left: "12px" }}
                  >
                    <Trash2 color="#BB2A33" size={18} />
                  </div>
                  <button
                    style={{
                      backgroundColor: "#FFECEE",
                      borderRadius: "6px",
                      border: "1px solid #BB2A33",
                      padding: "8px 15px 8px 39px",
                      textAlign: "end",
                      color: "#BB2A33",
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpireUpload;
