import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import VerifyOtp from "./VerifyOtp";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
    useLocation: () => ({
        state: { identifier: "test@gmail.com" },
    }),
}));

describe("VerifyOtp", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test("hiển thị lỗi khi OTP rỗng", () => {
        render(
            <MemoryRouter>
                <VerifyOtp />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Xác nhận"));

        expect(
            screen.getByText("Vui lòng nhập mã xác nhận")
        ).toBeInTheDocument();
    });

    test("chuyển sang reset-password khi OTP hợp lệ", () => {
        render(
            <MemoryRouter>
                <VerifyOtp />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Nhập mã OTP"), {
            target: { value: "123456" },
        });

        fireEvent.click(screen.getByText("Xác nhận"));

        expect(mockNavigate).toHaveBeenCalledWith("/reset-password", {
            state: { identifier: "test@gmail.com", otp: "123456" },
        });
    });
});
