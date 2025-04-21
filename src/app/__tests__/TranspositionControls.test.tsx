import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../__test-utils__/test-utils';
import TranspositionControls from '../components/TranspositionControls';
import { ChordNote } from '@/utils/chordUtils';
import userEvent from '@testing-library/user-event';

describe('TranspositionControls', () => {
  const originalKey = 'C';
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with initial state correctly', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );
    expect(screen.getByText('Transposition Controls')).toBeInTheDocument();
    expect(screen.getByText('Original Key:')).toBeInTheDocument();
    expect(screen.getByText('Original Key:').nextSibling).toHaveTextContent('C');
    expect(screen.getByLabelText('Target Key:')).toBeInTheDocument();
    expect(screen.getByText('Semitones:')).toBeInTheDocument();
    expect(screen.getByText('Display:')).toBeInTheDocument();
  });

  it('handles target key changes', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );
    const targetKeySelect = screen.getByLabelText('Target Key:');
    fireEvent.change(targetKeySelect, { target: { value: 'G' } });
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        targetKey: 'G',
      })
    );
  });

  it('handles semitone adjustments', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );
    const upButton = screen.getByLabelText('Up one semitone');
    fireEvent.click(upButton);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        semitones: 1,
        targetKey: 'C#',
      })
    );
  });

  it('handles display mode changes', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );
    const originalOnlyButton = screen.getByText('Original Only');
    fireEvent.click(originalOnlyButton);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        displayMode: 'original',
      })
    );
  });

  it('handles accidental preference changes', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );
    const flatsRadio = screen.getByLabelText('Flats (♭)');
    fireEvent.click(flatsRadio);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        preferFlats: true,
      })
    );
  });

  it('is accessible via keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );

    const targetKeySelect = screen.getByLabelText('Target Key:');
    const displayButtons = screen.getAllByRole('button');

    await user.tab();
    expect(targetKeySelect).toHaveFocus();

    for (const button of displayButtons) {
      await user.tab();
      expect(document.activeElement).toBe(button);
    }
  });

  it('maintains state when switching between sharp and flat preferences', () => {
    render(
      <TranspositionControls
        originalKey={originalKey}
        onChange={mockOnChange}
      />
    );

    const upButton = screen.getByLabelText('Up one semitone');
    fireEvent.click(upButton);
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        targetKey: 'C#',
        preferFlats: false,
      })
    );

    const flatsRadio = screen.getByLabelText('Flats (♭)');
    fireEvent.click(flatsRadio);

    const lastCall = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1][0];
    expect(lastCall).toEqual(
      expect.objectContaining({
        targetKey: 'Db',
        preferFlats: true,
      })
    );
  });
}); 