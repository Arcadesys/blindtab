/**
 * Utility functions for accessibility features
 */

// Create a hidden live region for screen reader announcements
let liveRegion: HTMLElement | null = null;

function createLiveRegion() {
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.padding = '0';
    liveRegion.style.margin = '-1px';
    liveRegion.style.overflow = 'hidden';
    liveRegion.style.clip = 'rect(0, 0, 0, 0)';
    liveRegion.style.whiteSpace = 'nowrap';
    liveRegion.style.border = '0';
    document.body.appendChild(liveRegion);
  }
  return liveRegion;
}

/**
 * Announce a message to screen readers
 * @param message The message to announce
 */
export function announceToScreenReader(message: string) {
  const region = createLiveRegion();
  region.textContent = message;
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility() {
  createLiveRegion();
} 