import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Smartphone, Tablet, Laptop, Watch, Headphones, Tag, Zap, Gamepad2, FolderOpen } from 'lucide-react';
import { useMobileMenu } from '../contexts/MobileMenuContext';

const ACCENT = '#00CC00';

const EnhancedMobileMenu = ({ cartCount = 0, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const { closeMenu } = useMobileMenu();

  if (!isOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const catalog = [
    { name: 'iPhone', path: '/catalog/iphone', icon: Smartphone },
    { name: 'iPad', path: '/catalog/ipad', icon: Tablet },
    { name: 'Mac', path: '/catalog/mac', icon: Laptop },
    { name: 'Watch', path: '/catalog/watch', icon: Watch },
    { name: 'AirPods', path: '/catalog/airpods', icon: Headphones },
    { name: 'AirTag', path: '/catalog/airtag', icon: Tag },
    { name: 'Dyson', path: '/catalog/dyson', icon: Zap },
    { name: 'Игры', path: '/catalog/gaming', icon: Gamepad2 },
  ];

  const openSearch = (term) => {
    if (term.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(term.trim())}`);
      closeMenu();
    }
  };

  return (
    <div className="px-4 pb-6 h-full overflow-y-auto" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 16px)' }}>
      {/* Search */}
      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Поиск товаров..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') openSearch(q); }}
          className="w-full pl-10 pr-3 py-3 rounded-xl bg-gray-50 border border-gray-200"
          data-testid="mobile-menu-search"
        />
      </div>

      {/* Catalog grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {catalog.map((c) => {
          const IconComponent = c.icon;
          return (
            <Link
              key={c.name}
              to={c.path}
              onClick={() => { closeMenu(); scrollToTop(); }}
              className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center gap-3 group transition-all duration-200"
              data-testid={`mobile-menu-${c.name.toLowerCase()}`}
            >
              <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-200 text-gray-600" />
              <span className="font-medium text-gray-900">{c.name}</span>
            </Link>
          );
        })}
        {/* All categories page */}
        <Link 
          to="/catalog" 
          onClick={() => { onClose(); scrollToTop(); }} 
          className="p-4 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 flex items-center gap-3 group transition-all duration-200"
        >
          <FolderOpen size={20} className="group-hover:scale-110 transition-transform duration-200 text-blue-600" />
          <span className="font-medium text-blue-700">Все категории</span>
        </Link>
      </div>

      {/* Services */}
      <div className="mt-6">
        <div className="text-sm text-gray-500 mb-2">Сервисы</div>
        <div className="flex flex-wrap gap-2">
          {[{name:'Trade‑in',path:'/trade-in'},{name:'Рассрочка',path:'/installment'},{name:'Доставка',path:'/delivery'},{name:'Гарантия',path:'/warranty'}].map((s)=>(
            <Link key={s.name} to={s.path} onClick={onClose} className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">{s.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedMobileMenu;