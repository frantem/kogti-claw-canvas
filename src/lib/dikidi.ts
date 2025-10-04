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
  }

  // If script is loading, wait once for onload
  if (script && !script.dataset.loaded) {
    await new Promise<void>((resolve) => {
      // Some browsers expose readyState
      if ((script as any).readyState === 'complete') {
        resolve();
      } else {
        script!.addEventListener('load', () => {
          script!.dataset.loaded = 'true';
          resolve();
        }, { once: true });
        script!.addEventListener('error', () => {
          resolve();
        }, { once: true });
      }
    });
  }

  // Wait for DIKIDI to be available (max ~10 seconds)
  let attempts = 0;
  const maxAttempts = 100;
  
  while (!window.DIKIDI && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }

  const ready = !!window.DIKIDI;
  if (ready) {
    console.info('[Dikidi] DIKIDI widget ready');
  } else {
    console.warn('[Dikidi] DIKIDI widget failed to initialize in time');
  }
  
  return ready;
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
      throw error;
    }
  }
  
  throw new Error('Dikidi widget not ready');
};

export const preloadDikidiWidget = (): void => {
  // Fire-and-forget preload
  ensureDikidiReady().catch(() => {
    // no-op
  });
};
