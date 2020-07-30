module.exports = { 
    displayName: "Huddl",
    rootDir: "../",
    setupFilesAfterEnv: ["<rootDir>/node_modules/jest-enzyme/lib/index.js"],
    testPathIgnorePatterns: ["node_modules"],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/actionTypes",
        "<rootDir>/src/actions",
        "<rootDir>/src/index.js",
        "<rootDir>/src/interfaces",
        "<rootDir>/src/reducers",
        "<rootDir>/src/redux",
        "<rootDir>/src/service",
        "<rootDir>/src/helpers",
        "<rootDir>/src/routes.jsx",
        "<rootDir>/src/sagas",
        "<rootDir>/src/store.js",
        "<rootDir>/src/ContextLoader.js",
        "<rootDir>/src/client.js",
    ],
    bail: true,
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>/src/**/*.test.{js,jsx}"],
    transform: { "^.+\\.(js|jsx)$": "babel-jest"  },
    moduleNameMapper: {
        "\\.(css|scss)$": "jest-transform-css",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: ["<rootDir>/test/jest.setup.js"],
    collectCoverageFrom: [    "<rootDir>/src/**/*.{js,jsx}"  ],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 90,
            functions: 100,
            lines: 90
        }
    }
};
