import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Phone, Mail, MapPin, Check, ArrowLeft } from 'lucide-react';

const OrderFormPage = ({ cart = [], clearCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be API call to submit order
    console.log('Order submitted:', { formData, cart });
    setSubmitted(true);
    // Clear cart after successful submission
    if (clearCart) {
      setTimeout(clearCart, 2000);
    }
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-24">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-light text-gray-900 mb-4">Заявка отправлена!</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Спасибо за ваш заказ. Наш менеджер свяжется с вами в течение 30 минут для подтверждения деталей заказа.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 btn-premium text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              <ArrowLeft size={18} />
              <span>На главную</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-24">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span>Вернуться в корзину</span>
          </Link>
        </div>

        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-tight">
          Оформление заявки
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-light text-gray-900 mb-8">Контактные данные</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Имя и фамилия *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline mr-2" />
                    Адрес доставки *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Город, улица, дом, квартира"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий к заказу
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Дополнительные пожелания к заказу"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium text-white py-4 px-8 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
                <ShoppingBag size={20} className="mr-2" />
                Ваш заказ
              </h3>
              
              <div className="space-y-4 mb-6">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Корзина пуста</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded-lg bg-white"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} шт. × {formatPrice(item.price)}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
                      <span>Итого:</span>
                      <span>{formatPrice(totalAmount)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <strong>Бесплатная доставка</strong> по Москве в пределах МКАД
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFormPage;