import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("ForgotPassword", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test("hiển thị lỗi khi submit rỗng", () => {
        render(
            <MemoryRouter>
                <ForgotPassword />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Gửi yêu cầu"));

        expect(
            screen.getByText("Vui lòng nhập Email hoặc SĐT")
        ).toBeInTheDocument();
    });

    test("chuyển sang verify khi nhập email hợp lệ", () => {
        render(
            <MemoryRouter>
                <ForgotPassword />
            </MemoryRouter>
        );

        fireEvent.change(
            screen.getByPlaceholderText("Nhập email hoặc số điện thoại"),
            { target: { value: "test@gmail.com" } }
        );

        fireEvent.click(screen.getByText("Gửi yêu cầu"));

        expect(mockNavigate).toHaveBeenCalledWith("/verify-otp", {
            state: { identifier: "test@gmail.com" },
        });
    });
});
