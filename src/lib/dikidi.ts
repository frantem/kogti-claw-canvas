/**
 * Dikidi widget utilities
 * Handles all Dikidi booking widget interactions
 */

declare global {
  interface Window {
    DIKIDI?: {
      openWidget: (options: { widget_id: string }) => void;
    };
  }
}

/**
 * Normalize Dikidi URL to use dikidi.net domain
 */
export const normalizeDikidiUrl = (url: string): string => {
  return url.replace('dikidi.ru', 'dikidi.net');
};

/**
 * Extract widget ID from Dikidi URL
 */
export const getWidgetIdFromUrl = (url: string): string | null => {
  const match = url.match(/#widget=(\d+)/);
  return match ? match[1] : null;
};

/**
 * Ensure Dikidi script is loaded and ready
 */
export const ensureDikidiReady = async (): Promise<boolean> => {
  // Check if script is already loaded
  if (window.DIKIDI) {
    return true;
  }

  // Check if script tag exists
  const existingScript = document.querySelector('script[src*="dikidi.net"]');
  
  if (!existingScript) {
    // Script not loaded, load it now
    const script = document.createElement('script');
    script.src = 'https://dikidi.net/assets/js/widget_record/widget2.min.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }

  // Wait for DIKIDI to be available (max 3 seconds)
  let attempts = 0;
  const maxAttempts = 30;
  
  while (!window.DIKIDI && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }

  return !!window.DIKIDI;
};

/**
 * Open Dikidi widget by ID
 * Falls back to opening URL in new tab if widget fails
 */
export const openDikidiWidgetById = async (widgetId: string): Promise<void> => {
  const isReady = await ensureDikidiReady();
  
  if (isReady && window.DIKIDI) {
    try {
      window.DIKIDI.openWidget({ widget_id: widgetId });
      return;
    } catch (error) {
      console.error('Error opening Dikidi widget:', error);
    }
  }
  
  // Fallback to opening URL
  const fallbackUrl = `https://dikidi.net/#widget=${widgetId}`;
  window.location.href = fallbackUrl;
};
