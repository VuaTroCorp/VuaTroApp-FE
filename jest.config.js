module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
module.exports = {
  moduleNameMapper: {
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    // add any other aliases as needed
  },
};