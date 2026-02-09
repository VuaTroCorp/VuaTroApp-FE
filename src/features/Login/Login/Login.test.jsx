// src/features/Login/Login/Login.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
}));

jest.mock("assets/images/logo.png", () => "");
jest.mock("assets/icons/google-logo.png", () => "");

describe("Login component", () => {
    beforeEach(() => {
        jest.spyOn(window, "alert").mockImplementation(() => { });
        localStorage.clear();
    });

    test("hiển thị form login", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(screen.getByText("ĐĂNG NHẬP VUATROVN")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Nhập email hoặc số điện thoại")
        ).toBeInTheDocument();
    });

    test("hiển thị lỗi khi submit rỗng", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText("Đăng nhập"));

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
                <Login />
            </BrowserRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập email hoặc số điện thoại"),
            { target: { value: "test@gmail.com" } }
        );

        fireEvent.change(
            screen.getByDisplayValue(""),
            { target: { value: "123456" } }
        );

        fireEvent.click(screen.getByText("Đăng nhập"));

        expect(localStorage.getItem("token")).toBe("demo-token");
    });
});
