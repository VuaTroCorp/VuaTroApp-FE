import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI } from "lib/apiService";
import "./ResetPasswordPage.scss";

const VerifyResetTokenPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resetToken = searchParams.get("resetToken");

    if (!resetToken) {
      toast.error("Thiếu reset token", {
        containerId: "errors",
        autoClose: false,
      });
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    authAPI
      .verifyResetToken(resetToken)
      .then(() => {
        if (cancelled) return;
        navigate(
          `/reset-password?resetToken=${encodeURIComponent(resetToken)}`,
        );
      })
      .catch((err) => {
        if (cancelled) return;
        const message =
          err?.response?.data?.message || "Token không hợp lệ hoặc đã hết hạn";
        toast.error(message, { containerId: "errors", autoClose: false });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [navigate, searchParams]);

  return (
    <div className="reset-page">
      <div className="reset-card">
        <div className="icon-badge">🔑</div>
        <h2 className="reset-title">Đang xác minh liên kết...</h2>
        <div className="verifying-box">
          <div className="verifying-spinner" />
          <p className="verifying-text">
            {loading
              ? "Vui lòng chờ trong giây lát"
              : "Không thể xác minh liên kết. Vui lòng yêu cầu lại."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyResetTokenPage;