import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const SwipeGallery = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const galleryRef = useRef();

  // Минимальное расстояние для свайпа
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') setIsFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Основное изображение */}
        <div 
          className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden group cursor-zoom-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => setIsFullscreen(true)}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Кнопка увеличения */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
              <ZoomIn size={20} className="text-gray-700" />
            </div>
          </div>

          {/* Навигационные стрелки */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Миниатюры */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index
                    ? 'border-blue-500 ring-2 ring-blue-200 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover p-1"
                />
              </button>
            ))}
          </div>
        )}

        {/* Индикаторы */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Полноэкранный режим */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[currentIndex]}
              alt={`Fullscreen ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
          
          {/* Счетчик изображений */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default SwipeGallery;
