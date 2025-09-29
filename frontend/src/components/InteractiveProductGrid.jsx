import React, { useState, useEffect } from 'react';
import { Filter, Grid3X3, List, Search, SlidersHorizontal } from 'lucide-react';
import AdvancedProductCard from './AdvancedProductCard';

const InteractiveProductGrid = ({ products, title = "Продукты" }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState({
    category: 'all',
    priceRange: [0, 300000],
    inStock: false
  });

  const categories = [
    { id: 'all', name: 'Все', count: products.length },
    { id: 'iphone', name: 'iPhone', count: products.filter(p => p.category === 'iphone').length },
    { id: 'ipad', name: 'iPad', count: products.filter(p => p.category === 'ipad').length },
    { id: 'mac', name: 'Mac', count: products.filter(p => p.category === 'mac').length },
    { id: 'watch', name: 'Apple Watch', count: products.filter(p => p.category === 'watch').length },
    { id: 'airpods', name: 'AirPods', count: products.filter(p => p.category === 'airpods').length },
    { id: 'airtag', name: 'AirTag', count: products.filter(p => p.category === 'airtag').length },
    { id: 'gaming', name: 'Игровые приставки', count: products.filter(p => p.category === 'gaming').length },
    { id: 'dyson', name: 'Dyson', count: products.filter(p => p.category === 'dyson').length },
    { id: 'accessories', name: 'Аксессуары', count: products.filter(p => p.category === 'accessories').length }
  ];

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilters.category);
    }

    // Price filter
    filtered = filtered.filter(product =>
      product.price >= activeFilters.priceRange[0] && 
      product.price <= activeFilters.priceRange[1]
    );

    // Stock filter
    if (activeFilters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort
    switch (sortBy) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, activeFilters, sortBy]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse top-20 left-20" />
        <div className="absolute w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000 bottom-20 right-20" />
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500 top-1/2 left-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
            <SlidersHorizontal size={16} />
            <span>Персональный выбор</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Найдите идеальное устройство Apple для ваших задач
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="glassmorphism rounded-3xl border border-white/20 p-8 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск продуктов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilters(prev => ({ ...prev, category: category.id }))}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilters.category === category.id
                      ? 'bg-blue-500/90 text-white shadow-lg border border-blue-400/50'
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Рекомендуемые</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="name">По алфавиту</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-sm text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white shadow-sm text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-12">
          <p className="text-gray-300 text-lg">
            Найдено <span className="font-medium text-white">{filteredProducts.length}</span> товаров
          </p>
          
          {/* Advanced Filters Toggle */}
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
            <SlidersHorizontal size={16} />
            <span>Дополнительные фильтры</span>
          </button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-6">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-3xl font-light text-white mb-4">Товары не найдены</h3>
            <p className="text-gray-300 mb-8 text-lg">Попробуйте изменить параметры поиска</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilters({ category: 'all', priceRange: [0, 300000], inStock: false });
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 lg:gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map(product => (
              <AdvancedProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                onAddToCart={(product) => console.log('Add to cart:', product)}
                onToggleFavorite={(id) => console.log('Toggle favorite:', id)}
                onQuickView={(product) => console.log('Quick view:', product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveProductGrid;