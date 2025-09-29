import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Filter, Grid3X3, List, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import QuickViewModal from '../components/QuickViewModal';
import { products } from '../mock/enhancedMockData';

const CatalogPage = ({ addToCart }) => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: category || 'all',
    priceRange: [0, 300000],
    memory: [],
    colors: [],
    inStock: false,
    hasDiscount: false,
    q: ''
  });

  const urlQ = new URLSearchParams(location.search).get('q') || '';

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'iphone', name: 'iPhone' },
    { id: 'ipad', name: 'iPad' },
    { id: 'mac', name: 'Mac' },
    { id: 'watch', name: 'Apple Watch' },
    { id: 'airpods', name: 'AirPods' },
    { id: 'airtag', name: 'AirTag' },
    { id: 'gaming', name: 'Игровые приставки' },
    { id: 'dyson', name: 'Dyson' },
    { id: 'accessories', name: 'Аксессуары' }
  ];

  useEffect(() => {
    // sync state from url & param
    setFilters((prev) => ({ ...prev, category: category || 'all', q: urlQ }));
  }, [category, urlQ]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = [...products];

      // Поиск
      if (filters.q) {
        const searchTerm = filters.q.toLowerCase();
        filtered = filtered.filter((p) => 
          p.name.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm) ||
          (p.description && p.description.toLowerCase().includes(searchTerm)) ||
          (p.brand && p.brand.toLowerCase().includes(searchTerm))
        );
      }

      // Категория
      if (filters.category !== 'all') {
        filtered = filtered.filter((p) => p.category === filters.category);
      }

      // Цена
      filtered = filtered.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

      // Сортировка
      switch (sortBy) {
        case 'priceAsc':
          filtered.sort((a, b) => a.price - b.price); break;
        case 'priceDesc':
          filtered.sort((a, b) => b.price - a.price); break;
        case 'newest':
          filtered.sort((a, b) => b.id - a.id); break;
        default: break;
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [filters, sortBy]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const s = new Set(prev);
      s.has(productId) ? s.delete(productId) : s.add(productId);
      return s;
    });
  };

  const updateFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

  const clearFilters = () => setFilters({ category: 'all', priceRange: [0, 300000], memory: [], colors: [], inStock: false, hasDiscount: false, q: '' });

  return (
    <div className="pt-4 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            {category ? categories.find((c) => c.id === category)?.name : 'Каталог товаров'}
          </h1>
          <p className="text-gray-600 font-light">{filteredProducts.length} товаров найдено</p>
        </div>

        {/* Controls */}
        <div className="mb-6 bg-white rounded-2xl p-4 shadow-sm">
          {/* Mobile layout */}
          <div className="lg:hidden space-y-4">
            {/* Search and Filter */}
            <div className="flex gap-2 mt-4">
              <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">
                <Filter size={16} />
                <span>Фильтры</span>
              </button>
              <div className="flex-1 relative">
                <input
                  value={filters.q}
                  onChange={(e) => updateFilter('q', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { navigate(`/catalog${category ? '/' + category : ''}?q=${encodeURIComponent(filters.q)}`); } }}
                  placeholder="Поиск..."
                  className="w-full px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-white border border-gray-200 focus:outline-none text-sm"
                />
              </div>
            </div>
            
            {/* Sort and View */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-gray-100 hover:bg-gray-200 px-3 py-2 pr-6 rounded-full text-xs cursor-pointer text-black">
                  <option value="popular">Популярные</option>
                  <option value="priceAsc">Цена ↑</option>
                  <option value="priceDesc">Цена ↓</option>
                  <option value="newest">Новинки</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                  <Grid3X3 size={16} />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                <Filter size={18} />
                <span>Фильтры</span>
              </button>

              {/* Поиск в каталоге */}
              <div className="relative">
                <input
                  value={filters.q}
                  onChange={(e) => updateFilter('q', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { navigate(`/catalog${category ? '/' + category : ''}?q=${encodeURIComponent(filters.q)}`); } }}
                  placeholder="Поиск товаров..."
                  className="w-56 md:w-72 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-white border border-gray-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Sort / View */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-gray-100 hover:bg-gray-200 px-4 py-2 pr-8 rounded-full text-sm cursor-pointer text-black">
                  <option value="popular">Популярные</option>
                  <option value="priceAsc">Цена: по возрастанию</option>
                  <option value="priceDesc">Цена: по убыванию</option>
                  <option value="newest">Новинки</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
              </div>
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                <Grid3X3 size={18} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsFilterOpen(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Фильтры</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                {/* Categories */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Категории</div>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => updateFilter('category', cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${filters.category === cat.id ? 'bg-white border border-gray-300' : 'hover:bg-white/60'}`}
                      >
                        <span className="text-gray-900">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-3">
                  <div className="text-sm text-gray-500">Цена</div>
                  <input type="range" min="0" max="300000" value={filters.priceRange[1]} onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])} className="w-full accent-gray-900" />
                  <div className="flex items-center justify-between text-sm text-black">
                    <span>0 ₽</span>
                    <span>{filters.priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>

                <button onClick={clearFilters} className="w-full mt-6 py-2 text-gray-700 hover:bg-white rounded-lg border border-gray-200">Сбросить</button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-72">
            <div className="sticky top-24 bg-gray-50 rounded-2xl p-5 border border-gray-200">
              {/* Categories */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Категории</div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${filters.category === cat.id ? 'bg-white border border-gray-300' : 'hover:bg-white/60'}`}
                    >
                      <span className="text-gray-900">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="space-y-3">
                <div className="text-sm text-gray-500">Цена</div>
                <input type="range" min="0" max="300000" value={filters.priceRange[1]} onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])} className="w-full accent-gray-900" />
                <div className="flex items-center justify-between text-sm text-black">
                  <span>0 ₽</span>
                  <span>{filters.priceRange[1].toLocaleString()} ₽</span>
                </div>
              </div>

              <button onClick={clearFilters} className="w-full mt-6 py-2 text-gray-700 hover:bg-white rounded-lg border border-gray-200">Сбросить</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProductSkeleton key={i} viewMode={viewMode} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16 text-gray-500">Товары не найдены</div>
            ) : (
              <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={{ ...product, isFavorite: favorites.has(product.id) }} viewMode={viewMode} onQuickView={() => setQuickViewProduct(product)} onAddToCart={addToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View */}
      {quickViewProduct && <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />}
    </div>
  );
};

export default CatalogPage;