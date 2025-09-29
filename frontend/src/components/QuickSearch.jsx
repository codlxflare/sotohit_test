import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { products } from '../mock/enhancedMockData';

const QuickSearch = ({ onProductSelect, className = '' }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef();
  const suggestionsRef = useRef();

  // Получение недавних поисков из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Поиск товаров
  useEffect(() => {
    if (query.length > 1) {
      const filtered = products
        .filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Обработка клика вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProductSelect = (product) => {
    setQuery(product.name);
    setIsOpen(false);
    
    // Сохранение в недавние поиски
    const newRecent = [product.name, ...recentSearches.filter(item => item !== product.name)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className={`relative ${className}`} ref={suggestionsRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          ref={searchRef}
          type="text"
          placeholder="Поиск товаров..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Результаты поиска */}
      {isOpen && (suggestions.length > 0 || recentSearches.length > 0) && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 z-50 max-h-96 overflow-y-auto">
          {suggestions.length > 0 ? (
            <div>
              <div className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b">
                Результаты поиска
              </div>
              {suggestions.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className="w-full p-4 hover:bg-gray-50 transition-colors duration-200 text-left border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {product.category}
                      </div>
                      <div className="text-sm font-semibold text-blue-600">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : recentSearches.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b flex items-center">
                <Clock size={14} className="mr-2" />
                Недавние поиски
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(search)}
                  className="w-full p-3 hover:bg-gray-50 transition-colors duration-200 text-left text-sm text-gray-700 flex items-center"
                >
                  <Clock size={14} className="mr-3 text-gray-400" />
                  {search}
                </button>
              ))}
            </div>
          )}
          
          {/* Популярные поиски */}
          <div className="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b flex items-center">
            <TrendingUp size={14} className="mr-2" />
            Популярные поиски
          </div>
          <div className="p-3">
            <div className="flex flex-wrap gap-2">
              {['iPhone 16', 'MacBook Pro', 'iPad Pro', 'Apple Watch'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition-colors duration-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickSearch;


