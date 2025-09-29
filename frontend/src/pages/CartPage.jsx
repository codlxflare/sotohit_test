import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Gift, Truck, Shield, ChevronRight } from 'lucide-react';

const CartPage = ({ cart = [], updateCartItem, removeFromCart }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // Mock cart data if empty
  const mockCartItems = [
    {
      id: 1,
      name: 'iPhone 16 Pro Max',
      price: 124990,
      oldPrice: 134990,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop&crop=center',
      quantity: 1,
      color: 'Титан',
      storage: '256GB',
      warranty: '12 месяцев'
    },
    {
      id: 2,
      name: 'AirPods Pro 2',
      price: 24990,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop&crop=center',
      quantity: 1,
      color: 'Белый',
      warranty: '12 месяцев'
    }
  ];

  const cartItems = cart.length > 0 ? cart : mockCartItems;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal - discount + shipping;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    if (updateCartItem) {
      updateCartItem(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    if (removeFromCart) {
      removeFromCart(itemId);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'apple10') {
      setIsPromoApplied(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-4 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-6" />
            <h2 className="text-2xl font-light text-gray-900 mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-8">Добавьте товары, чтобы продолжить покупки</p>
            <Link 
              to="/catalog"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <span>Перейти к покупкам</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Продолжить покупки
            </Link>
            <h1 className="text-3xl font-light text-gray-900">Корзина</h1>
            <p className="text-gray-600">{cartItems.length} товаров в корзине</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex space-x-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Product Options */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {item.color && (
                          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
                            Цвет: {item.color}
                          </span>
                        )}
                        {item.storage && (
                          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
                            Память: {item.storage}
                          </span>
                        )}
                        {item.warranty && (
                          <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-lg flex items-center space-x-1">
                            <Shield size={12} />
                            <span>Гарантия: {item.warranty}</span>
                          </span>
                        )}
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-gray-900">{formatPrice(item.price)}</span>
                          {item.oldPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              {formatPrice(item.oldPrice)}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Options */}
            <div className="mt-6 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Доставка</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-blue-200 bg-blue-50 rounded-2xl p-4 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Truck className="text-blue-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Курьерская доставка</div>
                      <div className="text-sm text-gray-600">Сегодня до 20:00 • {shipping === 0 ? 'Бесплатно' : '500 ₽'}</div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-2xl p-4 cursor-pointer hover:border-gray-300 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="text-gray-600" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Самовывоз</div>
                      <div className="text-sm text-gray-600">Через 2 часа • Бесплатно</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Итого</h3>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Промокод
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Введите промокод"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isPromoApplied}
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={isPromoApplied}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200 disabled:opacity-50"
                  >
                    {isPromoApplied ? '✓' : 'Применить'}
                  </button>
                </div>
                {isPromoApplied && (
                  <div className="mt-2 flex items-center space-x-1 text-green-600">
                    <Gift size={14} />
                    <span className="text-sm">Промокод применён</span>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары ({cartItems.length})</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Скидка</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium">{shipping === 0 ? 'Бесплатно' : formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Итого</span>
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/order"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-full"
              >
                <button className="w-full btn-premium text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                  Оформить заказ
                </button>
              </Link>

              {/* Additional Options */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Оплата Apple Pay</span>
                  <div className="w-12 h-6 bg-black rounded text-white text-xs flex items-center justify-center">Pay</div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Рассрочка 0%</span>
                  <span className="text-blue-600 font-medium">12 мес.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Trade-in скидка</span>
                  <span className="text-green-600 font-medium">до 50 000 ₽</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Рекомендуем добавить</h3>
              <div className="space-y-4">
                {[
                  { name: 'Apple Care+', price: 9990, description: 'Расширенная гарантия' },
                  { name: 'Чехол MagSafe', price: 4990, description: 'Оригинальный чехол Apple' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-200 cursor-pointer">
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{formatPrice(item.price)}</div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">Добавить</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;