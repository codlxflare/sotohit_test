import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      title: 'iPhone 17 Pro',
      subtitle: 'Титан. Настолько прочный. Настолько лёгкий. Настолько Pro.',
      productId: 3,
      image: '/iphone_17_pro_all_colors.webp',
      gradient: 'from-slate-900 via-slate-800 to-slate-900',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'MacBook Pro',
      subtitle: 'Сверхмощная производительность. Сверхдлительное время работы.',
      productId: 26,
      image: '/apple_mac.webp',
      gradient: 'from-gray-100 via-white to-gray-50',
      textColor: 'text-gray-900'
    },
    {
      id: 3,
      title: 'iPad Pro',
      subtitle: 'Невероятно тонкий. Невозможно мощный.',
      productId: 15,
      image: '/ipad_new_2022.webp',
      gradient: 'from-blue-50 via-white to-blue-50',
      textColor: 'text-gray-900'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentHero.gradient} transition-all duration-1000 ease-in-out`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${currentHero.image})`,
            filter: 'blur(1px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-light ${currentHero.textColor} mb-6 transition-all duration-1000 ease-in-out transform translate-y-0 opacity-100 tracking-tight`}>
              {currentHero.title}
            </h1>
            
            <p className={`text-lg md:text-xl ${currentHero.textColor} opacity-90 mb-12 font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-in-out delay-300`}>
              {currentHero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to={`/product/${currentHero.productId}`}
                onClick={scrollToTop}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20 flex items-center space-x-2 min-w-[160px] justify-center"
              >
                <span>Подробнее</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <button className="group bg-transparent border border-white/40 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all duration-300 min-w-[160px] hover:border-white/60">
                <span>Купить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-white/70 text-sm font-light tracking-wider">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;