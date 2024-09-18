module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|less)$": "jest-transform-stub", // Mock CSS imports
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub", // Mock image imports
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel for transforming JS/JSX files
  },
};
