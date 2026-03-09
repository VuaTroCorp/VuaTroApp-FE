import React from "react";
import "./CancelUpload.scss";
import demo from "assets/images/demo.jpg";
import { MapPin, Eye, CalendarDays, Pencil , Trash2 , CircleAlert } from "lucide-react";

const CancelUpload = () => {
  return (
    <div className="main-container-cancel-manage">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            height: "40px",
          }}
        >
          <b style={{ fontSize: "22px" }}>Bài Đăng Bị Từ Chối</b>
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
            đăng bị từ chối
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
            <div style={{backgroundColor:'#FFECEE', border:'1px solid #8c161f', borderRadius:'10px', height:'110px', display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 15px', gap:'5px'}}>
              <div style={{textAlign:'center'}}>
                     <CircleAlert color='#8C161F' size={20}/>
              </div>
              <div><p style={{color:'#8C161F', fontSize:'14px'}}>Thông tin địa chỉ không chính xác trên bản đồ. Vui lòng cập nhật lại vị trí chính xác.</p></div>
            </div>
            <div style={{display:'flex', justifyContent:'center', gap:'25px'}}>
              <div style={{position: 'relative'}}>
                     <div style={{position:'absolute', top:'8px', left:'12px'}}><Pencil color='#5CC1EE' size={18}/></div>
                     <button style={{backgroundColor:'#D9F5FD', borderRadius:'6px', border:'1px solid #5CC1EE', padding:'8px 15px 8px 39px', textAlign:'end', color:'#0063B8', }}>Sửa</button>
              </div>
              <div style={{position: 'relative'}}>
                     <div style={{position:'absolute', top:'8px', left:'12px'}}><Trash2 color='#BB2A33' size={18}/></div>
                     <button style={{backgroundColor:'#FFECEE', borderRadius:'6px', border:'1px solid #BB2A33', padding:'8px 15px 8px 39px', textAlign:'end', color:'#BB2A33', }}>Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelUpload;
