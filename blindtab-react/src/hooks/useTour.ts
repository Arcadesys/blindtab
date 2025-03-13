import { useState, useEffect } from 'react';

interface UseTourOptions {
  tourId: string;
  autoStart?: boolean;
}

export const useTour = ({ tourId, autoStart = true }: UseTourOptions) => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(false);

  // Check if the user has already completed the tour
  useEffect(() => {
    const completedTours = JSON.parse(localStorage.getItem('completedTours') || '{}');
    const hasCompleted = completedTours[tourId] === true;
    setHasCompletedTour(hasCompleted);
    
    // Auto-start the tour if it hasn't been completed and autoStart is true
    if (autoStart && !hasCompleted) {
      setIsTourOpen(true);
    }
  }, [tourId, autoStart]);

  const startTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  const completeTour = () => {
    setIsTourOpen(false);
    setHasCompletedTour(true);
    
    // Save to localStorage
    const completedTours = JSON.parse(localStorage.getItem('completedTours') || '{}');
    completedTours[tourId] = true;
    localStorage.setItem('completedTours', JSON.stringify(completedTours));
  };

  const resetTour = () => {
    setHasCompletedTour(false);
    
    // Remove from localStorage
    const completedTours = JSON.parse(localStorage.getItem('completedTours') || '{}');
    delete completedTours[tourId];
    localStorage.setItem('completedTours', JSON.stringify(completedTours));
  };

  return {
    isTourOpen,
    hasCompletedTour,
    startTour,
    closeTour,
    completeTour,
    resetTour
  };
};

export default useTour; 