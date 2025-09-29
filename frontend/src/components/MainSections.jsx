import React from 'react';
import { Link } from 'react-router-dom';

const ACCENT = '#00CC00';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{children}</h2>
);

const MainSections = ({ addToCart }) => {
  const format = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { title: 'Apple iPhone', img: '/iphone_17_promo.webp', desc: 'Все актуальные модели и наличие', path: '/catalog/iphone' },
    { title: 'Apple Watch', img: '/apple_watch.webp', desc: 'Все серии и ремешки', path: '/catalog/watch' },
    { title: 'Apple AirPods', img: '/airpods.webp', desc: 'Все модели AirPods', path: '/catalog/airpods' },
    { title: 'Mac', img: '/apple_mac.webp', desc: 'Ноутбуки и десктопы', path: '/catalog/mac' }
  ];

  const topSales = [
    { id: 1, name: 'iPhone 17 Pro Max 256 GB', price: 134990, old: 144990, img: '/iphone_17_pro_max_all_colors.webp' },
    { id: 2, name: 'iPhone 17 Pro 128 GB', price: 119990, old: 129990, img: '/iphone_17_pro_all_colors.webp' },
    { id: 3, name: 'iPhone 16 128 GB', price: 79990, old: 89990, img: '/iphone_16_all_color.webp' },
    { id: 4, name: 'iPhone 15 128 GB', price: 69990, old: 79990, img: '/iphone_15.webp' }
  ];


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Лучшая техника Apple */}
        <div className="py-10 md:py-14">
          <div className="mb-8">
            <div className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              <span style={{ color: ACCENT }}>Лучшая техника</span> <span className="text-gray-900">Apple</span>
              <div className="text-gray-900">в одном магазине:</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link key={c.title} to={c.path} onClick={scrollToTop} className="block rounded-2xl border border-gray-200 hover:border-gray-300 bg-white">
                <div className="aspect-square p-6 flex items-center justify-center">
                  <img src={c.img} alt={c.title} className="h-full w-full object-contain" />
                </div>
                <div className="px-6 pb-6">
                  <div className="font-medium text-gray-900">{c.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Две крупные плитки */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/catalog/dyson" onClick={scrollToTop} className="rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/dyson.webp" alt="Dyson техника" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 py-4">
                <div className="text-gray-900 font-medium">Dyson техника</div>
              </div>
            </Link>
            <Link to="/catalog/ipad" onClick={scrollToTop} className="rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/ipad_new_2022.webp" alt="iPad" className="w-full h-full object-cover" />
              </div>
              <div className="px-6 py-4">
                <div className="text-gray-900 font-medium">iPad</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Аксессуары */}
        <div className="py-10">
          <SectionTitle>Аксессуары</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { title: 'Другая техника', img: '/game.webp', sub: 'Dyson, GoPro, PlayStation', link: '/catalog/gaming' },
              { title: 'Защитные стекла', img: '/usb.webp', sub: 'На любые модели', link: '/catalog/accessories' },
              { title: 'Кабели и адаптеры', img: '/usb.webp', sub: 'На любые модели', link: '/catalog/accessories' },
              { title: 'AirTag', img: '/airtag.webp', sub: 'Умные метки Apple', link: '/catalog/airtag' }
            ].map((a) => (
              <Link key={a.title} to={a.link} onClick={scrollToTop} className="rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-4 py-4">
                  <div className="text-gray-900 font-medium">{a.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{a.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Топ продаж */}
      <section className="mt-6 py-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-200 text-sm mb-2">Каталог</div>
          <div className="text-3xl md:text-4xl font-bold mb-8" style={{ color: ACCENT }}>Топ продаж</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSales.map((p) => (
              <div key={p.id} className="rounded-2xl bg-[#1a1a1a] border border-white/10">
                <div className="aspect-square p-6">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <div className="px-6 pb-6">
                  <div className="text-gray-100 text-sm mb-1">{p.name}</div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-white font-semibold text-lg">{format(p.price)}</div>
                    <div className="text-gray-400 line-through text-sm">{format(p.old)}</div>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/product/${p.id}`} onClick={scrollToTop} className="px-4 py-2 rounded-lg text-white font-medium" style={{ background: ACCENT }}>Подробнее</Link>
                    <button onClick={() => addToCart && addToCart({ id: p.id, name: p.name, price: p.price, image: p.img })} className="px-4 py-2 rounded-lg bg-white text-gray-900 font-medium">Заказать</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;