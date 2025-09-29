import React, { useState, useEffect } from 'react';

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показать прогресс-бар при загрузке
    setIsVisible(true);
    
    // Симуляция прогресса загрузки
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
};

export default LoadingProgress;


