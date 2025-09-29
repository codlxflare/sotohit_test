import React from 'react';
import { Star, Zap, Award, TrendingUp, Shield, Gift } from 'lucide-react';

const PremiumBadge = ({ 
  variant = 'default',
  size = 'md',
  icon,
  children,
  className = '',
  animated = false,
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center font-semibold transition-all duration-300
    ${animated ? 'animate-pulse' : ''}
    ${className}
  `;

  const variants = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200',
    primary: 'bg-blue-100 text-blue-800 border border-blue-200',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    danger: 'bg-red-100 text-red-800 border border-red-200',
    new: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg',
    hot: 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg',
    premium: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg',
    discount: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg'
  };

  const sizes = {
    sm: 'px-1.5 py-0.5 text-xs rounded-md',
    md: 'px-3 py-1.5 text-sm rounded-lg',
    lg: 'px-4 py-2 text-base rounded-xl'
  };

  const getIcon = () => {
    if (icon) return icon;
    
    switch (variant) {
      case 'new':
        return <Zap size={14} className="mr-1" />;
      case 'hot':
        return <TrendingUp size={14} className="mr-1" />;
      case 'premium':
        return <Star size={14} className="mr-1" />;
      case 'discount':
        return <Gift size={14} className="mr-1" />;
      case 'success':
        return <Shield size={14} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
      `}
      {...props}
    >
      {getIcon()}
      <span>{children}</span>
    </span>
  );
};

export default PremiumBadge;
