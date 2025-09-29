import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const AppleNews = () => {
  const newsArticles = [
    { id: 1, title: 'Apple представила iPhone 16 Pro с новой камерой', excerpt: 'Новая система камер Pro открывает безграничные возможности', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=500&fit=crop&crop=center', date: '15 сентября 2024', category: 'Apple', readTime: '3 мин' },
    { id: 2, title: 'MacBook Pro M4: новый уровень производительности', excerpt: 'Чип M4 обеспечивает невероятную скорость работы', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=500&fit=crop&crop=center', date: '12 сентября 2024', category: 'Mac', readTime: '5 мин' },
    { id: 3, title: 'Apple Watch Ultra 2: для экстремальных приключений', excerpt: 'Новые возможности для спорта и активного отдыха', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=500&fit=crop&crop=center', date: '10 сентября 2024', category: 'Watch', readTime: '4 мин' },
    { id: 4, title: 'Dyson представила новые беспроводные пылесосы', excerpt: 'Более лёгкие и мощные модели для дома', image: 'https://images.unsplash.com/photo-1614724507590-09e3a64a6d0e?w=800&h=500&fit=crop&crop=center', date: '1 октября 2024', category: 'Dyson', readTime: '3 мин' },
    { id: 5, title: 'Sony показала PlayStation 5 Pro', excerpt: 'Улучшенная графика и режим 8K', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=500&fit=crop&crop=center', date: '5 октября 2024', category: 'PlayStation', readTime: '5 мин' },
    { id: 6, title: 'DJI анонсировала новый дрон для профи', excerpt: 'Съёмка в 8K и стабилизация нового поколения', image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&h=500&fit=crop&crop=center', date: '10 октября 2024', category: 'DJI', readTime: '4 мин' }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Новости технологий</h2>
          <p className="text-gray-600 mt-2">Самое интересное из мира Apple и другой техники</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {newsArticles.map((a) => (
            <Link key={a.id} to={`/news/${a.id}`} onClick={scrollToTop} className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-gray-300">
              <div className="aspect-video overflow-hidden">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-1">{a.category} • {a.date} • {a.readTime}</div>
                <div className="text-gray-900 font-semibold mb-2 line-clamp-2">{a.title}</div>
                <div className="text-sm text-gray-600 line-clamp-2">{a.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/news" onClick={scrollToTop} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm hover:bg-gray-50">
            Все новости
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppleNews;