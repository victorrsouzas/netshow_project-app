module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["react-native"],
  },

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(@react-native|react-native)/)"],
};
