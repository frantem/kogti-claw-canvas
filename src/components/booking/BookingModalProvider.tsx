import React, { createContext, useContext, useState, useMemo } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ExternalLink } from 'lucide-react';

interface BookingModalOptions {
  widgetId?: string;
  url?: string;
}

interface BookingModalContextType {
  open: (options: BookingModalOptions) => void;
  close: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within BookingModalProvider');
  }
  return context;
};

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = useMemo<BookingModalContextType>(() => ({
    open: ({ widgetId, url }: BookingModalOptions) => {
      const finalUrl = url ?? (widgetId ? `https://dikidi.net/#widget=${widgetId}` : null);
      if (!finalUrl) {
        console.warn('[BookingModal] No URL or widgetId provided');
        return;
      }
      console.info('[BookingModal] Opening modal with URL:', finalUrl);
      setIframeUrl(finalUrl);
      setIsLoading(true);
      setIsOpen(true);
    },
    close: () => {
      console.info('[BookingModal] Closing modal');
      setIsOpen(false);
      setIframeUrl(null);
      setIsLoading(true);
    },
  }), []);

  const handleOpenInNewTab = () => {
    if (iframeUrl) {
      window.open(iframeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <BookingModalContext.Provider value={api}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="p-0 w-[100vw] h-[100vh] md:w-[95vw] md:max-w-4xl md:h-[90vh] overflow-hidden"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-background z-10">
            <h3 className="text-sm font-semibold">Онлайн-запись</h3>
            <div className="flex items-center gap-2">
              {iframeUrl && (
                <button
                  onClick={handleOpenInNewTab}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-accent"
                  title="Открыть в новой вкладке"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span className="hidden sm:inline">Открыть в новой вкладке</span>
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-accent"
                title="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                <p className="text-sm text-muted-foreground">Загрузка...</p>
              </div>
            </div>
          )}

          {/* Iframe */}
          <div className="w-full h-[calc(100%-52px)] relative">
            {iframeUrl && (
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                allow="payment *; clipboard-write; geolocation *; camera *; microphone *;"
                onLoad={handleIframeLoad}
                title="Онлайн-запись"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </BookingModalContext.Provider>
  );
};
