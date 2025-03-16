/**
 * Utility for development-only features
 */

// Check if we're in development mode
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

// Initialize dev tools state from localStorage
let devToolsEnabled = false;
try {
  const storedValue = localStorage.getItem('devToolsEnabled');
  devToolsEnabled = storedValue === 'true';
} catch (error) {
  // Ignore localStorage errors
  console.warn('Failed to access localStorage for dev tools state');
}

// Function to toggle dev tools
export const toggleDevTools = (): void => {
  devToolsEnabled = !devToolsEnabled;
  try {
    localStorage.setItem('devToolsEnabled', devToolsEnabled.toString());
    console.log(`Dev tools ${devToolsEnabled ? 'enabled' : 'disabled'}`);
  } catch (error) {
    console.warn('Failed to save dev tools state to localStorage');
  }
};

// Check if dev tools should be shown
export const shouldShowDevTools = (): boolean => {
  // Always show in development
  if (isDevelopment()) {
    return true;
  }
  
  // Check if manually enabled in production
  return devToolsEnabled;
};

// Secret key sequence to enable dev tools in production
// Default: Press 'd', 'e', 'v' in sequence
const DEFAULT_DEV_SEQUENCE = ['d', 'e', 'v'];
let currentSequence: string[] = [];

export const checkDevSequence = (key: string): boolean => {
  // Add the key to the current sequence
  currentSequence.push(key.toLowerCase());
  
  // Only keep the last N keys (where N is the length of the dev sequence)
  if (currentSequence.length > DEFAULT_DEV_SEQUENCE.length) {
    currentSequence.shift();
  }
  
  // Check if the current sequence matches the dev sequence
  const isMatch = currentSequence.join('') === DEFAULT_DEV_SEQUENCE.join('');
  
  // If it matches, toggle dev tools
  if (isMatch) {
    toggleDevTools();
    currentSequence = []; // Reset the sequence
    return true;
  }
  
  return false;
}; 