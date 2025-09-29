import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Gift, Star, Percent, Truck, Shield, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';

const PromotionsPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainPromotions = [
    {
      id: 1,
      title: 'Скидка к заказу!',
      subtitle: 'При покупке 2+ аксессуаров',
      description: 'При оформлении заказа и добавления в него 2-х или более АКСЕССУАРОВ - Вы получаете скидку от 300 руб.',
      details: [
        'Чехлы и бампера',
        'Браслеты и ремешки для Apple Watch',
        'Защитные пленки и стекла',
        'Подставки и держатели',
        'Зарядные устройства и USB кабеля'
      ],
      image: '/usb.webp',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      icon: <Percent className="w-8 h-8" />,
      buttonText: 'Перейти к аксессуарам',
      link: '/catalog/accessories'
    },
    {
      id: 2,
      title: 'Наша постоянная Акция',
      subtitle: 'Отзыв = Подарок',
      description: 'Оформите заказ и напишите отзыв на Яндекс - получите подарок на выбор!',
      details: [
        'Чехол для AirPods',
        'Кабель REMAX USB-Lightning',
        'Укажите номер заказа в отзыве',
        'Приезжайте за подарком с чеком'
      ],
      image: '/airpods.webp',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      icon: <Gift className="w-8 h-8" />,
      buttonText: 'Оставить отзыв',
      link: '/reviews'
    }
  ];

  const additionalPromotions = [
    {
      id: 3,
      title: 'Trade-in программа',
      subtitle: 'Обменяйте старое устройство',
      description: 'Получите до 70 000 ₽ за ваш старый iPhone',
      image: '/iphone_17_promo.webp',
      link: '/trade-in',
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'Рассрочка 0%',
      subtitle: 'Без переплат',
      description: 'Купите любое устройство Apple в рассрочку',
      image: '/iphone_16_all_color.webp',
      link: '/installment',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Бесплатная доставка',
      subtitle: 'При заказе от 50 000 ₽',
      description: 'Быстрая и надежная доставка по всей России',
      image: '/apple_mac.webp',
      link: '/delivery',
      icon: <Truck className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Гарантия качества',
      description: 'Все товары сертифицированы'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Быстрая доставка',
      description: 'Доставка в день заказа'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Поддержка 24/7',
      description: 'Поможем с выбором'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Официальный партнер',
      description: 'Авторизованный дилер Apple'
    }
  ];

  return (
    <div className="pt-4 pb-20 bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700 transition-colors duration-200">Главная</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">Акции и скидки</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-full mb-8">
            <Percent className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Акции и скидки
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Специальные предложения и выгодные условия для наших клиентов
          </p>
        </div>

        {/* Main Promotions */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {mainPromotions.map((promo, index) => (
              <div
                key={promo.id}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both` 
                }}
              >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.gradient} opacity-90`}></div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm flex-shrink-0">
                      {promo.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-2">{promo.title}</h2>
                      <p className="text-lg lg:text-xl text-white/90">{promo.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed text-center sm:text-left">
                    {promo.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-base lg:text-lg font-semibold mb-4 text-center sm:text-left">Участвующие товары:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {promo.details.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                          <span className="text-sm text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      to={promo.link}
                      onClick={scrollToTop}
                      className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                    >
                      <span>{promo.buttonText}</span>
                      <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Promotions */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
            Другие акции
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalPromotions.map((promo) => (
                <Link
                  key={promo.id}
                  to={promo.link}
                  onClick={scrollToTop}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                      {promo.icon}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{promo.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{promo.subtitle}</p>
                    <p className="text-xs text-gray-500">{promo.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-8 lg:mb-12 text-center">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl shadow-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-2xl lg:text-3xl font-light mb-4">Готовы воспользоваться акциями?</h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8">
                Выберите подходящее предложение и оформите заказ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Link
                  to="/catalog"
                  onClick={scrollToTop}
                  className="bg-white text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Перейти в каталог</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/trade-in"
                  onClick={scrollToTop}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Trade-in</span>
                  <Star size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
