import "./inforContact.scss";

function InforContact() {
    return (
        <div className="infor-contact">
            <h3 className="section-title">III. Thông Tin Liên Hệ</h3>

            <div className="contact-form">
                {/* Tên liên hệ */}
                <div className="form-group">
                    <label>Tên Liên Hệ:</label>
                    <input
                        type="text"
                        placeholder="Nhập Tên Liên Hệ"
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label className="input-email" >Email:</label>
                    <input
                        type="email"
                        placeholder="Nhập Địa Chỉ Email"
                    />
                </div>

                {/* Số điện thoại */}
                <div className="form-group">
                    <label>Số Điện Thoại:</label>
                    <input
                        type="text"
                        placeholder="Nhập Số Điện Thoại"
                    />
                </div>
            </div>
        </div>
    );
}

export default InforContact;
