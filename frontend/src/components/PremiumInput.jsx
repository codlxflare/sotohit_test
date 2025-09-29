import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, Search, X } from 'lucide-react';

const PremiumInput = forwardRef(({ 
  type = 'text',
  placeholder,
  label,
  error,
  success,
  icon,
  clearable = false,
  className = '',
  value,
  onChange,
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleClear = () => {
    setInternalValue('');
    if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`relative ${className}`}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      {/* Input container */}
      <div className={`
        relative group transition-all duration-300
        ${isFocused ? 'scale-[1.02]' : ''}
      `}>
        {/* Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
            {icon}
          </div>
        )}
        
        {/* Input */}
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-blue-500/20
            ${icon ? 'pl-12' : ''}
            ${type === 'password' || clearable ? 'pr-12' : ''}
            ${error 
              ? 'border-red-300 bg-red-50 focus:border-red-500' 
              : success 
                ? 'border-green-300 bg-green-50 focus:border-green-500'
                : 'border-gray-200 bg-white focus:border-blue-500 hover:border-gray-300'
            }
            ${isFocused ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
          `}
          {...props}
        />
        
        {/* Password toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        
        {/* Clear button */}
        {clearable && internalValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        )}
        
        {/* Search icon for search inputs */}
        {type === 'search' && !icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
            <Search size={20} />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <span className="w-1 h-1 bg-red-500 rounded-full mr-2" />
          {error}
        </p>
      )}
      
      {/* Success message */}
      {success && (
        <p className="mt-2 text-sm text-green-600 flex items-center">
          <span className="w-1 h-1 bg-green-500 rounded-full mr-2" />
          {success}
        </p>
      )}
    </div>
  );
});

PremiumInput.displayName = 'PremiumInput';

export default PremiumInput;


