import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dikidi?: {
      open: (widgetId: string) => void;
    };
  }
}

interface DikidiButtonProps {
  widgetId: string;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

export const DikidiButton = ({ 
  widgetId, 
  children = "Записаться",
  className,
  variant = "default"
}: DikidiButtonProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkDikidiReady = () => {
      if (window.dikidi && typeof window.dikidi.open === 'function') {
        setIsReady(true);
        return true;
      }
      return false;
    };

    if (checkDikidiReady()) return;

    const interval = setInterval(() => {
      if (checkDikidiReady()) {
        clearInterval(interval);
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsReady(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-gray-900 hover:bg-gray-800 text-white h-12 px-6 py-3 rounded-2xl",
    secondary: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40",
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40"
  };

  const handleClick = () => {
    if (window.dikidi && typeof window.dikidi.open === 'function') {
      window.dikidi.open(widgetId);
    }
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={handleClick}
      disabled={!isReady}
      aria-label="Записаться онлайн"
    >
      {children}
    </button>
  );
};
