import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Магазин техники
            <span className="block text-blue-600">будущего</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Оригинальная продукция Apple с гарантией. 
            Доставка в день заказа по Москве.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Смотреть каталог</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Связаться с нами
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Оригинальная продукция</h3>
              <p className="text-gray-600">Только сертифицированные товары от Apple</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставка в день заказа до 20:00</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Гарантия 12 месяцев</h3>
              <p className="text-gray-600">Официальная гарантия на все товары</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;