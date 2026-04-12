import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: boolean;
  wrapperClassName?: string;
  imgClassName?: string;
  eager?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const LazyImage = ({
  src,
  alt,
  className,
  style,
  placeholder = true,
  wrapperClassName,
  imgClassName,
  eager = false,
  fetchPriority = 'auto'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(eager);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return;
    
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  return (
    <div 
      ref={containerRef} 
      className={wrapperClassName || className || ''} 
      style={style}
    >
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${imgClassName || className || ''} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyImage;