import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  User,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton';
import PremiumCard from '../components/PremiumCard';
import PremiumInput from '../components/PremiumInput';
import PremiumBadge from '../components/PremiumBadge';

const EnhancedOrderFormPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Delivery
    deliveryMethod: 'courier',
    address: '',
    city: '',
    postalCode: '',
    deliveryDate: '',
    deliveryTime: '',
    
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    
    // Additional
    comments: '',
    subscribeNewsletter: true,
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = 'Имя обязательно';
        if (!formData.lastName) newErrors.lastName = 'Фамилия обязательна';
        if (!formData.email) newErrors.email = 'Email обязателен';
        if (!formData.phone) newErrors.phone = 'Телефон обязателен';
        break;
      case 2:
        if (!formData.address) newErrors.address = 'Адрес обязателен';
        if (!formData.city) newErrors.city = 'Город обязателен';
        break;
      case 3:
        if (!formData.cardNumber) newErrors.cardNumber = 'Номер карты обязателен';
        if (!formData.expiryDate) newErrors.expiryDate = 'Срок действия обязателен';
        if (!formData.cvv) newErrors.cvv = 'CVV обязателен';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(3) || !formData.agreeTerms) {
      setErrors({ agreeTerms: 'Необходимо согласиться с условиями' });
      return;
    }

    setIsSubmitting(true);
    
    // Симуляция отправки заказа
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    clearCart();
  };

  const steps = [
    { id: 1, title: 'Личные данные', icon: User },
    { id: 2, title: 'Доставка', icon: Truck },
    { id: 3, title: 'Оплата', icon: CreditCard }
  ];

  if (isSuccess) {
    return (
      <div className="pt-4 pb-20 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PremiumCard variant="glass" className="p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-4xl font-light text-gray-900 mb-4">Заказ оформлен!</h1>
            <p className="text-gray-600 mb-8">
              Спасибо за покупку! Мы отправили подтверждение на вашу почту.
            </p>
            <div className="space-y-4">
              <PremiumButton size="lg" onClick={() => navigate('/')}>
                Вернуться в магазин
              </PremiumButton>
              <PremiumButton variant="outline" size="lg" onClick={() => navigate('/catalog')}>
                Продолжить покупки
              </PremiumButton>
            </div>
          </PremiumCard>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Назад
          </button>
          <h1 className="text-4xl font-light text-gray-900 mb-2">
            Оформление заказа
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <PremiumCard variant="default" className="p-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive ? 'bg-blue-600 text-white scale-110' : 
                          isCompleted ? 'bg-green-600 text-white' : 
                          'bg-gray-200 text-gray-500'}
                      `}>
                        {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                      </div>
                      <div className="ml-3">
                        <div className={`text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                          {step.title}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-200'}`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Личные данные</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PremiumInput
                      label="Имя"
                      placeholder="Введите ваше имя"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      error={errors.firstName}
                      icon={<User size={20} />}
                    />
                    
                    <PremiumInput
                      label="Фамилия"
                      placeholder="Введите вашу фамилию"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      error={errors.lastName}
                    />
                    
                    <PremiumInput
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      icon={<Mail size={20} />}
                    />
                    
                    <PremiumInput
                      label="Телефон"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                      icon={<Phone size={20} />}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Delivery */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Доставка</h2>
                  
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleInputChange('deliveryMethod', 'courier')}
                        className={`flex-1 p-4 rounded-2xl border-2 transition-all duration-200 ${
                          formData.deliveryMethod === 'courier' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Truck size={24} className="mb-2 text-blue-600" />
                        <div className="font-medium">Курьерская доставка</div>
                        <div className="text-sm text-gray-500">Бесплатно от 50 000 ₽</div>
                      </button>
                      
                      <button
                        onClick={() => handleInputChange('deliveryMethod', 'pickup')}
                        className={`flex-1 p-4 rounded-2xl border-2 transition-all duration-200 ${
                          formData.deliveryMethod === 'pickup' 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <MapPin size={24} className="mb-2 text-green-600" />
                        <div className="font-medium">Самовывоз</div>
                        <div className="text-sm text-gray-500">Бесплатно</div>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PremiumInput
                      label="Адрес"
                      placeholder="Введите адрес доставки"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      error={errors.address}
                      icon={<MapPin size={20} />}
                    />
                    
                    <PremiumInput
                      label="Город"
                      placeholder="Москва"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      error={errors.city}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Оплата</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PremiumInput
                      label="Номер карты"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      error={errors.cardNumber}
                      icon={<CreditCard size={20} />}
                    />
                    
                    <PremiumInput
                      label="Срок действия"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      error={errors.expiryDate}
                    />
                    
                    <PremiumInput
                      label="CVV"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      error={errors.cvv}
                    />
                    
                    <PremiumInput
                      label="Имя на карте"
                      placeholder="IVAN IVANOV"
                      value={formData.cardholderName}
                      onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                      Я согласен с{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        условиями использования
                      </a>{' '}
                      и{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="text-sm text-red-600">{errors.agreeTerms}</p>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <PremiumButton
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    Назад
                  </PremiumButton>
                )}
                
                <div className="ml-auto">
                  {currentStep < 3 ? (
                    <PremiumButton onClick={handleNext}>
                      Далее
                    </PremiumButton>
                  ) : (
                    <PremiumButton
                      size="lg"
                      loading={isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? 'Оформляем заказ...' : 'Оформить заказ'}
                    </PremiumButton>
                  )}
                </div>
              </div>
            </PremiumCard>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <PremiumCard variant="gradient" className="p-6 sticky top-32">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ваш заказ</h3>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.quantity} × {formatPrice(item.price)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Итого</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield size={16} className="mr-3 text-green-500" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-3 text-blue-500" />
                  <span>Быстрая доставка</span>
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOrderFormPage;


