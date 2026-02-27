import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("assets/images/logo.png", () => "test-logo.png");

describe("Register component", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    mockNavigate.mockClear();
  });

  test("hiển thị form đăng ký", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    expect(screen.getByText("Đăng Ký Tài Khoản Mới")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Họ Và Tên")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Nhập Vào Email/ Số Điện Thoại"),
    ).toBeInTheDocument();
  });

  test("hiển thị lỗi khi submit rỗng", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText("Đăng Ký"));

    expect(screen.getByText("Vui lòng nhập họ và tên")).toBeInTheDocument();

    expect(
      screen.getByText("Vui lòng nhập Email hoặc SĐT"),
    ).toBeInTheDocument();

    expect(screen.getByText("Vui lòng nhập mật khẩu")).toBeInTheDocument();

    expect(
      screen.getByText("Bạn cần chấp nhận điều khoản"),
    ).toBeInTheDocument();
  });

  test("đăng ký thành công khi nhập đúng dữ liệu", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    fireEvent.change(screen.getByPlaceholderText("Họ Và Tên"), {
      target: { value: "Nguyễn Văn A" },
    });

    fireEvent.change(
      screen.getByPlaceholderText("Nhập Vào Email/ Số Điện Thoại"),
      { target: { value: "test@gmail.com" } },
    );

    fireEvent.change(screen.getByPlaceholderText("Nhập Vào Mật Khẩu"), {
      target: { value: "123456" },
    });

    fireEvent.change(screen.getByPlaceholderText("Nhập Lại Mật Khẩu"), {
      target: { value: "123456" },
    });

    const checkbox = screen.getByRole("checkbox", {
      name: /Chấp Nhận Điều Khoản/i,
    });
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Đăng Ký"));

    expect(console.log).toHaveBeenCalledWith(
      "Register successful",
      expect.any(Object),
    );
  });
});
