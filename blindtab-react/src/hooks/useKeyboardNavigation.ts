import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyMap {
  [key: string]: KeyHandler;
}

interface KeyboardNavigationOptions {
  globalKeys?: boolean;
  preventDefaultKeys?: string[];
}

export const useKeyboardNavigation = (
  keyMap: KeyMap,
  options: KeyboardNavigationOptions = {}
) => {
  const { 
    globalKeys = false,
    preventDefaultKeys = []
  } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Skip if we're in an input, textarea, or contentEditable element
      // unless globalKeys is true
      if (!globalKeys) {
        const target = event.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          target.isContentEditable
        ) {
          return;
        }
      }

      const key = event.key.toLowerCase();
      
      // Handle keyboard shortcuts with modifiers
      let shortcutKey = key;
      if (event.ctrlKey) shortcutKey = `ctrl+${shortcutKey}`;
      if (event.altKey) shortcutKey = `alt+${shortcutKey}`;
      if (event.shiftKey) shortcutKey = `shift+${shortcutKey}`;
      if (event.metaKey) shortcutKey = `meta+${shortcutKey}`;

      // Check if we have a handler for this key
      const handler = keyMap[shortcutKey] || keyMap[key];
      
      if (handler) {
        // Prevent default for specified keys
        if (
          preventDefaultKeys.includes(key) || 
          preventDefaultKeys.includes(shortcutKey)
        ) {
          event.preventDefault();
        }
        
        handler(event);
      }
    },
    [keyMap, globalKeys, preventDefaultKeys]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Return nothing as this hook just sets up listeners
  return null;
};

// Helper function to announce messages to screen readers
export const announceToScreenReader = (message: string) => {
  // Create or get the aria-live region
  let ariaLiveRegion = document.getElementById('aria-live-announcer');
  
  if (!ariaLiveRegion) {
    ariaLiveRegion = document.createElement('div');
    ariaLiveRegion.id = 'aria-live-announcer';
    ariaLiveRegion.setAttribute('aria-live', 'assertive');
    ariaLiveRegion.setAttribute('aria-atomic', 'true');
    ariaLiveRegion.className = 'sr-only'; // Screen reader only
    document.body.appendChild(ariaLiveRegion);
  }
  
  // Update the content to trigger announcement
  ariaLiveRegion.textContent = message;
  
  // Clear after a delay to allow for repeated announcements of the same message
  setTimeout(() => {
    ariaLiveRegion.textContent = '';
  }, 1000);
}; 