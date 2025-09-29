import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Gift, Star, ArrowRight, Percent, RefreshCw } from 'lucide-react';

const PromotionsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    // Real live countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Reset timer to a new promotion when it reaches zero
                return {
                  days: 3,
                  hours: 12,
                  minutes: 30,
                  seconds: 0
                };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      id: 1,
      title: 'Trade-in iPhone',
      subtitle: 'Получите до 70 000 ₽ за ваш старый iPhone',
      description: 'Обменяйте свой iPhone на новую модель и получите максимальную выгоду',
      buttonText: 'Узнать стоимость',
      link: '/trade-in',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      icon: <Gift className="w-8 h-8" />,
      image: '/iphone_17_promo.webp'
    },
    {
      id: 2,
      title: 'Рассрочка 0%',
      subtitle: 'Без переплат и скрытых комиссий',
      description: 'Купите любое устройство Apple в рассрочку на выгодных условиях',
      buttonText: 'Подробнее',
      link: '/installment',
      gradient: 'from-purple-600 via-purple-700 to-purple-800',
      icon: <Star className="w-8 h-8" />,
      image: '/iphone_16_all_color.webp'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse top-20 right-20" />
        <div className="absolute w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000 bottom-20 left-20" />
        <div className="absolute w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500 top-1/2 left-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm text-red-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-red-500/30">
            <Percent size={16} />
            <span>Специальные предложения</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Акции и предложения
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Не упустите выгодные предложения
          </p>
        </div>

        {/* Flash Sale Timer - Enhanced */}
        <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-8 md:p-12 mb-20 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Clock className="w-8 h-8 mr-3 animate-pulse" />
                <span className="text-xl font-medium tracking-wider">Скидки до 25%</span>
              </div>
              <h3 className="text-3xl lg:text-5xl font-light mb-4 tracking-tight">
                Флэш-распродажа Apple
              </h3>
              <p className="text-white/90 font-light text-lg">
                Ограниченное предложение на избранные товары
              </p>
            </div>

            {/* Live Countdown Timer */}
            <div className="flex space-x-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 min-w-[80px] glassmorphism border border-white/40">
                    <div className="text-3xl font-light tabular-nums transition-all duration-1000">
                      {value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm mt-3 text-white/80 capitalize font-light">
                    {unit === 'days' ? 'дней' : 
                     unit === 'hours' ? 'часов' : 
                     unit === 'minutes' ? 'минут' : 'секунд'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promotion Cards - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {promotions.map((promo, index) => (
            <Link
              key={promo.id}
              to={promo.link}
              onClick={scrollToTop}
              className="group cursor-pointer"
              style={{ 
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className={`relative bg-gradient-to-br ${promo.gradient} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] min-h-[400px] card-3d-hover border border-white/10`}>
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full transform translate-x-20 -translate-y-20 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full transform -translate-x-16 translate-y-16 blur-xl"></div>
                  <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
                  <div>
                    {/* Icon */}
                    <div className="mb-8">
                      <div className="inline-flex p-6 glassmorphism rounded-3xl border border-white/30">
                        {promo.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-4xl font-light mb-4 tracking-tight">{promo.title}</h3>
                    <p className="text-2xl font-light mb-6 text-white/95 leading-tight">{promo.subtitle}</p>
                    <p className="text-white/85 leading-relaxed text-lg">{promo.description}</p>
                  </div>

                  {/* CTA Button - Make it functional */}
                  <div className="mt-10">
                    <div className="inline-flex items-center space-x-3 group/btn glassmorphism border border-white/40 text-white px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/30 hover:scale-105">
                      <span>{promo.buttonText}</span>
                      <ArrowRight 
                        size={20} 
                        className="transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 text-gray-600 mb-6">
            <span className="text-lg">Подпишитесь на рассылку, чтобы не пропустить новые акции</span>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-r-full font-medium text-lg transition-colors duration-300">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;