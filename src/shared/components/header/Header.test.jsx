import { render, screen } from "@testing-library/react";
import Navbar from "./Header";
import { MemoryRouter } from "react-router-dom";

jest.mock("assets/images/logo.png", () => "logo.png");
jest.mock("assets/icons/location1.png", () => "location1.png");
jest.mock("assets/icons/down.png", () => "down.png");
jest.mock("assets/icons/heart.png", () => "heart.png");
jest.mock("assets/icons/account.png", () => "account.png");

describe("Navbar Component", () => {
  test("renders navbar component correctly", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText("VuaTro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tìm Bất Động Sản...")).toBeInTheDocument();
    expect(screen.getByText("Đăng nhập")).toBeInTheDocument();
    expect(screen.getByText("Đăng tin")).toBeInTheDocument();
  });
});
