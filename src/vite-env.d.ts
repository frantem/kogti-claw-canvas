/// <reference types="vite/client" />

interface DikidiWidget {
  open: (widgetId: string) => void;
}

declare global {
  interface Window {
    dikidi?: DikidiWidget;
  }
}

export {};
