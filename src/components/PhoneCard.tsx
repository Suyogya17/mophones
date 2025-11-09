import { Heart, ShoppingCart, Eye, Plus } from 'lucide-react';
import type { Phone } from '../shared/types';

interface PhoneCardProps {
  phone: Phone;
  onAddToCart?: (phone: Phone) => void;
  onAddToCompare?: (phone: Phone) => void;
  onViewDetails?: (phone: Phone) => void;
  className?: string;
}

export default function PhoneCard({ 
  phone, 
  onAddToCart, 
  onAddToCompare, 
  onViewDetails,
  className = "" 
}: PhoneCardProps) {
  const hasDiscount = phone.original_price && phone.original_price > phone.price;
  const discountPercentage = hasDiscount && phone.original_price
    ? Math.round(((phone.original_price - phone.price) / phone.original_price) * 100)
    : 0;

  return (
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={phone.image_url || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'}
          alt={phone.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {phone.is_featured === 1 && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
          {hasDiscount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
          {onAddToCompare && (
            <button 
              onClick={() => onAddToCompare(phone)}
              className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Plus className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </button>
          )}
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onViewDetails?.(phone)}
            className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 text-lg line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
            {phone.name}
          </h3>
          <p className="text-sm text-gray-600">{phone.brand} • {phone.storage}</p>
        </div>

        {/* Key Specs */}
        <div className="mb-3 text-xs text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>Display:</span>
            <span className="font-medium">{phone.display_size}</span>
          </div>
          <div className="flex justify-between">
            <span>Camera:</span>
            <span className="font-medium">{phone.camera_main}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold text-gray-900">${phone.price}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">${phone.original_price}</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={() => onAddToCart?.(phone)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2.5 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
