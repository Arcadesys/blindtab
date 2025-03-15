// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Mock the browser APIs that might not be available in the test environment
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true
});

// Mock console.error to fail tests when React errors occur
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning/.test(args[0]) ||
      /Error/.test(args[0])
    ) {
      throw new Error(args[0]);
    }
    originalError.call(console, ...args);
  };
}); 