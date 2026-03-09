import React from "react";
import "./OrderManager.scss";
import demo from "assets/images/demo.jpg";
import { MapPin, CalendarDays, User, CircleX, CircleCheck, Phone  } from "lucide-react";

const OrderManager = () => {
  return (
    <div className="main-container-order-manage">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            height: "40px",
          }}
        >
          <b style={{ fontSize: "22px" }}>Quản Lý Đặt Trước</b>
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
            đăng đặt trước
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
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
              <div style={{ marginTop: "11px" }}>
                <b style={{ color: "#e1a730", fontSize: "15px" }}>
                  Thông tin người đặt:
                </b>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    color: "black",
                    fontWeight: "500",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <div>
                    <User size={20} color="#E6AC28" />
                  </div>
                  <p>Lê Hoàng Tuyển</p>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "37px",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <Phone color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>0334171139</div>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <CalendarDays color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>12/12/2026 - 15:30</div>
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
                  borderRadius: "10px",
                  height: "65px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  padding: "0 15px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    textAlign: "start",
                    color: "#E1A730",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  <p>2.590.000</p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "16px",
                      textAlign: "start",
                    }}
                  >
                    VND/tháng
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection:'column',
                  justifyContent: "center",
                  gap: "8px",
                  padding:'0 15px'
                }}
              >
                <div>
                  <button
                    style={{
                      backgroundColor: "#FEEFCB",
                      borderRadius: "6px",
                      border: "1px solid #E6AC28",
                      padding: "9px 17px",
                      width: "137px",
                      textAlign: "center",
                      color: "#925400",
                      display:'flex',
                      alignItems:'center'
                    }}
                  >
                    <span style={{display:'flex', alignItems:'center'}}><CircleCheck size={18}/></span>
                    <span style={{marginLeft:'8px', fontWeight:'500'}}>Đã xác nhận</span>
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "#FFECEE",
                      borderRadius: "6px",
                      border: "1px solid #BB2A33",
                      padding: "9px 17px",
                      width: "137px",
                      textAlign: "center",
                      color: "#BB2A33",
                      display:'flex',
                      alignItems:'center'
                    }}
                  >
                    <span style={{display:'flex', alignItems:'center'}}>
                      <CircleX size={18}/>
                    </span>
                    <span style={{ marginLeft: "20px" }}>Từ chối</span>
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
              <div style={{ marginTop: "11px" }}>
                <b style={{ color: "#e1a730", fontSize: "15px" }}>
                  Thông tin người đặt:
                </b>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    color: "black",
                    fontWeight: "500",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <div>
                    <User size={20} color="#E6AC28" />
                  </div>
                  <p>Lê Hoàng Tuyển</p>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "37px",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <Phone color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>0334171139</div>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <CalendarDays color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>12/12/2026 - 15:30</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  padding: "0 15px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    textAlign: "start",
                    color: "#E1A730",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  <p>2.590.000</p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "16px",
                      textAlign: "start",
                    }}
                  >
                    VND/tháng
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "25px",
                }}
              >
                <div style={{padding:'0 15px', marginBottom:'30px'}}> 
                  <button
                    style={{
                      backgroundColor: "#FFECEE80",
                      borderRadius: "6px",
                      border: "1px solid #BB2A3380",
                      padding: "8px 17px",
                      width: "137px",
                      textAlign: "center",
                      color: "#BB2A3380",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{display:'flex', alignItems:'center'}}>
                      <CircleX size={18}/>
                    </span>
                    <span style={{ marginLeft: "20px" }}>Đã từ chối</span>
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
              <div style={{ marginTop: "11px" }}>
                <b style={{ color: "#e1a730", fontSize: "15px" }}>
                  Thông tin người đặt:
                </b>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    color: "black",
                    fontWeight: "500",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <div>
                    <User size={20} color="#E6AC28" />
                  </div>
                  <p>Lê Hoàng Tuyển</p>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "37px",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <Phone color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>0334171139</div>
                  </div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <div>
                      <CalendarDays color="#E6AC28" size={20} />
                    </div>
                    <div style={{ color: "#000" }}>12/12/2026 - 15:30</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  padding: "0 15px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    textAlign: "start",
                    color: "#E1A730",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  <p>2.590.000</p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "16px",
                      textAlign: "start",
                    }}
                  >
                    VND/tháng
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "25px",
                }}
              >
                <div style={{padding:'0 15px', marginBottom:'30px'}}>
                  <button
                    style={{
                      backgroundColor: "#E9F5CE80",
                      borderRadius: "6px",
                      border: "1px solid #436F0080",
                      padding: "9px 17px",
                      width: "137px",
                      textAlign: "center",
                      color: "#436F0080",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{display:'flex', alignItems:'center'}}><CircleCheck size={18}/></span>
                    <span style={{marginLeft:'8px', fontWeight:'500'}}>Đã xác nhận</span>
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
export default OrderManager;



