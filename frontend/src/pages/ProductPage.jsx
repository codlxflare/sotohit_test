import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Share2, ZoomIn, Star, ChevronLeft, ChevronDown } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';
import SwipeGallery from '../components/SwipeGallery';
import { products } from '../mock/enhancedMockData';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(0);
  const [activeTab, setActiveTab] = useState('specs');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-4 pb-20 text-center">
        <h1 className="text-2xl text-gray-600">Товар не найден</h1>
      </div>
    );
  }

  // Mock images for gallery
  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const memoryOptions = ['128GB', '256GB', '512GB', '1TB'];
  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const specs = {
    'iPhone 16 Pro Max': {
      display: 'Super Retina XDR 6.9"',
      processor: 'A18 Pro',
      camera: 'Pro 48 Мп + 12 Мп + 12 Мп',
      battery: 'до 29 часов видео',
      storage: 'от 256GB до 1TB',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3'
    }
  };

  return (
    <div className="pt-4 pb-20 bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700 transition-colors duration-200">Главная</Link>
          <ChevronRight size={16} />
          <Link to={`/catalog/${product.category}`} className="hover:text-gray-700 transition-colors duration-200 capitalize">
            {product.category}
          </Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Enhanced Gallery */}
          <div className="space-y-6">
            <SwipeGallery 
              images={images}
              className="w-full"
            />
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-8">
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 font-light mb-4">
                {product.description || 'Мощь. Красота. Ум.'}
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) • 127 отзывов</span>
              </div>
            </div>

            {/* Price */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-4xl font-semibold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discount}%
                  </span>
                )}
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>или {formatPrice(Math.round(product.price / 12))} × 12 мес. в рассрочку 0%</p>
                <p>Trade-in: до -50 000 ₽ за ваш старый iPhone</p>
              </div>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Цвет
                </h3>
                <div className="flex space-x-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === index
                          ? 'border-gray-900 ring-4 ring-gray-300 scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Memory Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Объем памяти
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {memoryOptions.map((memory, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMemory(index)}
                    className={`py-4 px-6 text-center font-medium rounded-2xl border-2 transition-all duration-300 ${
                      selectedMemory === index
                        ? 'bg-gray-900 text-white border-gray-900 scale-105'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-sm">{memory}</div>
                    {index === 0 && <div className="text-xs text-gray-500 mt-1">+0 ₽</div>}
                    {index === 1 && <div className="text-xs text-gray-500 mt-1">+15 000 ₽</div>}
                    {index === 2 && <div className="text-xs text-gray-500 mt-1">+35 000 ₽</div>}
                    {index === 3 && <div className="text-xs text-gray-500 mt-1">+65 000 ₽</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 px-8 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <ShoppingCart size={24} />
                <span>Добавить в корзину</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gray-900 hover:bg-black text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-300">
                  Рассрочка 0%
                </button>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300">
                  Trade-in
                </button>
              </div>

              <div className="flex items-center justify-center space-x-6 pt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <Heart size={20} />
                  <span>В избранное</span>
                </button>
                
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                  <Share2 size={20} />
                  <span>Поделиться</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-4 bg-green-50 rounded-xl">
              <p className="text-green-700 font-medium text-center">✓ В наличии • Доставка сегодня до 20:00</p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200 pt-12 mb-20">
          <div className="flex space-x-8 mb-8 border-b border-gray-200">
            {[
              { id: 'specs', name: 'Характеристики' },
              { id: 'description', name: 'Описание' },
              { id: 'reviews', name: 'Отзывы (127)' },
              { id: 'delivery', name: 'Доставка' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 font-medium border-b-2 transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="prose max-w-none">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Основные характеристики</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-600">Дисплей</dt>
                      <dd className="font-medium">Super Retina XDR 6.9"</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-600">Процессор</dt>
                      <dd className="font-medium">A18 Pro</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-600">Камера</dt>
                      <dd className="font-medium">Pro 48 Мп</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-600">Батарея</dt>
                      <dd className="font-medium">до 29 часов видео</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Что в коробке</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      iPhone 16 Pro Max
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Кабель USB-C
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Документация
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'description' && (
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  iPhone 16 Pro Max — это воплощение инноваций Apple в области мобильных технологий. 
                  Титановый корпус обеспечивает максимальную прочность при минимальном весе.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Революционная система камер Pro позволяет создавать профессиональные фото и видео, 
                  а чип A18 Pro обеспечивает невероятную производительность для любых задач.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <Star size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Отзывы скоро появятся</p>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-3">Курьерская доставка</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• По Москве — 500 ₽</li>
                      <li>• При заказе от 50 000 ₽ — бесплатно</li>
                      <li>• Доставка в день заказа</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-green-50 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-3">Самовывоз</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Бесплатно из магазина</li>
                      <li>• Готов к выдаче через 2 часа</li>
                      <li>• 7 точек самовывоза</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">Похожие товары</h2>
            <ProductCarousel 
              products={similarProducts}
              title=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;