import { useState, useEffect, useRef } from 'react';
import { useDisplay } from '../contexts/DisplayContext';

interface AutoResizeOptions {
  minFontSize?: number;
  maxFontSize?: number;
  step?: number;
  lineHeight?: number;
}

export const useAutoResize = (
  text: string[],
  options: AutoResizeOptions = {}
) => {
  const {
    fontSize,
    setFontSize,
    linesToDisplay,
    autoResize
  } = useDisplay();
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [calculatedFontSize, setCalculatedFontSize] = useState(fontSize);
  
  const {
    minFontSize = 12,
    maxFontSize = 72,
    step = 0.5,
    lineHeight = 1.5
  } = options;

  useEffect(() => {
    if (!autoResize || !containerRef.current) return;
    
    const container = containerRef.current;
    const calculateOptimalFontSize = () => {
      if (!container) return;
      
      const containerHeight = container.clientHeight;
      const targetLines = linesToDisplay || text.length;
      const targetHeight = containerHeight * 0.95; // 95% of container height
      
      // Start with max font size and decrease until it fits
      let testSize = maxFontSize;
      let optimalSize = minFontSize;
      
      // Create a test element to measure text height
      const testElement = document.createElement('div');
      testElement.style.position = 'absolute';
      testElement.style.visibility = 'hidden';
      testElement.style.whiteSpace = 'pre-wrap';
      testElement.style.width = `${container.clientWidth}px`;
      document.body.appendChild(testElement);
      
      while (testSize >= minFontSize) {
        testElement.style.fontSize = `${testSize}px`;
        testElement.style.lineHeight = `${lineHeight}`;
        
        // Use the actual text content to test
        testElement.textContent = text.slice(0, targetLines).join('\n');
        
        const textHeight = testElement.offsetHeight;
        
        if (textHeight <= targetHeight) {
          optimalSize = testSize;
          break;
        }
        
        testSize -= step;
      }
      
      document.body.removeChild(testElement);
      return Math.max(minFontSize, optimalSize);
    };
    
    const handleResize = () => {
      const newSize = calculateOptimalFontSize();
      if (newSize && newSize !== calculatedFontSize) {
        setCalculatedFontSize(newSize);
        if (autoResize) {
          setFontSize(newSize);
        }
      }
    };
    
    // Initial calculation
    handleResize();
    
    // Set up resize observer
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    autoResize,
    text,
    linesToDisplay,
    minFontSize,
    maxFontSize,
    step,
    lineHeight,
    calculatedFontSize,
    setFontSize
  ]);
  
  return {
    containerRef,
    calculatedFontSize
  };
}; 