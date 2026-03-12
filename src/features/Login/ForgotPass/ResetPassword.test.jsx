import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
    useLocation: () => ({
        state: { identifier: "test@gmail.com", otp: "123456" },
    }),
}));

describe("ResetPassword", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test("hiển thị lỗi khi thiếu mật khẩu", () => {
        render(
            <MemoryRouter>
                <ResetPassword />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Xác nhận"));

        expect(
            screen.getByText("Vui lòng nhập đầy đủ thông tin")
        ).toBeInTheDocument();
    });

    test("hiển thị lỗi khi mật khẩu không khớp", () => {
        render(
            <MemoryRouter>
                <ResetPassword />
            </MemoryRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập mật khẩu mới"),
            { target: { value: "123456" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập lại mật khẩu mới"),
            { target: { value: "654321" } }
        );

        fireEvent.click(screen.getByText("Xác nhận"));

        expect(
            screen.getByText("Mật khẩu xác nhận không khớp")
        ).toBeInTheDocument();
    });

    test("chuyển về login khi hợp lệ", () => {
        render(
            <MemoryRouter>
                <ResetPassword />
            </MemoryRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập mật khẩu mới"),
            { target: { value: "123456" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập lại mật khẩu mới"),
            { target: { value: "123456" } }
        );

        fireEvent.click(screen.getByText("Xác nhận"));

        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
});
