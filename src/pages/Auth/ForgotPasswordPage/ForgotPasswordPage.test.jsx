import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ForgotPasswordPage from "./ForgotPasswordPage";

jest.mock("react-toastify", () => ({
  toast: {
    dismiss: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("lib/apiService", () => ({
  authAPI: {
    forgotPassword: jest.fn(),
  },
}));

import { authAPI } from "lib/apiService";
import { toast } from "react-toastify";

jest.mock("assets/images/background.png", () => "test-background.png", {
  virtual: true,
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("ForgotPassword", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    jest.restoreAllMocks();
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  test("hiển thị form quên mật khẩu", () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("Quên Mật Khẩu ?")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Vui Lòng Nhập Email Hoặc Số Điện Thoại"),
    ).toBeInTheDocument();
  });

  test("hiển thị lỗi khi submit rỗng", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /gửi mã xác nhận/i }));

    expect(
      screen.getByText("Vui lòng nhập email"),
    ).toBeInTheDocument();
  });

  test("gọi API khi nhập email hợp lệ", async () => {
    const user = userEvent.setup();
    authAPI.forgotPassword.mockResolvedValueOnce({ data: { ok: true } });

    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText(
      "Vui Lòng Nhập Email Hoặc Số Điện Thoại",
    );
    await user.type(input, "test@gmail.com");

    await user.click(screen.getByRole("button", { name: /gửi mã xác nhận/i }));

    await waitFor(() => {
      expect(authAPI.forgotPassword).toHaveBeenCalledTimes(1);
    });

    expect(authAPI.forgotPassword).toHaveBeenCalledWith("test@gmail.com");
    expect(toast.success).toHaveBeenCalled();
  });

  test("hiển thị toast error khi API thất bại", async () => {
    const user = userEvent.setup();
    authAPI.forgotPassword.mockRejectedValueOnce({
      response: { data: { message: "Gửi email đặt lại mật khẩu thất bại" } },
    });

    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText(
      "Vui Lòng Nhập Email Hoặc Số Điện Thoại",
    );
    await user.type(input, "test@gmail.com");
    await user.click(screen.getByRole("button", { name: /gửi mã xác nhận/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
