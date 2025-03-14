import React, { createContext, useState, useEffect, useContext } from 'react';

type DisplayContextType = {
  fontSize: number;
  linesToDisplay: number;
  autoResize: boolean;
  enableAnimations: boolean;
  setFontSize: (size: number) => void;
  setLinesToDisplay: (lines: number) => void;
  toggleAutoResize: () => void;
  toggleAnimations: () => void;
};

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export const DisplayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize ? parseInt(savedFontSize, 10) : 24;
  });
  
  const [linesToDisplay, setLinesToDisplay] = useState(() => {
    const savedLines = localStorage.getItem('linesToDisplay');
    return savedLines ? parseInt(savedLines, 10) : 2;
  });
  
  const [autoResize, setAutoResize] = useState(() => {
    const savedAutoResize = localStorage.getItem('autoResize');
    return savedAutoResize ? savedAutoResize === 'true' : true;
  });
  
  const [enableAnimations, setEnableAnimations] = useState(() => {
    const savedAnimations = localStorage.getItem('enableAnimations');
    return savedAnimations ? savedAnimations === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('linesToDisplay', linesToDisplay.toString());
  }, [linesToDisplay]);

  useEffect(() => {
    localStorage.setItem('autoResize', autoResize.toString());
  }, [autoResize]);
  
  useEffect(() => {
    localStorage.setItem('enableAnimations', enableAnimations.toString());
  }, [enableAnimations]);

  const toggleAutoResize = () => {
    setAutoResize(prev => !prev);
  };
  
  const toggleAnimations = () => {
    setEnableAnimations(prev => !prev);
  };

  return (
    <DisplayContext.Provider 
      value={{ 
        fontSize, 
        linesToDisplay, 
        autoResize, 
        enableAnimations,
        setFontSize, 
        setLinesToDisplay, 
        toggleAutoResize,
        toggleAnimations
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = (): DisplayContextType => {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error('useDisplay must be used within a DisplayProvider');
  }
  return context;
}; 