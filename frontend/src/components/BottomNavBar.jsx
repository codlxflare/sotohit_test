import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Grid3X3, Newspaper, Percent, User, ShoppingCart } from 'lucide-react';
import { useMobileMenu } from '../contexts/MobileMenuContext';

const ACCENT = '#00CC00';

const BottomNavBar = ({ cartCount = 0 }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openMenu, closeMenu } = useMobileMenu();

  const items = [
    { path: '/', icon: Home, label: 'Главная', id: 'home' },
    { path: '/catalog', icon: Grid3X3, label: 'Каталог', id: 'catalog' },
    { path: '/news', icon: Newspaper, label: 'Новости', id: 'news' },
    { path: '/promotions', icon: Percent, label: 'Акции', id: 'promotions' },
    { path: '/profile', icon: User, label: 'Профиль', id: 'profile' }
  ];

  const isActive = (p) => (p === '/' ? location.pathname === '/' : location.pathname.startsWith(p));

  const onCatalogClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      e.preventDefault();
      console.log('Opening catalog menu via context'); // Debug log
      openMenu();
    }
  };

  const onNavigationClick = (itemId) => {
    // Закрываем меню при переходе на любую страницу, кроме каталога
    if (itemId !== 'catalog') {
      closeMenu();
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden" data-testid="bottom-nav">
      <div className="mx-auto max-w-7xl px-3" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 6px)' }}>
        <div className="rounded-2xl bg-white/95 backdrop-blur border border-gray-200 shadow-lg">
          <div className="flex items-center justify-between px-1">
            {items.map((it) => {
              const Icon = it.icon;
              const active = isActive(it.path);
              const props = it.id === 'catalog' ? { onClick: onCatalogClick } : { onClick: () => onNavigationClick(it.id) };
              return (
                <Link
                  key={it.id}
                  to={it.path}
                  {...props}
                  onMouseDown={(ev) => it.id !== 'catalog' && ev.stopPropagation()}
                  className="flex-1 py-2 flex flex-col items-center gap-0.5"
                  data-testid={`bottom-link-${it.id}`}
                >
                  <Icon size={20} color={active ? ACCENT : '#111827'} />
                  <span className="text-[11px]" style={{ color: active ? ACCENT : '#111827' }}>{it.label}</span>
                </Link>
              );
            })}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;