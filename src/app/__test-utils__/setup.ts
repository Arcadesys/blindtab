import '@testing-library/jest-dom';

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: function mock({ children, href }: { children: React.ReactNode; href: string }) {
    return (
      `<a href="${href}">${children}</a>`
    );
  },
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => '',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));  