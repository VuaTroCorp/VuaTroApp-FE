module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
// jest.config.js
module.exports = {
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
  },
};
