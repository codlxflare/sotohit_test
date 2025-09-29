import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ACCENT = '#00CC00';

const ProductCarousel = ({ products, title = 'Новинки Apple' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 768) setVisible(2);
      else if (window.innerWidth < 1024) setVisible(3);
      else setVisible(4);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, (products?.length || 0) - visible);
  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));
  const price = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

  if (!products || products.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
          <div className="hidden md:flex gap-2">
            <button onClick={prev} disabled={currentIndex === 0} className="p-2 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronLeft size={18} /></button>
            <button onClick={next} disabled={currentIndex >= maxIndex} className="p-2 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / visible)}%)`, width: `${(products.length / visible) * 100}%` }}
          >
            {products.map((p) => (
              <div key={p.id} className="px-3" style={{ width: `${100 / products.length}%` }}>
                <div className="rounded-2xl border border-gray-200 bg-white">
                  <Link to={`/product/${p.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="aspect-square p-6">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                  </Link>
                  <div className="px-6 pb-6">
                    <div className="text-gray-900 text-sm mb-2 line-clamp-1">{p.name}</div>
                    <div className="text-gray-900 font-semibold">{price(p.price)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-4 flex md:hidden justify-center gap-2">
          <button onClick={prev} disabled={currentIndex === 0} className="p-2 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronLeft size={18} /></button>
          <button onClick={next} disabled={currentIndex >= maxIndex} className="p-2 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;