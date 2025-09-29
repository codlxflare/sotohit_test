import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, ArrowLeft } from 'lucide-react';

const NewsPage = () => {
  const { id } = useParams();
  
  // Актуальные Apple новости 2025
  const newsArticles = [
    {
      id: 1,
      title: 'iPhone 16 Pro получил революционную камеру с ИИ',
      excerpt: 'Новая система камер с искусственным интеллектом меняет мобильную фотографию навсегда',
      content: `
        <p>Apple представила iPhone 16 Pro с революционной системой камер, которая использует передовые возможности машинного обучения для создания фотографий профессионального качества.</p>
        
        <p>Новая система камер Pro включает главный датчик 48 Мп с улучшенными возможностями ИИ-обработки, сверхширокоугольную камеру 12 Мп и телеобъектив с 5-кратным оптическим зумом. Интеллектуальная система автоматически определяет сцену и применяет оптимальные настройки.</p>
        
        <h2>Ключевые инновации:</h2>
        <ul>
          <li>ИИ-портреты с автоматическим размытием фона</li>
          <li>Ночной режим нового поколения</li>
          <li>Кинематографический режим для видео 4K</li>
          <li>Режим макросъемки с автофокусом</li>
          <li>Профессиональные фильтры в реальном времени</li>
        </ul>
        
        <p>Титановый корпус нового iPhone 16 Pro стал еще прочнее благодаря новому сплаву Grade 5, а время автономной работы увеличилось до 28 часов видеовоспроизведения.</p>
      `,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=400&fit=crop&crop=center',
      date: '23 сентября 2025',
      category: 'iPhone',
      readTime: '4 мин',
      author: 'Apple Newsroom'
    },
    {
      id: 2,
      title: 'Apple Watch Series 10: революция в мониторинге здоровья',
      excerpt: 'Новые датчики для контроля сна, стресса и метаболизма в Apple Watch Series 10',
      content: `
        <p>Apple Watch Series 10 устанавливает новые стандарты в области носимых устройств для здоровья. Новые биометрические датчики позволяют отслеживать показатели, которые ранее были доступны только в медицинских учреждениях.</p>
        
        <p>Революционный датчик метаболизма анализирует состав тела и скорость обмена веществ, предоставляя персонализированные рекомендации по питанию и тренировкам.</p>
        
        <h2>Новые возможности мониторинга:</h2>
        <ul>
          <li>Анализ качества сна и фаз REM</li>
          <li>Мониторинг уровня стресса в реальном времени</li>
          <li>Измерение скорости метаболизма</li>
          <li>Контроль уровня гидратации</li>
          <li>Предупреждение о нерегулярном сердечном ритме</li>
        </ul>
        
        <p>Время автономной работы увеличено до 36 часов благодаря новому чипу S10 и оптимизированному дисплею Always-On.</p>
      `,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=400&fit=crop&crop=center',
      date: '20 сентября 2025',
      category: 'Apple Watch',
      readTime: '5 мин',
      author: 'Apple Health Team'
    },
    {
      id: 3,
      title: 'macOS Sequoia: новые возможности для творчества',
      excerpt: 'Обновленные приложения и ИИ-инструменты в новой версии macOS',
      content: `
        <p>macOS Sequoia представляет новое поколение инструментов для творчества, основанных на технологиях машинного обучения. Обновленные версии Final Cut Pro, Logic Pro и новое приложение AI Studio открывают безграничные возможности для создателей контента.</p>
        
        <p>Новый движок рендеринга Metal 4 обеспечивает до 40% прирост производительности в задачах 3D-моделирования и видеомонтажа.</p>
        
        <h2>Ключевые обновления:</h2>
        <ul>
          <li>ИИ-помощник для автоматического монтажа видео</li>
          <li>Генерация музыки на основе описания</li>
          <li>Автоматическая цветокоррекция с учетом настроения</li>
          <li>Улучшенная работа с несколькими дисплеями</li>
          <li>Новые режимы фокусировки для творческих задач</li>
        </ul>
        
        <p>macOS Sequoia будет доступна как бесплатное обновление для всех совместимых Mac начиная с 28 сентября 2025 года.</p>
      `,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=400&fit=crop&crop=center',
      date: '18 сентября 2025',
      category: 'macOS',
      readTime: '6 мин',
      author: 'Apple Software Team'
    },
    {
      id: 4,
      title: 'iPad Pro M4: мощность настольного ПК в планшете',
      excerpt: 'Новый iPad Pro с чипом M4 превосходит многие ноутбуки по производительности',
      content: `
        <p>iPad Pro с чипом M4 революционизирует категорию планшетов, предлагая производительность на уровне профессиональных рабочих станций в ультратонком корпусе толщиной всего 5,1 мм.</p>
        
        <p>12-ядерный GPU в чипе M4 обеспечивает производительность, сравнимую с дискретными видеокартами, что делает возможным профессиональный 3D-рендеринг и разработку игр прямо на планшете.</p>
        
        <h2>Профессиональные возможности:</h2>
        <ul>
          <li>Поддержка до 8K видеомонтажа в реальном времени</li>
          <li>Запуск полнофункциональных приложений разработки</li>
          <li>ИИ-ускорение для задач машинного обучения</li>
          <li>Дисплей Tandem OLED с яркостью 1600 нит</li>
          <li>Поддержка Magic Keyboard и Apple Pencil Pro</li>
        </ul>
        
        <p>Новый iPad Pro доступен в конфигурациях с 8 ГБ, 16 ГБ и 32 ГБ оперативной памяти, что позволяет работать с самыми ресурсоемкими приложениями.</p>
      `,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=400&fit=crop&crop=center',
      date: '15 сентября 2025',
      category: 'iPad',
      readTime: '7 мин',
      author: 'Apple Pro Team'
    }
  ];
  
  const article = newsArticles.find(article => article.id === parseInt(id)) || newsArticles[0];
  const relatedArticles = newsArticles.filter(art => art.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Navigation */}
        <Link 
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 glassmorphism border border-blue-400/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={16} />
          <span>Вернуться на главную</span>
        </Link>

        {/* Article Header */}
        <article className="glassmorphism rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
              <span className="glassmorphism border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center space-x-2">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {article.title}
              </span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 font-light mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author */}
            <div className="text-sm text-gray-400 mb-12">
              Автор: {article.author}
            </div>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-20">
          <h2 className="text-3xl font-light text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Читайте также
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                to={`/news/${relatedArticle.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group"
              >
                <div className="glassmorphism rounded-2xl border border-white/20 overflow-hidden hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 card-3d-hover">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs text-purple-300 mb-3">
                      <Calendar size={12} />
                      <span>{relatedArticle.date}</span>
                      <span>•</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                    <h3 className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors line-clamp-2 mb-3">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;