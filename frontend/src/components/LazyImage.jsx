import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <>
          {!hasError ? (
            <img
              src={src}
              alt={alt}
              onLoad={handleLoad}
              onError={handleError}
              className={`transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              {...props}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Изображение недоступно</div>
            </div>
          )}
        </>
      )}
      
      {!isLoaded && isInView && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;


