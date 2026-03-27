import React from "react";
import "./ConfirmDelete.scss";
import { postAPI } from "lib/apiService";

const ConfirmDelete = ({ setShowDeleteConfirm, IDPost, setShowEditPopup }) => {
  const handleDeletePost = async () => {
    try {
      await postAPI.deletePost(IDPost);
    } catch (error) {
      console.log("lỗi r bạn ơi");
    }
  };

  return (
    <div className="main-delete-confirm-container">
      <div className="delete-confirm-box">
        <h3 className="title-delete-confirm">
          Bạn có chắc muốn xóa{" "}
          <span style={{ color: "#BA8713" }}>bài đăng</span> này không?
        </h3>
        <hr className="delete-line" />
        <div className="button-confirm-delete-container">
          <button
            onClick={() => setShowDeleteConfirm(false)}
            className="button-confirm-cancel-delete"
          >
            Hủy
          </button>
          <button
            onClick={() => {
              handleDeletePost();
              setShowDeleteConfirm(false);
              setShowEditPopup(false);
            }}
            className="button-confirm-delete"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;