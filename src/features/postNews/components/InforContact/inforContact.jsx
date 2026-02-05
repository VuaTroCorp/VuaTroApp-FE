import "./inforContact.scss";

function InforContact() {
    return (
        <div className="infor-contact">
            <h3 className="section-title">III. Thông Tin Liên Hệ</h3>

            <div className="contact-form">
                {/* ROW 1 */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Tên Liên Hệ:</label>
                        <input
                            type="text"
                            placeholder="Nhập thông tin Liên Hệ"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Nhập Địa Chỉ Email"
                        />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Số Điện Thoại:</label>
                        <input
                            type="text"
                            placeholder="Nhập Số Điện Thoại"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforContact;
