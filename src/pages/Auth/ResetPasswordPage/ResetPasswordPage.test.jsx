import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { authAPI } from "lib/apiService";
import { toast } from "react-toastify";

import ResetPasswordPage from "./ResetPasswordPage";

jest.mock("react-toastify", () => ({
  toast: {
    dismiss: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("lib/apiService", () => ({
  authAPI: {
    verifyResetToken: jest.fn(),
    changePassword: jest.fn(),
  },
}));

jest.mock("assets/images/background.png", () => "test-background.png", {
  virtual: true,
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useSearchParams: () => [new URLSearchParams("resetToken=dummy"), jest.fn()],
}));

describe("ResetPassword", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    jest.clearAllMocks();
    authAPI.verifyResetToken.mockResolvedValue({ data: { ok: true } });
  });

  afterEach(async () => {
    // Đảm bảo mọi promise/microtask từ useEffect (verify token) đã resolve
    await Promise.resolve();
  });

  test("hiển thị form reset password", async () => {
    render(
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>,
    );

    // Chờ UI thoát trạng thái verifying để render form
    await waitFor(() => {
      expect(
        screen.queryByText("Đang xác minh liên kết..."),
      ).not.toBeInTheDocument();
    });

    expect(screen.getByText("Quên Mật khẩu?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Mật khẩu mới")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Nhập lại mật khẩu"),
    ).toBeInTheDocument();
  });

  test("hiển thị lỗi khi thiếu mật khẩu", async () => {
    render(
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.queryByText("Đang xác minh liên kết..."),
      ).not.toBeInTheDocument();
    });

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /xác nhận/i }));

    expect(screen.getByText("Vui lòng nhập mật khẩu mới")).toBeInTheDocument();
  });

  test("hiển thị lỗi khi mật khẩu không khớp", async () => {
    render(
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.queryByText("Đang xác minh liên kết..."),
      ).not.toBeInTheDocument();
    });

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Mật khẩu mới"), "123456");
    await user.type(screen.getByPlaceholderText("Nhập lại mật khẩu"), "654321");
    await user.click(screen.getByRole("button", { name: /xác nhận/i }));

    expect(screen.getByText("Mật khẩu không khớp")).toBeInTheDocument();
  });

  test("chuyển về login khi hợp lệ", async () => {
    authAPI.changePassword.mockResolvedValueOnce({ data: { ok: true } });

    render(
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.queryByText("Đang xác minh liên kết..."),
      ).not.toBeInTheDocument();
    });

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Mật khẩu mới"), "123456");
    await user.type(screen.getByPlaceholderText("Nhập lại mật khẩu"), "123456");
    await user.click(screen.getByRole("button", { name: /xác nhận/i }));

    await waitFor(() => {
      expect(authAPI.changePassword).toHaveBeenCalledTimes(1);
    });

    expect(toast.success).toHaveBeenCalledWith("Đổi mật khẩu thành công!", expect.any(Object));
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
