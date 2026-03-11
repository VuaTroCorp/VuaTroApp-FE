import React from "react";
import "./HistoryTransaction.scss";
import demo from "assets/images/demo.jpg";
import {
  Wallet,
  History,
  CircleAlert,
  RefreshCcw,
  CircleDollarSign,
} from "lucide-react";

const HistoryTransaction = () => {
  return (
    <div className="main-container-history-manage">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            height: "40px",
          }}
        >
          <b style={{ fontSize: "22px" }}>Lịch Sử Giao Dịch</b>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "end",
            alignItems: "end",
            paddingBottom: "2px",
          }}
        >
          <p
            style={{
              textAlign: "end",
            }}
          >
            Xuất báo cáo
          </p>
        </div>
      </div>

      <hr style={{ border: "1px solid #ddd" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div className="report-container">
          <div
            style={{
              border: "2px solid #E1A730",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              borderLeft: "5px solid #E1A730",
            }}
          >
            <div>
              <p style={{ fontWeight: "500" }}>TỔNG DOANH THU</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div style={{ fontWeight: "500", fontSize: "25px" }}>
                12.345.678.910{" "}
                <span
                  style={{
                    color: "#878787",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                >
                  VND
                </span>
              </div>
              <div>
                <p style={{ color: "#E1A730" }}>+ 12% so với tháng trước</p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #0063B8",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              borderLeft: "5px solid #0063b8",
            }}
          >
            <div>
              <p style={{ fontWeight: "500" }}>TỔNG SỐ GIAO DỊCH</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div style={{ fontWeight: "500", fontSize: "25px" }}>12.345</div>
              <div>
                <p style={{ color: "#0063B8" }}>Cập nhật 5 phút trước</p>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #BB2A33",
              borderRadius: "10px",
              padding: "12px 15px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              borderLeft: "5px solid #bb2a33",
            }}
          >
            <div>
              <p style={{ fontWeight: "500" }}>GIAO DỊCH ĐANG CHỜ</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div style={{ fontWeight: "500", fontSize: "25px" }}>36</div>
              <div>
                <p style={{ color: "#BB2A33" }}>Cần xử lý ngay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="refind-container">
          <div
            style={{
              color: "#A7A7A7",
              backgroundColor: "#F8F8F8",
              padding: "8px 12px 8px 70px",
              borderRadius: "8px",
            }}
          >
            Tên người dùng
          </div>

          <div
            style={{
              color: "#A7A7A7",
              backgroundColor: "#F8F8F8",
              padding: "8px 12px 8px 70px",
              borderRadius: "8px",
            }}
          >
            Tất cả vai trò
          </div>

          <div
            style={{
              color: "#A7A7A7",
              backgroundColor: "#F8F8F8",
              padding: "8px 12px 8px 70px",
              borderRadius: "8px",
            }}
          >
            dd/mm/yy
          </div>

          <div
            style={{
              color: "#ffffff",
              textAlign: "center",
              backgroundColor: "#E1A730",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
          >
            Lọc dữ liệu
          </div>
        </div>

        <div className="history-content-container">
          <div
            className="item-history"
            style={{
              border: "2px solid #F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 22px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "28px" }}>
              <div
                style={{
                  height: "27px",
                  width: "26px",
                  padding: " 15px 15px",
                  borderRadius: "50%",
                  backgroundColor: "#F0FDF4",
                }}
              >
                <Wallet color="#16A34A" size={29} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "21px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "700" }}>
                    <p>Nạp tiền vào tài khoản</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#2563EB",
                      borderRadius: "15px",
                      backgroundColor: "#EFF6FF",
                      padding: "3px 10px",
                      fontSize: "15px",
                      border: "0 solid #2563EB",
                    }}
                  >
                    Nguyễn Trung Quân
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#4B5563",
                      borderRadius: "15px",
                      backgroundColor: "#F3F4F6",
                      padding: "3px 10px",
                      border: "0 solid #4B5563",
                      fontSize: "14px",
                    }}
                  >
                    CHỦ CĂN HỘ
                  </div>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div style={{ color: "#999999" }}>
                    <p>Mã Giao Dịch: VT092182</p>
                  </div>
                  <div
                    style={{
                      color: "#999999",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <History size={17} />
                    </div>
                    <p>20/10/2026 - 15:30</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "end",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#16A34A",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  + 5.000.000 VND
                </p>
              </div>
              <div
                style={{
                  fontWeight: "650",
                  color: "#16A34A",
                  borderRadius: "15px",
                  backgroundColor: "#DCFCE7",
                  padding: "4px 15px",
                  border: "0 solid #4B5563",
                  fontSize: "14px",
                  width: "fit-content",
                }}
              >
                Thành công
              </div>
            </div>
          </div>

          <div
            className="item-history"
            style={{
              border: "2px solid #F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 22px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "28px" }}>
              <div
                style={{
                  height: "27px",
                  width: "26px",
                  padding: " 15px 15px",
                  borderRadius: "50%",
                  backgroundColor: "#FAF1EF",
                }}
              >
                <CircleAlert color="#E15856" size={29} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "21px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "700" }}>
                    <p>Nạp tiền vào tài khoản</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#2563EB",
                      borderRadius: "15px",
                      backgroundColor: "#EFF6FF",
                      padding: "3px 10px",
                      fontSize: "15px",
                      border: "0 solid #2563EB",
                    }}
                  >
                    Nguyễn Trung Quân
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#4B5563",
                      borderRadius: "15px",
                      backgroundColor: "#F3F4F6",
                      padding: "3px 10px",
                      border: "0 solid #4B5563",
                      fontSize: "14px",
                    }}
                  >
                    CHỦ CĂN HỘ
                  </div>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div style={{ color: "#999999" }}>
                    <p>Mã Giao Dịch: VT092182</p>
                  </div>
                  <div
                    style={{
                      color: "#999999",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <History size={17} />
                    </div>
                    <p>20/10/2026 - 15:30</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "end",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#C4C4C4",
                    fontSize: "28px",
                    fontWeight: "700",
                    textDecoration: "line-through",
                  }}
                >
                  1.000.000 VND
                </p>
              </div>
              <div
                style={{
                  fontWeight: "650",
                  color: "#E15856",
                  borderRadius: "15px",
                  backgroundColor: "#FAF1EF",
                  padding: "4px 15px",
                  border: "0 solid #4B5563",
                  fontSize: "14px",
                  width: "fit-content",
                }}
              >
                Thất bại
              </div>
            </div>
          </div>

          <div
            className="item-history"
            style={{
              border: "2px solid #F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 22px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "28px" }}>
              <div
                style={{
                  height: "27px",
                  width: "26px",
                  padding: " 15px 15px",
                  borderRadius: "50%",
                  backgroundColor: "#EFF6FF",
                }}
              >
                <RefreshCcw color="#2563EB" size={29} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "21px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "700" }}>
                    <p>Nạp tiền vào tài khoản</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#2563EB",
                      borderRadius: "15px",
                      backgroundColor: "#EFF6FF",
                      padding: "3px 10px",
                      fontSize: "15px",
                      border: "0 solid #2563EB",
                    }}
                  >
                    Nguyễn Trung Quân
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#4B5563",
                      borderRadius: "15px",
                      backgroundColor: "#F3F4F6",
                      padding: "3px 10px",
                      border: "0 solid #4B5563",
                      fontSize: "14px",
                    }}
                  >
                    NGƯỜI TÌM PHÒNG
                  </div>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div style={{ color: "#999999" }}>
                    <p>Mã Giao Dịch: VT092182</p>
                  </div>
                  <div
                    style={{
                      color: "#999999",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <History size={17} />
                    </div>
                    <p>20/10/2026 - 15:30</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "end",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#2563EB",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  1.000.000 VND
                </p>
              </div>
              <div
                style={{
                  fontWeight: "650",
                  color: "#2563EB",
                  borderRadius: "15px",
                  backgroundColor: "#EFF6FF",
                  padding: "4px 15px",
                  border: "0 solid #4B5563",
                  fontSize: "14px",
                  width: "fit-content",
                }}
              >
                Đang xử lý
              </div>
            </div>
          </div>

          <div
            className="item-history"
            style={{
              border: "2px solid #F8F8F8",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 22px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "28px" }}>
              <div
                style={{
                  height: "27px",
                  width: "26px",
                  padding: " 15px 15px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF7ED",
                }}
              >
                <CircleDollarSign color="#EA580C" size={29} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "21px" }}>
                  <div style={{ fontSize: "17px", fontWeight: "700" }}>
                    <p>Thanh toán tin đăng VIP</p>
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#2563EB",
                      borderRadius: "15px",
                      backgroundColor: "#EFF6FF",
                      padding: "3px 10px",
                      fontSize: "15px",
                      border: "0 solid #2563EB",
                    }}
                  >
                    laugh
                  </div>
                  <div
                    style={{
                      fontWeight: "500",
                      color: "#4B5563",
                      borderRadius: "15px",
                      backgroundColor: "#F3F4F6",
                      padding: "3px 10px",
                      border: "0 solid #4B5563",
                      fontSize: "14px",
                    }}
                  >
                    CHỦ CĂN HỘ
                  </div>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <div style={{ color: "#999999" }}>
                    <p>Mã Giao Dịch: VT092182</p>
                  </div>
                  <div
                    style={{
                      color: "#999999",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <History size={17} />
                    </div>
                    <p>20/10/2026 - 15:30</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "end",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#DC2626",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  - 3.000.000 VND
                </p>
              </div>
              <div
                style={{
                  fontWeight: "650",
                  color: "#16A34A",
                  borderRadius: "15px",
                  backgroundColor: "#DCFCE7",
                  padding: "4px 15px",
                  border: "0 solid #4B5563",
                  fontSize: "14px",
                  width: "fit-content",
                }}
              >
                Thành công
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
