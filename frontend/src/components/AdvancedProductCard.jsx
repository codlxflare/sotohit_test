import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, Star, Zap, Award } from 'lucide-react';

const AdvancedProductCard = ({ product, onAddToCart, onToggleFavorite, onQuickView, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const getBadgeConfig = (badge) => {
    switch (badge) {
      case 'Новинка':
        return { 
          bg: 'bg-gradient-to-r from-blue-500 to-blue-600', 
          icon: <Zap size={12} />,
          pulse: true 
        };
      case 'Хит продаж':
        return { 
          bg: 'bg-gradient-to-r from-green-500 to-green-600', 
          icon: <Award size={12} />,
          pulse: false 
        };
      default:
        return { 
          bg: 'bg-gradient-to-r from-orange-500 to-orange-600', 
          icon: <Star size={12} />,
          pulse: false 
        };
    }
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex">
          {/* Image Section */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4">
                {(() => {
                  const badgeConfig = getBadgeConfig(product.badge);
                  return (
                    <div className={`${badgeConfig.bg} text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg ${badgeConfig.pulse ? 'animate-pulse' : ''}`}>
                      {badgeConfig.icon}
                      <span>{product.badge}</span>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => onQuickView && onQuickView()}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <Eye size={18} className="text-white" />
                </button>
                <button 
                  onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <Heart 
                    size={18} 
                    className={`${product.isFavorite ? 'text-red-400 fill-red-400' : 'text-white'}`} 
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <Link 
                to={`/product/${product.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {product.name}
                </h3>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Color Options */}
              {product.colors && (
                <div className="flex space-x-2 mb-4">
                  {product.colors.slice(0, 5).map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === index ? 'border-gray-400 scale-110' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}

              {/* Specs */}
              {product.specs && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.slice(0, 3).map((spec, index) => (
                    <span 
                      key={index} 
                      className="text-sm bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Price and Actions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-400 line-through ml-3">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
                {product.discount && (
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg font-semibold">
                    -{product.discount}%
                  </div>
                )}
              </div>

              <button
                onClick={() => onAddToCart && onAddToCart(product)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart size={18} />
                <span>Добавить в корзину</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:scale-[1.02] h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Link to={`/product/${product.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            {(() => {
              const badgeConfig = getBadgeConfig(product.badge);
              return (
                <div className={`${badgeConfig.bg} text-white px-3 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg backdrop-blur-sm ${badgeConfig.pulse ? 'animate-pulse' : ''}`}>
                  {badgeConfig.icon}
                  <span>{product.badge}</span>
                </div>
              );
            })()}
          </div>
        )}

        {/* Floating Actions */}
        <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'}`}>
          <button
            onClick={() => onQuickView && onQuickView()}
            className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <Eye size={16} className="text-gray-600" />
          </button>
          
          <button 
            onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
            className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <Heart 
              size={16} 
              className={`transition-colors duration-200 ${product.isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            -{product.discount}%
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-medium text-gray-700">4.8</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Product Name */}
        <Link 
          to={`/product/${product.id}`} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Color Selection */}
        {product.colors && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs text-gray-500">Цвет:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    selectedColor === index ? 'border-gray-400 ring-2 ring-gray-200' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 4 && (
                <div className="w-5 h-5 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-xs text-gray-500">+</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Specs */}
        {product.specs && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.specs.slice(0, 2).map((spec, index) => (
              <span 
                key={index} 
                className="text-xs bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <div className="text-sm text-gray-400 line-through">
                  {formatPrice(product.oldPrice)}
                </div>
              )}
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            или {formatPrice(Math.round(product.price / 12))} × 12 мес.
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart && onAddToCart(product)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl mt-auto"
        >
          <ShoppingCart size={16} />
          <span>В корзину</span>
        </button>

        {/* Stock Status */}
        <div className="mt-3 text-center">
          <span className="text-xs text-green-600 font-medium flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>В наличии</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedProductCard;