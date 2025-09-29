import React, { useState } from 'react';
import { ChevronRight, Star, Heart, Eye } from 'lucide-react';

const PremiumCard = ({ 
  children, 
  variant = 'default',
  hoverable = true,
  className = '',
  onClick,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative overflow-hidden transition-all duration-500 ease-out
    ${hoverable ? 'cursor-pointer' : ''}
    ${className}
  `;

  const variants = {
    default: `
      bg-white/98 backdrop-blur-xl border border-gray-200/30
      shadow-lg hover:shadow-2xl hover:shadow-blue-500/20
      hover:border-blue-200/50 hover:bg-white
    `,
    glass: `
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-xl hover:shadow-2xl hover:shadow-blue-500/20
      hover:bg-white/15
    `,
    gradient: `
      bg-gradient-to-br from-blue-50 to-purple-50
      border border-blue-200/30
      shadow-lg hover:shadow-xl hover:shadow-blue-500/20
      hover:from-blue-100 hover:to-purple-100
    `,
    dark: `
      bg-gray-900/95 backdrop-blur-xl border border-gray-700/50
      shadow-xl hover:shadow-2xl hover:shadow-blue-500/20
      hover:border-blue-500/30
    `
  };

  const hoverEffects = hoverable ? `
    hover:scale-[1.02] hover:-translate-y-1
    group
  ` : '';

  return (
    <div
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${hoverEffects}
        rounded-2xl
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Background gradient overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5
        opacity-0 transition-opacity duration-500
        ${isHovered ? 'opacity-100' : ''}
      `} />
      
      {/* Shimmer effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent
        transform -translate-x-full transition-transform duration-1000
        ${isHovered ? 'translate-x-full' : ''}
      `} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover indicator */}
      {hoverable && (
        <div className={`
          absolute top-4 right-4 opacity-0 transition-all duration-300
          ${isHovered ? 'opacity-100 translate-y-0' : 'translate-y-2'}
        `}>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default PremiumCard;
