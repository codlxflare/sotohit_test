import React from 'react';

const ProductSkeleton = ({ viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="animate-pulse bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="flex space-x-8">
          {/* Image skeleton */}
          <div className="w-40 h-40 bg-gray-200 rounded-2xl flex-shrink-0" />
          
          {/* Content skeleton */}
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="flex space-x-2">
              <div className="h-6 bg-gray-200 rounded w-16" />
              <div className="h-6 bg-gray-200 rounded w-20" />
            </div>
            <div className="flex justify-between items-center">
              <div className="h-8 bg-gray-200 rounded w-24" />
              <div className="h-10 bg-gray-200 rounded w-32" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200" />
      
      {/* Content skeleton */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="h-5 bg-gray-200 rounded mb-3" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        
        {/* Color options skeleton */}
        <div className="flex space-x-2 mb-4">
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
        </div>
        
        {/* Specs skeleton */}
        <div className="flex space-x-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-6 bg-gray-200 rounded w-20" />
        </div>
        
        {/* Price skeleton */}
        <div className="h-8 bg-gray-200 rounded w-24 mb-4" />
        
        {/* Button skeleton */}
        <div className="h-12 bg-gray-200 rounded-xl mt-auto" />
      </div>
    </div>
  );
};

export default ProductSkeleton;


