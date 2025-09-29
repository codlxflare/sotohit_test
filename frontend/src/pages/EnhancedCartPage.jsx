import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  Shield,
  Gift,
  Heart,
  Share2
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import PremiumCard from '../components/PremiumCard';
import PremiumBadge from '../components/PremiumBadge';
import LazyImage from '../components/LazyImage';

const EnhancedCartPage = ({ cart, updateCartItem, removeFromCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartItem(itemId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Симуляция процесса оформления заказа
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsCheckingOut(false);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-4 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PremiumCard variant="glass" className="text-center py-16">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={48} className="text-blue-600" />
            </div>
            <h1 className="text-3xl font-light text-gray-900 mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Добавьте товары в корзину, чтобы продолжить покупки
            </p>
            <Link to="/catalog">
              <PremiumButton size="lg" className="mx-auto">
                Перейти в каталог
              </PremiumButton>
            </Link>
          </PremiumCard>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/catalog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Продолжить покупки
          </Link>
          <h1 className="text-4xl font-light text-gray-900 mb-2">
            Корзина
          </h1>
          <p className="text-gray-600">
            {getTotalItems()} товаров на сумму {formatPrice(getTotalPrice())}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <PremiumCard key={item.id} variant="default" className="p-6">
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                    <LazyImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    
                    {/* Badges */}
                    <div className="flex items-center space-x-2 mb-3">
                      {item.badge && (
                        <PremiumBadge variant="new" size="sm">
                          {item.badge}
                        </PremiumBadge>
                      )}
                      {item.discount && (
                        <PremiumBadge variant="discount" size="sm">
                          -{item.discount}%
                        </PremiumBadge>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(item.price)}
                      </span>
                      {item.oldPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(item.oldPrice)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                          <Heart size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-200">
                          <Share2 size={18} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    {item.quantity > 1 && (
                      <div className="text-sm text-gray-500">
                        {formatPrice(item.price)} × {item.quantity}
                      </div>
                    )}
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <PremiumCard variant="gradient" className="p-6 sticky top-32">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Итого</h2>
              
              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Товары ({getTotalItems()})</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Доставка</span>
                  <span className="text-green-600 font-medium">Бесплатно</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>К оплате</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield size={16} className="mr-3 text-green-500" />
                  <span>Официальная гарантия</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Truck size={16} className="mr-3 text-blue-500" />
                  <span>Быстрая доставка</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CreditCard size={16} className="mr-3 text-purple-500" />
                  <span>Безопасная оплата</span>
                </div>
              </div>

              {/* Checkout Button */}
              <PremiumButton
                size="lg"
                className="w-full mb-4"
                loading={isCheckingOut}
                onClick={handleCheckout}
              >
                {isCheckingOut ? 'Оформляем заказ...' : 'Оформить заказ'}
              </PremiumButton>

              {/* Additional Options */}
              <div className="space-y-3">
                <PremiumButton
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <Gift size={18} className="mr-2" />
                  Рассрочка 0%
                </PremiumButton>
                
                <PremiumButton
                  variant="ghost"
                  size="md"
                  className="w-full"
                >
                  <Heart size={18} className="mr-2" />
                  Сохранить в избранное
                </PremiumButton>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCartPage;


