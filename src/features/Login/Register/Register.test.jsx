import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "hooks/useAuth";
import Register from "./Register";

jest.mock("assets/images/logo.png", () => "test-logo.png");
jest.mock("lib/api");

describe("Register component", () => {
  test("hiển thị form đăng ký", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </AuthProvider>,
    );
    expect(screen.getByText("Đăng Ký Tài Khoản Mới")).toBeInTheDocument();
  });
});
