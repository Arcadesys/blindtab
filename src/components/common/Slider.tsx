import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { announceToScreenReader } from '../../hooks/useKeyboardNavigation';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: var(--bg-primary);
  border-radius: 3px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background: var(--primary-hover-color);
    }
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    transition: background-color 0.2s;
    border: none;
    
    &:hover {
      background: var(--primary-hover-color);
    }
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const SliderValue = styled.span`
  min-width: 3rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  showValue?: boolean;
  valueFormat?: (value: number, max: number) => string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  onChange,
  disabled = false,
  className,
  ariaLabel = 'Slider',
  showValue = true,
  valueFormat = (value, max) => `${value}/${max}`
}) => {
  const [localValue, setLocalValue] = useState(value);
  const isUserDragging = useRef(false);
  
  // Update local value when prop value changes (unless user is dragging)
  useEffect(() => {
    if (!isUserDragging.current) {
      setLocalValue(value);
    }
  }, [value]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setLocalValue(newValue);
  };
  
  const handleMouseDown = () => {
    isUserDragging.current = true;
  };
  
  const handleMouseUp = () => {
    isUserDragging.current = false;
    if (localValue !== value) {
      onChange(localValue);
      announceToScreenReader(`${ariaLabel} set to ${localValue}`);
    }
  };
  
  // For keyboard navigation
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || 
        e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      onChange(localValue);
      announceToScreenReader(`${ariaLabel} set to ${localValue}`);
    }
  };
  
  return (
    <SliderContainer className={className}>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        value={localValue}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onKeyUp={handleKeyUp}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={localValue}
      />
      {showValue && (
        <SliderValue>
          {valueFormat(localValue, max)}
        </SliderValue>
      )}
    </SliderContainer>
  );
};

export default Slider; 