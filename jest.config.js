const path = require('path');

module.exports = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '^./react': path.resolve(__dirname, 'node_modules/react'),
        '^./react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        '^./prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
        '^./styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};