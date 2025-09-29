import { useState, useEffect, ReactNode } from 'react';

interface DeferredSectionProps {
  children: ReactNode;
  delay?: number;
}

const DeferredSection = ({ children, delay = 100 }: DeferredSectionProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldRender) {
    return (
      <div className="min-h-[200px] bg-gray-100 animate-pulse" />
    );
  }

  return <>{children}</>;
};

export default DeferredSection;