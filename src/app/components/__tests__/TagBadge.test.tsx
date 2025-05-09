import React from 'react';
import { screen } from '@testing-library/react';
import TagBadge from '../TagBadge';
import { render } from '../../__test-utils__/test-utils';
import { mockTag } from '../../__test-utils__/mocks/tagMocks';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('TagBadge', () => {
  it('renders tag name correctly', () => {
    render(<TagBadge tag={mockTag} />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('applies active styles when isActive is true', () => {
    render(<TagBadge tag={mockTag} isActive={true} />);
    const badge = screen.getByText('Test Tag');
    expect(badge).toHaveClass('bg-blue-200', 'dark:bg-blue-900');
  });

  it('applies inactive styles when isActive is false', () => {
    render(<TagBadge tag={mockTag} isActive={false} />);
    const badge = screen.getByText('Test Tag');
    expect(badge).toHaveClass('bg-gray-200', 'dark:bg-gray-700');
  });

  it('renders as a link when asLink is true', () => {
    render(<TagBadge tag={mockTag} asLink={true} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/tags/1');
  });

  it('renders as a span when asLink is false', () => {
    render(<TagBadge tag={mockTag} asLink={false} />);
    const span = screen.getByText('Test Tag');
    expect(span.tagName).toBe('SPAN');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<TagBadge tag={mockTag} size="small" />);
    expect(screen.getByText('Test Tag')).toHaveClass('text-xs');

    rerender(<TagBadge tag={mockTag} size="medium" />);
    expect(screen.getByText('Test Tag')).toHaveClass('text-sm');

    rerender(<TagBadge tag={mockTag} size="large" />);
    expect(screen.getByText('Test Tag')).toHaveClass('text-base');
  });
});  