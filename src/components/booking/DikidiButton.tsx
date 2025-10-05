import { ReactNode } from "react";
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
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  
  const variantStyles = {
    default: "bg-gray-900 hover:bg-gray-800 text-white h-12 px-6 py-3 rounded-2xl",
    secondary: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40",
    outline: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40"
  };

  return (
    <a
      href={`https://dikidi.app/#widget=${widgetId}`}
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label="Записаться онлайн"
    >
      {children}
    </a>
  );
};
