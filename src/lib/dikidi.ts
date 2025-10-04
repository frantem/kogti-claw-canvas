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
export const ensureDikidiReady = async (timeoutMs: number = 10000): Promise<boolean> => {
  // Check if script is already loaded
  if (window.DIKIDI) {
    console.info('[Dikidi] DIKIDI API already available');
    return true;
  }

  // Find existing script (from index.html or previous injection)
  let script = (document.querySelector('script[data-dikidi-widget]') as HTMLScriptElement | null)
    || (document.querySelector('script[src*="dikidi.net/assets/js/widget_record/widget2.min.js"]') as HTMLScriptElement | null);
  
  if (!script) {
    // Script not loaded, load it now
    console.info('[Dikidi] Injecting widget script');
    script = document.createElement('script');
    script.src = 'https://dikidi.net/assets/js/widget_record/widget2.min.js';
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-dikidi-widget', 'true');
    document.head.appendChild(script);
  } else {
    console.info('[Dikidi] Script tag found, waiting for DIKIDI API');
  }

  // Poll for DIKIDI to be available
  const maxAttempts = Math.floor(timeoutMs / 100);
  let attempts = 0;
  
  while (!window.DIKIDI && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }

  const ready = !!window.DIKIDI;
  if (ready) {
    console.info('[Dikidi] DIKIDI widget ready after', attempts * 100, 'ms');
  } else {
    console.warn('[Dikidi] DIKIDI widget failed to initialize in', timeoutMs, 'ms');
  }
  
  return ready;
};

/**
 * Open Dikidi widget by ID
 * Falls back to opening URL in new tab if widget fails
 */
export const openDikidiWidgetById = async (widgetId: string): Promise<void> => {
  console.info('[Dikidi] Attempting to open widget:', widgetId);
  const isReady = await ensureDikidiReady(2000); // 2 second timeout for user interaction
  
  if (isReady && window.DIKIDI) {
    try {
      console.info('[Dikidi] Opening widget modal');
      window.DIKIDI.openWidget({ widget_id: widgetId });
      return;
    } catch (error) {
      console.error('[Dikidi] Error opening widget:', error);
      throw error;
    }
  }
  
  console.warn('[Dikidi] Widget not ready, throwing error for fallback');
  throw new Error('Dikidi widget not ready');
};

export const preloadDikidiWidget = (): void => {
  // Fire-and-forget preload
  ensureDikidiReady().catch(() => {
    // no-op
  });
};
