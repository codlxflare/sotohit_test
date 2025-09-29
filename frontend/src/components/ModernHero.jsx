import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ACCENT = '#00CC00';
const DURATION = 5000; // 5s

const ModernHero = () => {
  const [idx, setIdx] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [progress, setProgress] = useState(0);
  const animRef = useRef(null);
  const touchStartX = useRef(null);

  const slides = [
    { id: 1, title: 'iPhone 17 - Новинка!', highlight: 'Новинка!', subtitle: '- Революционный дизайн\n- Чип A18\n- Камера 48 Мп', cta: 'Узнать подробности', image: '/iphone_17_promo.webp' },
    { id: 2, title: 'Рассрочка', highlight: '0‑0‑36', subtitle: '- 0₽ первый месяц\n- 0% переплат\n- 36 месяцев', cta: 'Рассчитать платеж', image: '/iphone_16_all_color.webp' },
    { id: 3, title: 'MacBook Pro - Мощность', highlight: 'Мощность', subtitle: 'Самый мощный MacBook Pro для профессиональных задач.', cta: 'Оставить заявку', image: '/apple_mac.webp' }
  ];

  // Progress bound to slide index: reset on change
  useEffect(() => {
    cancelAnimationFrame(animRef.current ?? 0);
    let start = performance.now();
    const loop = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        setIdx((p) => (p + 1) % slides.length);
        start = performance.now();
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current ?? 0);
  }, [idx]); // re-run when slide changes

  const go = (i) => { setProgress(0); setIdx(i); };
  const next = () => go((idx + 1) % slides.length);
  const prev = () => go((idx - 1 + slides.length) % slides.length);

  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  return (
    <section className="relative" style={{ background: '#0b0b0b' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} data-testid="hero-carousel">
          {/* Slides */}
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center p-6 sm:p-10 md:p-14">
                  {/* Left: content */}
                  <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="text-white font-light tracking-tight mb-4 leading-tight text-[28px] sm:text-[34px] md:text-[44px]">
                      {s.title.split(s.highlight).map((p, i, arr) => (
                        <span key={i}>{p}{i < arr.length - 1 && <span style={{ color: ACCENT }} className="font-semibold">{s.highlight}</span>}</span>
                      ))}
                    </h1>
                    <div className="text-gray-300/90 font-light whitespace-pre-line text-base sm:text-lg md:text-xl mb-6">{s.subtitle}</div>

                    {/* Buttons on one line */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <button data-testid="hero-cta-button" className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-transform duration-300 hover:scale-[1.02]" style={{ backgroundColor: ACCENT }} onClick={() => setShowForm(true)}> {s.cta} </button>
                      <Link to="/catalog" data-testid="hero-catalog-link" className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white/90 hover:text-white border border-white/20" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Перейти в каталог</Link>
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom controls container (no overlap with content) */}
          <div className="relative p-4 sm:p-6">
            {/* Progress */}
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden" aria-hidden>
              <div className="h-full" style={{ width: `${progress}%`, backgroundColor: ACCENT }} />
            </div>
            {/* Arrows + dots on one line */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2" data-testid="hero-dots">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => go(i)} className={`h-2 rounded-full transition-all ${i === idx ? 'w-6' : 'w-2'} bg-white/80 hover:bg-white`} aria-label={`Слайд ${i + 1}`} data-testid={`hero-dot-${i}`} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} data-testid="hero-prev" className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"><ChevronLeft size={18} /></button>
                <button onClick={next} data-testid="hero-next" className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Lead form modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative" role="dialog" aria-modal>
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" aria-label="Закрыть" data-testid="hero-form-close"><X size={22} /></button>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Оставьте заявку</h3>
              <p className="text-gray-600 mb-6">Мы перезвоним и расскажем подробности.</p>
              <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); }} className="space-y-4" data-testid="hero-form">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Имя</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" data-testid="hero-form-name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Телефон</label>
                  <input type="tel" required placeholder="+7" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" data-testid="hero-form-phone" />
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: ACCENT }} data-testid="hero-form-submit">Отправить</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernHero;