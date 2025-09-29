import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, viewMode = 'grid' }) => {
  const price = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-5 flex gap-5">
        <div className="w-32 h-32 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <Link to={`/product/${product.id}`} className="block text-gray-900 font-medium mb-2 line-clamp-2">{product.name}</Link>
          <div className="flex items-center gap-2 mb-3">
            <div className="text-lg font-semibold text-gray-900">{price(product.price)}</div>
            {product.oldPrice && <div className="text-sm text-gray-400 line-through">{price(product.oldPrice)}</div>}
          </div>
          <button onClick={() => onAddToCart && onAddToCart(product)} className="px-4 py-2 rounded-lg bg-gray-900 text-white">Купить</button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <Link to={`/product/${product.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="aspect-square p-5 bg-gray-50">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <div className="text-gray-900 text-sm mb-2 line-clamp-2">{product.name}</div>
        <div className="flex items-center gap-2 mb-4">
          <div className="text-lg font-semibold text-gray-900">{price(product.price)}</div>
          {product.oldPrice && <div className="text-sm text-gray-400 line-through">{price(product.oldPrice)}</div>}
        </div>
        <button onClick={() => onAddToCart && onAddToCart(product)} className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;