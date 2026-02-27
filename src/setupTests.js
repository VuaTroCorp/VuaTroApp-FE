import "@testing-library/jest-dom";

// Mock import.meta cho Jest
global.importMeta = {
  env: {
    VITE_API_BASE_URL: "http://localhost:8080"
  }
};

// Mock localStorage cho Jest
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
