import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Tablet, Laptop, Watch, Headphones, Sparkles, Zap, Shield, Award, RefreshCw, Clock } from 'lucide-react';

const ImmersiveFeatures = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Официальная гарантия Apple',
      description: 'Полная гарантия производителя на все устройства',
      details: '2 года официальной гарантии Apple с возможностью сервисного обслуживания в любом авторизованном центре'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Бесплатная доставка',
      description: 'Доставка в день заказа по Москве',
      details: 'При заказе от 10 000 ₽ доставка бесплатная. В день заказа до 20:00 по Москве и области'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Рассрочка 0%',
      description: 'Покупайте в рассрочку без переплат',
      details: 'Рассрочка на 24 месяца без процентов. Оформление за 5 минут без справок и поручителей'
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: 'Trade-in программа',
      description: 'Обменяйте старое устройство на новое',
      details: 'Доплата до 70 000 ₽ за ваш старый iPhone, iPad или Mac. Мгновенная оценка онлайн'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Готов к выдаче через 1 час',
      description: 'Быстрая подготовка заказа',
      details: 'Большинство товаров готовы к выдаче уже через час после оформления заказа'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Персональный подход',
      description: 'Индивидуальные решения для каждого клиента',
      details: 'Подбор оптимальной конфигурации устройства под ваши задачи с консультацией экспертов'
    }
  ];

  return (
    <section className="relative py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Мы предлагаем не просто технику Apple, а полный сервис с гарантиями и удобными условиями покупки
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110" style={{color: '#00CC00'}}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {benefit.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.details}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-200 p-6">
            <h3 className="text-2xl font-bold mb-3" style={{color: '#00CC00'}}>
              Готовы сделать заказ?
            </h3>
            <p className="text-gray-600 mb-6 text-base">
              Выберите удобный способ покупки и получите свой Apple-девайс уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/catalog"
                onClick={scrollToTop}
                className="text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#0066CC'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0052A3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0066CC'}
              >
                Перейти в каталог
              </Link>
              <Link 
                to="/trade-in"
                onClick={scrollToTop}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
                style={{borderColor: '#0066CC'}}
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#E6F3FF'; e.target.style.borderColor = '#0066CC'}}
                onMouseLeave={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.borderColor = '#D1D5DB'}}
              >
                Узнать о Trade-in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveFeatures;