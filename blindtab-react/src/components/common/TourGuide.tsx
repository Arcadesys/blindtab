import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from './index';

interface TourStep {
  target: string;
  title: string;
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

interface TourGuideProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  pointer-events: none;
  animation: ${fadeIn} 0.3s ease-out;
`;

const TooltipContainer = styled.div<{ position: { top: string; left: string; transform: string } }>`
  position: fixed;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  transform: ${props => props.position.transform};
  background-color: var(--bg-primary);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--modal-shadow);
  padding: 16px;
  width: 300px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1001;
  pointer-events: auto;
  animation: ${fadeIn} 0.3s ease-out;
`;

const TooltipArrow = styled.div<{ position: 'top' | 'right' | 'bottom' | 'left' }>`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--bg-primary);
  transform: rotate(45deg);
  
  ${props => {
    switch (props.position) {
      case 'top':
        return `
          bottom: -6px;
          left: 50%;
          margin-left: -6px;
        `;
      case 'right':
        return `
          left: -6px;
          top: 50%;
          margin-top: -6px;
        `;
      case 'bottom':
        return `
          top: -6px;
          left: 50%;
          margin-left: -6px;
        `;
      case 'left':
        return `
          right: -6px;
          top: 50%;
          margin-top: -6px;
        `;
      default:
        return '';
    }
  }}
`;

const TooltipTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-primary);
`;

const TooltipContent = styled.p`
  margin: 0 0 16px 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StepIndicator = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Highlight = styled.div<{ position: { top: number; left: number; width: number; height: number } }>`
  position: absolute;
  top: ${props => props.position.top}px;
  left: ${props => props.position.left}px;
  width: ${props => props.position.width}px;
  height: ${props => props.position.height}px;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: none;
`;

const SkipButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1002;
  pointer-events: auto;
`;

const TourGuide: React.FC<TourGuideProps> = ({ steps, isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
  const [highlightPosition, setHighlightPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [tooltipArrowPosition, setTooltipArrowPosition] = useState<'top' | 'right' | 'bottom' | 'left'>('bottom');

  useEffect(() => {
    if (!isOpen) return;

    const positionTooltip = () => {
      const step = steps[currentStep];
      if (!step) return;

      const targetElement = document.querySelector(step.target);
      if (!targetElement) return;

      const targetRect = targetElement.getBoundingClientRect();
      const position = step.position || 'bottom';

      // Set highlight position
      setHighlightPosition({
        top: targetRect.top,
        left: targetRect.left,
        width: targetRect.width,
        height: targetRect.height
      });

      // Calculate tooltip position
      let top = '0px';
      let left = '0px';
      let transform = 'none';
      
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Estimated tooltip dimensions (adjust based on your actual tooltip size)
      const tooltipWidth = 300; // Match the width in the styled component
      const tooltipHeight = 200; // Approximate height, adjust as needed
      
      switch (position) {
        case 'top':
          top = `${Math.max(tooltipHeight/2 + 10, targetRect.top - 20)}px`;
          left = `${targetRect.left + targetRect.width / 2}px`;
          transform = 'translate(-50%, -100%)';
          break;
        case 'right':
          top = `${targetRect.top + targetRect.height / 2}px`;
          left = `${Math.min(viewportWidth - tooltipWidth - 20, targetRect.right + 20)}px`;
          transform = 'translateY(-50%)';
          break;
        case 'bottom':
          top = `${Math.min(viewportHeight - tooltipHeight - 20, targetRect.bottom + 20)}px`;
          left = `${targetRect.left + targetRect.width / 2}px`;
          transform = 'translateX(-50%)';
          break;
        case 'left':
          top = `${targetRect.top + targetRect.height / 2}px`;
          left = `${Math.max(tooltipWidth/2 + 10, targetRect.left - 20)}px`;
          transform = 'translate(-100%, -50%)';
          break;
      }
      
      // Final boundary check to ensure tooltip is fully visible
      // This is a fallback in case the position-specific adjustments aren't enough
      const numericLeft = parseFloat(left);
      if (numericLeft - tooltipWidth/2 < 20) {
        left = `${tooltipWidth/2 + 20}px`;
      } else if (numericLeft + tooltipWidth/2 > viewportWidth - 20) {
        left = `${viewportWidth - tooltipWidth/2 - 20}px`;
      }
      
      const numericTop = parseFloat(top);
      if (numericTop - tooltipHeight/2 < 20) {
        top = `${tooltipHeight/2 + 20}px`;
      } else if (numericTop + tooltipHeight/2 > viewportHeight - 20) {
        top = `${viewportHeight - tooltipHeight/2 - 20}px`;
      }

      setTooltipPosition({ top, left, transform });
      setTooltipArrowPosition(position);
    };

    positionTooltip();
    window.addEventListener('resize', positionTooltip);

    return () => {
      window.removeEventListener('resize', positionTooltip);
    };
  }, [isOpen, currentStep, steps]);

  if (!isOpen || !steps.length) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const currentTourStep = steps[currentStep];

  return (
    <>
      <Overlay />
      <Highlight position={highlightPosition} />
      <TooltipContainer position={tooltipPosition}>
        <TooltipArrow position={tooltipArrowPosition} />
        <TooltipTitle>{currentTourStep.title}</TooltipTitle>
        <TooltipContent>{currentTourStep.content}</TooltipContent>
        <TooltipFooter>
          <StepIndicator>
            {currentStep + 1} of {steps.length}
          </StepIndicator>
          <ButtonGroup>
            {currentStep > 0 && (
              <Button 
                variant="secondary" 
                size="small" 
                onClick={handlePrevious}
              >
                Previous
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button 
                variant="primary" 
                size="small" 
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button 
                variant="primary" 
                size="small" 
                onClick={handleNext}
              >
                Finish
              </Button>
            )}
          </ButtonGroup>
        </TooltipFooter>
      </TooltipContainer>
      <SkipButton
        variant="secondary"
        size="small"
        onClick={handleSkip}
      >
        Skip Tour
      </SkipButton>
    </>
  );
};

export default TourGuide; 