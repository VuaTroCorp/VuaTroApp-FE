import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "./Register";

/* ================= MOCK ================= */

// mock useNavigate
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

// mock image imports
jest.mock("assets/images/logo.png", () => "");
jest.mock("assets/icons/google-logo.png", () => "");

/* ================= TEST ================= */

describe("Register component", () => {
    beforeEach(() => {
        jest.spyOn(window, "alert").mockImplementation(() => { });
        mockNavigate.mockClear();
    });

    test("hiển thị form đăng ký", () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        expect(screen.getByText("ĐĂNG KÝ VUATROVN")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Nhập họ và tên")
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Nhập email hoặc số điện thoại")
        ).toBeInTheDocument();
    });

    test("hiển thị lỗi khi submit rỗng", () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText("Đăng ký"));

        expect(
            screen.getByText("Vui lòng nhập họ tên")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Vui lòng nhập email hoặc SĐT")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Mật khẩu tối thiểu 6 ký tự")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Bạn phải đồng ý điều khoản")
        ).toBeInTheDocument();
    });


    test("đăng ký thành công khi nhập đúng dữ liệu", () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập họ và tên"),
            { target: { value: "Nguyễn Văn A" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập email hoặc số điện thoại"),
            { target: { value: "test@gmail.com" } }
        );

        fireEvent.change(
            screen.getAllByPlaceholderText("••••••••")[0],
            { target: { value: "123456" } }
        );

        fireEvent.change(
            screen.getAllByPlaceholderText("••••••••")[1],
            { target: { value: "123456" } }
        );

        fireEvent.click(screen.getByLabelText("Tôi đồng ý điều khoản sử dụng"));

        fireEvent.click(screen.getByText("Đăng ký"));

        expect(window.alert).toHaveBeenCalledWith("Đăng ký thành công!");
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
});
