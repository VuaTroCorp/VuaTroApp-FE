import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import LoginPage from "./LoginPage";
import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

// Mock dependencies
jest.mock("assets/images/logo.png", () => "test-logo.png");
jest.mock("assets/icons/google-logo.png", () => "test-google.png");
jest.mock("react-toastify");
jest.mock("hooks/useAuth");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Login Component", () => {
  let mockLogin;
  let mockNavigate;

  beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation((...args) => {
      const [firstArg] = args;
      if (
        typeof firstArg === "string" &&
        firstArg.includes("⚠️ React Router Future Flag Warning")
      ) {
        return;
      }
      // preserve normal warning behavior for everything else
      // eslint-disable-next-line no-console
      console.warn(...args);
    });
  });

  afterAll(() => {
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });

  beforeEach(() => {
    mockLogin = jest.fn();
    mockNavigate = jest.fn();
    useAuth.mockReturnValue({
      login: mockLogin,
      isLoading: false,
    });
    useNavigate.mockReturnValue(mockNavigate);
    jest.clearAllMocks();
  });

  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
    );
  };

  describe("Rendering", () => {
    test("hiển thị tất cả các trường form", () => {
      renderLogin();

      expect(
        screen.getByText("CHÀO MỪNG BẠN ĐẾN VỚI VUATROVN"),
      ).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Mật Khẩu")).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText("Nhập địa chỉ email"),
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Mật Khẩu")).toBeInTheDocument();
      expect(screen.getByText("Quên Mật Khẩu?")).toBeInTheDocument();
      expect(screen.getByText("Đăng Ký Tài Khoản")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Đăng Nhập" }),
      ).toBeInTheDocument();
    });

    test("hiển thị logo", () => {
      renderLogin();
      const logo = screen.getByAltText("Vuatrovn");
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", "test-logo.png");
    });

    test("hiển thị nút đăng nhập bằng Google", () => {
      renderLogin();
      expect(screen.getByText("Đăng nhập bằng Google")).toBeInTheDocument();
    });
  });

  describe("Form Validation", () => {
    test("hiển thị lỗi khi submit form trống", async () => {
      renderLogin();

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText("Vui lòng nhập email")).toBeInTheDocument();
      });

      expect(screen.getByText("Vui lòng nhập mật khẩu")).toBeInTheDocument();
      expect(mockLogin).not.toHaveBeenCalled();
    });

    test("hiển thị lỗi khi email không hợp lệ", async () => {
      renderLogin();

      const emailInput = screen.getByPlaceholderText("Nhập địa chỉ email");
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText("Email không hợp lệ")).toBeInTheDocument();
      });

      expect(mockLogin).not.toHaveBeenCalled();
    });

    test("xóa lỗi khi người dùng nhập lại", async () => {
      renderLogin();

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText("Vui lòng nhập email")).toBeInTheDocument();
      });

      const emailInput = screen.getByPlaceholderText("Nhập địa chỉ email");
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });

      await waitFor(() => {
        expect(
          screen.queryByText("Vui lòng nhập email"),
        ).not.toBeInTheDocument();
      });
    });
  });

  describe("Password Visibility Toggle", () => {
    test("toggle hiển thị/ẩn mật khẩu", () => {
      renderLogin();

      const passwordInput = screen.getByPlaceholderText("Mật Khẩu");
      expect(passwordInput).toHaveAttribute("type", "password");

      const eyeButton = screen.getByRole("button", { name: "" });
      fireEvent.click(eyeButton);

      expect(passwordInput).toHaveAttribute("type", "text");

      fireEvent.click(eyeButton);
      expect(passwordInput).toHaveAttribute("type", "password");
    });
  });

  describe("Form Submission", () => {
    const fillValidForm = () => {
      fireEvent.change(screen.getByPlaceholderText("Nhập địa chỉ email"), {
        target: { value: "lenguyenquangt@gmail.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Mật Khẩu"), {
        target: { value: "123456" },
      });
    };

    test("đăng nhập thành công", async () => {
      mockLogin.mockResolvedValue({
        email: "lenguyenquangt@gmail.com",
        role: "USER",
      });

      renderLogin();
      fillValidForm();

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith({
          email: "lenguyenquangt@gmail.com",
          password: "123456",
        });
      });

      expect(toast.success).toHaveBeenCalledWith(
        "Đăng nhập thành công!",
        expect.any(Object),
      );
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });

    test("hiển thị lỗi khi email hoặc password sai", async () => {
      mockLogin.mockRejectedValue({
        response: {
          data: {
            message: "Email hoặc mật khẩu không đúng",
            status: 401,
          },
        },
      });

      renderLogin();
      fillValidForm();

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          "Email hoặc mật khẩu không đúng",
          expect.any(Object),
        );
      });

      expect(mockNavigate).not.toHaveBeenCalled();
    });

    test("hiển thị lỗi mặc định khi không có message từ backend", async () => {
      mockLogin.mockRejectedValue({
        response: {},
      });

      renderLogin();
      fillValidForm();

      const submitButton = screen.getByRole("button", { name: "Đăng Nhập" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          "Đăng nhập thất bại. Vui lòng thử lại.",
          expect.any(Object),
        );
      });
    });
  });

  describe("Loading State", () => {
    test("disable form khi đang loading", () => {
      useAuth.mockReturnValue({
        login: mockLogin,
        isLoading: true,
      });

      renderLogin();

      expect(screen.getByPlaceholderText("Nhập địa chỉ email")).toBeDisabled();
      expect(screen.getByPlaceholderText("Mật Khẩu")).toBeDisabled();
      expect(
        screen.getByRole("button", { name: "Đang xử lý..." }),
      ).toBeDisabled();
    });

    test("hiển thị text 'Đang xử lý...' khi loading", () => {
      useAuth.mockReturnValue({
        login: mockLogin,
        isLoading: true,
      });

      renderLogin();
      expect(screen.getByText("Đang xử lý...")).toBeInTheDocument();
    });
  });

  describe("Navigation", () => {
    test("chuyển đến trang forgot-password khi click 'Quên Mật Khẩu?'", () => {
      renderLogin();

      const forgotPasswordLink = screen.getByText("Quên Mật Khẩu?");
      fireEvent.click(forgotPasswordLink);

      expect(mockNavigate).toHaveBeenCalledWith("/forgot-password");
    });

    test("chuyển đến trang register khi click 'Đăng Ký Tài Khoản'", () => {
      renderLogin();

      const registerLink = screen.getByText("Đăng Ký Tài Khoản");
      fireEvent.click(registerLink);

      expect(mockNavigate).toHaveBeenCalledWith("/register");
    });
  });
});
