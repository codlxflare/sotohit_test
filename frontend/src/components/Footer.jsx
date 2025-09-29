import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Mobile Compact Layout */}
        <div className="lg:hidden">
          {/* Company Info - Mobile */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <img src="/logo.png" alt="СОТОХИТ" className="h-6 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <p className="text-gray-300 text-xs mb-3">
              Магазин оригинальной техники Apple с 2011 года
            </p>
            <div className="flex items-center justify-center space-x-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-gray-300 ml-1">5.0 (7032 отзыва)</span>
            </div>
          </div>

          {/* Mobile Links Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-white">Каталог</h3>
              <ul className="space-y-1">
                <li><Link to="/catalog/iphone" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">iPhone</Link></li>
                <li><Link to="/catalog/ipad" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">iPad</Link></li>
                <li><Link to="/catalog/mac" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Mac</Link></li>
                <li><Link to="/catalog/watch" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Apple Watch</Link></li>
                <li><Link to="/catalog/airpods" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">AirPods</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-white">Услуги</h3>
              <ul className="space-y-1">
                <li><Link to="/trade-in" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Trade-In</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Рассрочка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Ремонт</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Доставка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-xs">Самовывоз</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Contact */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Phone size={14} className="text-green-400" />
              <div className="font-semibold text-white text-sm">+7 (499) 288-80-22</div>
            </div>
            <div className="text-gray-300 text-xs">Ежедневно 10:00-20:00</div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="СОТОХИТ" className="h-8 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Магазин оригинальной техники Apple с 2011 года. Гарантия качества и быстрая доставка.
              </p>
              <div className="flex items-center space-x-1 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-300 ml-2">5.0 (7032 отзыва)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Каталог</h3>
              <ul className="space-y-3">
                <li><Link to="/catalog/iphone" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">iPhone</Link></li>
                <li><Link to="/catalog/ipad" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">iPad</Link></li>
                <li><Link to="/catalog/mac" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Mac</Link></li>
                <li><Link to="/catalog/watch" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Apple Watch</Link></li>
                <li><Link to="/catalog/airpods" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">AirPods</Link></li>
                <li><Link to="/catalog" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Аксессуары</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Услуги</h3>
              <ul className="space-y-3">
                <li><Link to="/trade-in" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Trade-In</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Рассрочка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Гарантийный ремонт</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Доставка</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm">Самовывоз</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-green-400" />
                  <div>
                    <div className="font-semibold text-white text-sm">+7 (499) 288-80-22</div>
                    <div className="text-xs text-gray-300">Ежедневно 10:00-20:00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-green-400" />
                  <div className="text-gray-300 text-sm">info@sotohit.ru</div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-green-400 mt-1" />
                  <div>
                    <div className="text-gray-300 text-sm">Москва, ул. Тверская, 1</div>
                    <div className="text-xs text-gray-400">м. Театральная</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-green-400" />
                  <div className="text-gray-300 text-sm">Пн-Вс: 10:00 - 20:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2025 СОТОХИТ. Все права защищены.
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Политика конфиденциальности</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Условия использования</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">Возврат товара</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;