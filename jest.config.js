const path = require('path');

module.exports = {
	preset: 'ts-jest',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	verbose: true,
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
	},
	// setupFilesAfterEnv: ['./jest.setup.js'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'^./react': path.resolve(__dirname, 'node_modules/react'),
		'^./react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
		'^./prop-types': path.resolve(__dirname, 'node_modules/prop-types'),
		'^./styled-components': path.resolve(
			__dirname,
			'node_modules/styled-components'
		),
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$"
};
