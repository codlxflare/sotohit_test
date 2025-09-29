import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Smartphone, ArrowRight, CheckCircle, Tablet, Laptop, Watch, Calculator, MapPin, Truck, Star, Shield, Zap } from 'lucide-react';

const TradeInPage = () => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);

  const devices = [
    { id: 'iphone', name: 'iPhone', icon: Smartphone, color: 'blue' },
    { id: 'ipad', name: 'iPad', icon: Tablet, color: 'purple' },
    { id: 'mac', name: 'Mac', icon: Laptop, color: 'green' },
    { id: 'watch', name: 'Apple Watch', icon: Watch, color: 'orange' }
  ];

  const iPhoneModels = [
    { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', baseValue: 70000 },
    { id: 'iphone-15-pro', name: 'iPhone 15 Pro', baseValue: 65000 },
    { id: 'iphone-15', name: 'iPhone 15', baseValue: 55000 },
    { id: 'iphone-14-pro-max', name: 'iPhone 14 Pro Max', baseValue: 55000 },
    { id: 'iphone-14-pro', name: 'iPhone 14 Pro', baseValue: 50000 },
    { id: 'iphone-14', name: 'iPhone 14', baseValue: 40000 },
    { id: 'iphone-13', name: 'iPhone 13', baseValue: 35000 },
    { id: 'iphone-12', name: 'iPhone 12', baseValue: 28000 }
  ];

  const conditions = [
    { 
      id: 'excellent', 
      name: 'Отличное', 
      description: 'Без повреждений, все функции работают', 
      multiplier: 1.0 
    },
    { 
      id: 'good', 
      name: 'Хорошее', 
      description: 'Незначительные царапины, все функции работают', 
      multiplier: 0.85 
    },
    { 
      id: 'fair', 
      name: 'Удовлетворительное', 
      description: 'Видимые повреждения, все функции работают', 
      multiplier: 0.7 
    },
    { 
      id: 'poor', 
      name: 'Плохое', 
      description: 'Серьезные повреждения, некоторые функции не работают', 
      multiplier: 0.4 
    }
  ];

  const calculateValue = (modelId, conditionId) => {
    const model = iPhoneModels.find(m => m.id === modelId);
    const condition = conditions.find(c => c.id === conditionId);
    
    if (model && condition) {
      return Math.round(model.baseValue * condition.multiplier);
    }
    return 0;
  };

  const handleCalculate = () => {
    if (selectedModel && selectedCondition) {
      const value = calculateValue(selectedModel, selectedCondition);
      setEstimatedValue(value);
    }
  };

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Максимальная выгода',
      description: 'Получите до 70 000 ₽ за ваш старый iPhone'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Быстрая оценка',
      description: 'Узнайте стоимость устройства за 2 минуты'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Удобный обмен',
      description: 'Принесите устройство в магазин или закажите курьера'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      title: 'Экологично',
      description: 'Помогите защитить окружающую среду'
    }
  ];

  return (
    <div className="pt-4 pb-20 bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700 transition-colors duration-200">Главная</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">Trade-in</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8">
            <Calculator className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Trade-in программа
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Обменяйте ваше старое устройство Apple на новое и получите максимальную выгоду
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Calculator */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <div className="flex items-center space-x-3 mb-8">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-light text-gray-900">Калькулятор Trade-in</h2>
            </div>

            <div className="space-y-8">
              {/* Device Selection */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Выберите тип устройства
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {devices.map((device) => {
                    const IconComponent = device.icon;
                    const colorClasses = {
                      blue: selectedDevice === device.id 
                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 shadow-lg shadow-blue-200' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50',
                      purple: selectedDevice === device.id 
                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 text-purple-900 shadow-lg shadow-purple-200' 
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50',
                      green: selectedDevice === device.id 
                        ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100 text-green-900 shadow-lg shadow-green-200' 
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50/50',
                      orange: selectedDevice === device.id 
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-900 shadow-lg shadow-orange-200' 
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'
                    };
                    
                    return (
                      <button
                        key={device.id}
                        onClick={() => setSelectedDevice(device.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${colorClasses[device.color]}`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <div className={`p-3 rounded-xl ${selectedDevice === device.id ? 'bg-white/50' : 'bg-gray-100'}`}>
                            <IconComponent size={24} />
                          </div>
                          <div className="font-semibold text-sm">{device.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Model Selection */}
              {selectedDevice === 'iphone' && (
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-4">
                    Выберите модель iPhone
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-300 hover:border-gray-300 bg-white shadow-sm"
                  >
                    <option value="">Выберите модель</option>
                    {iPhoneModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Condition Selection */}
              {selectedModel && (
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-4">
                    Состояние устройства
                  </label>
                  <div className="space-y-3">
                    {conditions.map((condition) => (
                      <button
                        key={condition.id}
                        onClick={() => setSelectedCondition(condition.id)}
                        className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                          selectedCondition === condition.id
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg shadow-blue-200'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                            selectedCondition === condition.id
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedCondition === condition.id && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">{condition.name}</div>
                            <div className="text-sm text-gray-600 leading-relaxed">{condition.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Calculate Button */}
              {selectedModel && selectedCondition && (
                <button
                  onClick={handleCalculate}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <Calculator size={20} />
                  <span>Рассчитать стоимость</span>
                </button>
              )}

              {/* Result */}
              {estimatedValue > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {estimatedValue.toLocaleString()} ₽
                  </div>
                  <div className="text-green-700 font-medium mb-4">
                    Приблизительная стоимость вашего устройства
                  </div>
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center space-x-2 mx-auto">
                    <CheckCircle size={18} />
                    <span>Оформить Trade-in</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">Преимущества Trade-in</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-12">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Как это работает</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">1</div>
                  <span className="text-gray-700">Оцените ваше устройство с помощью калькулятора</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">2</div>
                  <span className="text-gray-700">Принесите устройство в магазин для окончательной оценки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">3</div>
                  <span className="text-gray-700">Получите скидку на новое устройство Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-light mb-4">Готовы обменять ваше устройство?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Посетите наш магазин или закажите курьера для оценки
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-3 group shadow-lg">
                <MapPin size={20} />
                <span>Найти магазин</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center space-x-3 group shadow-lg">
                <Truck size={20} />
                <span>Заказать курьера</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeInPage;