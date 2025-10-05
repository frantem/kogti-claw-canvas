import { useState, useRef, useEffect } from 'react';
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string; // truthy to show skeleton while loading
  wrapperClassName?: string;
  imgClassName?: string;
}
const LazyImage = ({
  src,
  alt,
  className,
  style,
  placeholder,
  wrapperClassName,
  imgClassName
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div ref={containerRef} className={`${wrapperClassName ?? className ?? ''} relative`} style={style} aria-busy={!isLoaded}>
      {isInView && <>
          {!isLoaded && placeholder && <div className="absolute inset-0 bg-muted/20 animate-pulse" />}
          
        </>}
    </div>;
};
export default LazyImage;