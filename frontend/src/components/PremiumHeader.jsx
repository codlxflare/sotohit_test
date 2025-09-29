import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Smartphone, Tablet, Laptop, Watch, Headphones, Tag, Zap, Gamepad2 } from 'lucide-react';
import EnhancedMobileMenu from './EnhancedMobileMenu';
import { useMobileMenu } from '../contexts/MobileMenuContext';

const PremiumHeader = ({ cartCount = 0 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [q, setQ] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { menuOpen, openMenu, closeMenu } = useMobileMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on any route change
  useEffect(() => { 
    // Temporarily disabled to debug auto-close issue
    // closeMenu();
  }, [location.pathname]);

  // Global events for opening from bottom bar
  useEffect(() => {
    const open = (e) => {
      console.log('Opening catalog menu'); // Debug log
      openMenu();
    };
    
    window.addEventListener('open-catalog-menu', open);
    
    return () => {
      window.removeEventListener('open-catalog-menu', open);
    };
  }, []);

  const onSearchEnter = (e) => {
    if (e.key === 'Enter' && q.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(q.trim())}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nav = [
    { name: 'iPhone', path: '/catalog/iphone', icon: Smartphone },
    { name: 'iPad', path: '/catalog/ipad', icon: Tablet },
    { name: 'Mac', path: '/catalog/mac', icon: Laptop },
    { name: 'Watch', path: '/catalog/watch', icon: Watch },
    { name: 'AirPods', path: '/catalog/airpods', icon: Headphones },
    { name: 'AirTag', path: '/catalog/airtag', icon: Tag },
    { name: 'Dyson', path: '/catalog/dyson', icon: Zap },
    { name: 'Игры', path: '/catalog/gaming', icon: Gamepad2 }
  ];

  return (
    <header className={`sticky top-0 z-50 border-b border-gray-200 ${scrolled ? 'backdrop-blur bg-white/90' : 'bg-white'}`} data-testid="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
        {/* Burger (mobile) */}
        <button onClick={openMenu} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" aria-label="Открыть меню" data-testid="burger-button">
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="Логотип" className="h-7 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </Link>

        {/* Inline nav (tablet & desktop) */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {nav.map((n) => {
            const IconComponent = n.icon;
            return (
              <Link 
                key={n.name} 
                to={n.path} 
                onClick={scrollToTop} 
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-200 group" 
                data-testid={`nav-${n.name.toLowerCase()}`}
              >
                <IconComponent size={16} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{n.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Каталог кнопка для планшетов */}
        <Link 
          to="/catalog" 
          onClick={scrollToTop}
          className="hidden md:flex lg:hidden items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 ml-6"
        >
          <span className="text-sm font-medium">Каталог</span>
        </Link>

        <div className="flex-1" />

        {/* Search (md+) */}
        <div className="hidden md:flex items-center relative">
          <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onSearchEnter} placeholder="Поиск..." className="w-64 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2" data-testid="search-input" />
          <Search size={18} className="absolute right-3 text-gray-400" />
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative ml-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50" data-testid="cart-button">
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full text-[11px] flex items-center justify-center text-white" style={{ backgroundColor: '#FF0000' }}>
              {cartCount > 9 ? '9+' : cartCount}
            </div>
          )}
        </Link>
      </div>

      {/* Full screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          transform: 'translateZ(0)'
        }}>
          <div className="absolute inset-0 bg-white" style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%'
          }}>
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Закрыть меню"
                  data-testid="close-mobile-menu"
                >
                  <X size={20} />
                </button>
                <img src="/logo.png" alt="СОТОХИТ" className="h-6 w-auto" onError={(e) => (e.currentTarget.style.display = 'none')} />
                <div className="w-9" /> {/* Spacer */}
              </div>
            </div>
            
            {/* Menu content */}
            <div className="h-full overflow-y-auto">
              <EnhancedMobileMenu isOpen={menuOpen} onClose={closeMenu} cartCount={cartCount} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PremiumHeader;