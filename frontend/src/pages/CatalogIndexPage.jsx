import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'iphone', name: 'iPhone', img: '/iphone_17_promo.webp' },
  { id: 'ipad', name: 'iPad', img: '/ipad_new_2022.webp' },
  { id: 'mac', name: 'Mac', img: '/apple_mac.webp' },
  { id: 'watch', name: 'Apple Watch', img: '/apple_watch.webp' },
  { id: 'airpods', name: 'AirPods', img: '/airpods.webp' },
  { id: 'airtag', name: 'AirTag', img: '/airtag.webp' },
  { id: 'gaming', name: 'Игровые приставки', img: '/game.webp' },
  { id: 'dyson', name: 'Dyson', img: '/dyson.webp' },
  { id: 'accessories', name: 'Аксессуары', img: '/usb.webp' },
];

const CatalogIndexPage = () => {
  return (
    <div className="pt-4 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">Каталог</h1>
        <p className="text-gray-600 mb-8">Выберите категорию, чтобы посмотреть товары</p>
        
        {/* Мобильная версия - компактная сетка */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {categories.map((c) => (
            <Link key={c.id} to={`/catalog/${c.id}`} className="rounded-xl border border-gray-200 bg-white hover:border-gray-300 overflow-hidden">
              <div className="aspect-square bg-gray-50">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium text-sm">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Десктопная версия */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((c) => (
            <Link key={c.id} to={`/catalog/${c.id}`} className="rounded-2xl border border-gray-200 bg-white hover:border-gray-300 overflow-hidden">
              <div className="aspect-square bg-gray-50">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3">
                <div className="text-gray-900 font-medium">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogIndexPage;