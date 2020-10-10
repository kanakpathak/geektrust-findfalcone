module.exports = {
  bail: 1,
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(css|scss|less)$": "jest-css-modules-transform"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
