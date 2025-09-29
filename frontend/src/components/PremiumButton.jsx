import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const PremiumButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    relative overflow-hidden font-medium transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-blue-500/30
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
    ${className}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
      text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25
      border border-blue-500/20 backdrop-blur-sm
    `,
    secondary: `
      bg-white/10 backdrop-blur-sm border border-white/20
      text-white hover:bg-white/20
      shadow-lg hover:shadow-xl
    `,
    outline: `
      border-2 border-blue-600 text-blue-600
      hover:bg-blue-600 hover:text-white
      shadow-sm hover:shadow-lg
    `,
    ghost: `
      text-gray-700 hover:bg-gray-100
      hover:text-gray-900
    `,
    destructive: `
      bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800
      text-white shadow-lg hover:shadow-xl
      border border-red-500/20
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-10 py-5 text-xl rounded-3xl'
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${isPressed ? 'scale-95' : ''}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 transform -translate-x-full hover:translate-x-full" />
      
      {/* Content */}
      <div className="relative flex items-center justify-center space-x-2">
        {loading && <Loader2 size={16} className="animate-spin" />}
        <span className="font-medium">{children}</span>
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-inherit overflow-hidden">
        <div className="absolute inset-0 bg-white/20 scale-0 hover:scale-100 transition-transform duration-300 rounded-full" />
      </div>
    </button>
  );
};

export default PremiumButton;
