import { useState, useEffect, useRef, ReactNode } from 'react';

interface DeferredSectionProps {
  children: ReactNode;
  delay?: number;
}

const DeferredSection = ({ children, delay = 100 }: DeferredSectionProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay, shouldRender]);

  if (!shouldRender) {
    return (
      <div ref={ref} className="min-h-[200px] bg-muted/20" />
    );
  }

  return <>{children}</>;
};

export default DeferredSection;