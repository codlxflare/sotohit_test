import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Phone, Menu, X } from 'lucide-react';

const Header = ({ cartCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">С</span>
            </div>
            <span className="text-xl font-bold text-gray-900">СОТОХИТ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/catalog/iphone" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              iPhone
            </Link>
            <Link to="/catalog/ipad" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              iPad
            </Link>
            <Link to="/catalog/mac" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Mac
            </Link>
            <Link to="/catalog/watch" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Apple Watch
            </Link>
            <Link to="/catalog/airpods" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              AirPods
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Search size={20} />
            </button>

            {/* Phone */}
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <Phone size={16} className="text-blue-600" />
              <span className="text-gray-700">+7 (499) 288-80-22</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/catalog/iphone" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                iPhone
              </Link>
              <Link 
                to="/catalog/ipad" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                iPad
              </Link>
              <Link 
                to="/catalog/mac" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mac
              </Link>
              <Link 
                to="/catalog/watch" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Apple Watch
              </Link>
              <Link 
                to="/catalog/airpods" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                AirPods
              </Link>
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                <Phone size={16} className="text-blue-600" />
                <span className="text-gray-700">+7 (499) 288-80-22</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;