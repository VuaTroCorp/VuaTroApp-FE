import React from "react";
import "./HistoryTransaction.scss";
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
      <div className="header-history">
        <div className="title-section">
          <b>Lịch Sử Giao Dịch</b>
        </div>
        <div className="export-section">
          <p>Xuất báo cáo</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="content-body">
        {/* Statistics Cards */}
        <div className="report-container">
          <div className="stat-card revenue">
            <p className="stat-label">TỔNG DOANH THU</p>
            <div className="stat-value-group">
              <div className="stat-number">
                12.345.678.910 <span className="currency">VND</span>
              </div>
              <p className="stat-trend">+ 12% so với tháng trước</p>
            </div>
          </div>

          <div className="stat-card total-tx">
            <p className="stat-label">TỔNG SỐ GIAO DỊCH</p>
            <div className="stat-value-group">
              <div className="stat-number">12.345</div>
              <p className="stat-update">Cập nhật 5 phút trước</p>
            </div>
          </div>

          <div className="stat-card pending-tx">
            <p className="stat-label">GIAO DỊCH ĐANG CHỜ</p>
            <div className="stat-value-group">
              <div className="stat-number">36</div>
              <p className="stat-alert">Cần xử lý ngay</p>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="refind-container">
          <div className="filter-input">Tên người dùng</div>
          <div className="filter-input">Tất cả vai trò</div>
          <div className="filter-input">dd/mm/yy</div>
          <div className="filter-btn">Lọc dữ liệu</div>
        </div>

        {/* Transaction List */}
        <div className="history-content-container">
          {/* Item 1: Success Deposit */}
          <div className="item-history">
            <div className="item-left">
              <div className="icon-wrapper deposit">
                <Wallet color="#16A34A" size={29} />
              </div>
              <div className="info-wrapper">
                <div className="info-top">
                  <p className="tx-name">Nạp tiền vào tài khoản</p>
                  <div className="user-tag">Nguyễn Trung Quân</div>
                  <div className="role-tag">CHỦ CĂN HỘ</div>
                </div>
                <div className="info-bottom">
                  <p className="tx-code">Mã Giao Dịch: VT092182</p>
                  <div className="tx-time">
                    <History size={17} />
                    <span>20/10/2026 - 15:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right">
              <p className="amount positive">+ 5.000.000 VND</p>
              <div className="status-tag success">Thành công</div>
            </div>
          </div>

          {/* Item 2: Failed */}
          <div className="item-history">
            <div className="item-left">
              <div className="icon-wrapper failed">
                <CircleAlert color="#E15856" size={29} />
              </div>
              <div className="info-wrapper">
                <div className="info-top">
                  <p className="tx-name">Nạp tiền vào tài khoản</p>
                  <div className="user-tag">Nguyễn Trung Quân</div>
                  <div className="role-tag">CHỦ CĂN HỘ</div>
                </div>
                <div className="info-bottom">
                  <p className="tx-code">Mã Giao Dịch: VT092182</p>
                  <div className="tx-time">
                    <History size={17} />
                    <span>20/10/2026 - 15:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right">
              <p className="amount cancelled">1.000.000 VND</p>
              <div className="status-tag danger">Thất bại</div>
            </div>
          </div>

          {/* Item 3: Processing */}
          <div className="item-history">
            <div className="item-left">
              <div className="icon-wrapper processing">
                <RefreshCcw color="#2563EB" size={29} />
              </div>
              <div className="info-wrapper">
                <div className="info-top">
                  <p className="tx-name">Nạp tiền vào tài khoản</p>
                  <div className="user-tag">Nguyễn Trung Quân</div>
                  <div className="role-tag">NGƯỜI TÌM PHÒNG</div>
                </div>
                <div className="info-bottom">
                  <p className="tx-code">Mã Giao Dịch: VT092182</p>
                  <div className="tx-time">
                    <History size={17} />
                    <span>20/10/2026 - 15:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right">
              <p className="amount process">1.000.000 VND</p>
              <div className="status-tag processing">Đang xử lý</div>
            </div>
          </div>

          {/* Item 4: VIP Payment */}
          <div className="item-history">
            <div className="item-left">
              <div className="icon-wrapper payment">
                <CircleDollarSign color="#EA580C" size={29} />
              </div>
              <div className="info-wrapper">
                <div className="info-top">
                  <p className="tx-name">Thanh toán tin đăng VIP</p>
                  <div className="user-tag">laugh</div>
                  <div className="role-tag">CHỦ CĂN HỘ</div>
                </div>
                <div className="info-bottom">
                  <p className="tx-code">Mã Giao Dịch: VT092182</p>
                  <div className="tx-time">
                    <History size={17} />
                    <span>20/10/2026 - 15:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right">
              <p className="amount negative">- 3.000.000 VND</p>
              <div className="status-tag success">Thành công</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;