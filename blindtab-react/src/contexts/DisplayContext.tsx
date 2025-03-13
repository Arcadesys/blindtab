import React, { createContext, useState, useEffect, useContext } from 'react';

type DisplayContextType = {
  fontSize: number;
  linesToDisplay: number;
  autoResize: boolean;
  setFontSize: (size: number) => void;
  setLinesToDisplay: (lines: number) => void;
  toggleAutoResize: () => void;
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

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('linesToDisplay', linesToDisplay.toString());
  }, [linesToDisplay]);

  useEffect(() => {
    localStorage.setItem('autoResize', autoResize.toString());
  }, [autoResize]);

  const toggleAutoResize = () => {
    setAutoResize(prev => !prev);
  };

  return (
    <DisplayContext.Provider 
      value={{ 
        fontSize, 
        linesToDisplay, 
        autoResize, 
        setFontSize, 
        setLinesToDisplay, 
        toggleAutoResize 
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