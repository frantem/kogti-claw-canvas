import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

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
  const timerRef = useRef<NodeJS.Timeout>();
  
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-gray-900 hover:bg-gray-800 text-white h-12 px-6 py-3 rounded-2xl",
    secondary: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40",
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40"
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = `https://dikidi.net/#widget=${widgetId}`;
    
    timerRef.current = setTimeout(() => {
      window.open(url, '_blank');
    }, 700);

    const checkOverlay = setInterval(() => {
      const overlay = document.querySelector('[class*="dikidi"]');
      if (overlay) {
        clearTimeout(timerRef.current);
        clearInterval(checkOverlay);
      }
    }, 50);

    setTimeout(() => clearInterval(checkOverlay), 800);
  };

  return (
    <a
      href={`https://dikidi.net/#widget=${widgetId}`}
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
