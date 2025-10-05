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
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 rounded-2xl";
  
  const variantStyles = {
    default: "bg-gray-900 hover:bg-gray-800 text-white",
    secondary: "btn-secondary",
    outline: "btn-secondary"
  };

  return (
    <a
      href={`https://dikidi.net/#widget=${widgetId}`}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </a>
  );
};
