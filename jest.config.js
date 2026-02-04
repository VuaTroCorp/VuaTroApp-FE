
export const moduleNameMapper = {
  '^assets/(.*)$': '<rootDir>/src/assets/$1',
  "\\.(png|jpg|jpeg|svg)$": "<rootDir>/__mocks__/fileMock.js"
  // add any other aliases as needed
};