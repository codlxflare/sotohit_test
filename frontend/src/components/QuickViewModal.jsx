import React, { useState } from 'react';
import { X, ShoppingCart, Heart, ZoomIn } from 'lucide-react';

const QuickViewModal = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(0);
  
  // Mock additional images for gallery
  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const memoryOptions = product.specs ? product.specs.filter(spec => 
    spec.includes('GB') || spec.includes('TB')
  ) : ['128GB', '256GB', '512GB'];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Left Side - Images */}
          <div className="flex-1 p-8">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl aspect-square mb-4 overflow-hidden group">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                    <ZoomIn size={18} className="text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-blue-600 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex-1 p-8 bg-gray-50">
            <div className="h-full flex flex-col">
              {/* Product Title */}
              <div className="mb-6">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 font-light">
                  {product.description || 'Премиум качество от Apple'}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-semibold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                
                {/* Installment */}
                <div className="text-sm text-gray-600">
                  или {formatPrice(Math.round(product.price / 12))} в месяц в рассрочку
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Цвет
                  </h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                          selectedColor === index
                            ? 'border-gray-900 ring-2 ring-gray-300 scale-110'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Memory Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Объем памяти
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {memoryOptions.map((memory, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMemory(index)}
                      className={`py-3 px-4 text-sm font-medium rounded-xl border transition-all duration-300 ${
                        selectedMemory === index
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {memory}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              {product.features && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Основные характеристики
                  </h3>
                  <ul className="space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-auto space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>Добавить в корзину</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-xl font-medium transition-colors duration-300">
                    Купить в рассрочку
                  </button>
                  
                  <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                    <Heart size={16} />
                    <span>В избранное</span>
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 text-center">
                <p className="text-sm text-green-600 font-medium">✓ В наличии</p>
                <p className="text-xs text-gray-500 mt-1">Доставка сегодня до 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;