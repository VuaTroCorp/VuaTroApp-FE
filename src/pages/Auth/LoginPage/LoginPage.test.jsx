// src/features/Login/Login/Login.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
}));

jest.mock("assets/images/logo.png", () => "test-logo.png");
jest.mock("assets/icons/google-logo.png", () => "test-google.png");

describe("Login component", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => { });
        localStorage.clear();
    });

    test("hiển thị form login", () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        expect(screen.getByText("CHÀO MỪNG BẠN ĐẾN VỚI VUATROVN")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Email Hoặc Số Điện Thoại")
        ).toBeInTheDocument();
    });

    test("hiển thị lỗi khi submit rỗng", () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText("Đăng Nhập"));

        expect(
            screen.getByText("Vui lòng nhập Email hoặc SĐT")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Vui lòng nhập mật khẩu")
        ).toBeInTheDocument();
    });

    test("login thành công khi nhập đủ dữ liệu", () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Email Hoặc Số Điện Thoại"),
            { target: { value: "test@gmail.com" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Mật Khẩu"),
            { target: { value: "123456" } }
        );

        fireEvent.click(screen.getByText("Đăng Nhập"));

        expect(console.log).toHaveBeenCalledWith("Login successful");
    });
});
