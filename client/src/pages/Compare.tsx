import { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { usePhones, useComparePhones } from '../hooks/UsePhones';
import Header from '../components/Header';
import type { Phone } from '../shared/types';

export default function Compare() {
  const [selectedPhones, setSelectedPhones] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { phones: allPhones, loading: loadingAll } = usePhones();
  const { phones: comparePhones, loading: loadingCompare } = useComparePhones(selectedPhones);

  const filteredPhones = allPhones.filter(phone =>
    phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    phone.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addPhoneToCompare = (phoneId: number) => {
    if (selectedPhones.length < 4 && !selectedPhones.includes(phoneId)) {
      setSelectedPhones([...selectedPhones, phoneId]);
    }
  };

  const removePhoneFromCompare = (phoneId: number) => {
    setSelectedPhones(selectedPhones.filter(id => id !== phoneId));
  };

  const clearComparison = () => {
    setSelectedPhones([]);
  };

  const comparisonFeatures = [
    { key: 'price', label: 'Price', format: (value: any) => `$${value}` },
    { key: 'display_size', label: 'Display Size' },
    { key: 'processor', label: 'Processor' },
    { key: 'ram', label: 'RAM' },
    { key: 'storage', label: 'Storage' },
    { key: 'camera_main', label: 'Main Camera' },
    { key: 'camera_front', label: 'Front Camera' },
    { key: 'battery', label: 'Battery' },
    { key: 'operating_system', label: 'OS' },
    { key: 'weight', label: 'Weight' },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'network', label: 'Network' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Compare iPhones</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select up to 4 iPhones to compare their specifications, features, and prices side by side.
          </p>
        </div>

        {/* Selected Phones Counter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="text-sm font-medium text-gray-600">
              {selectedPhones.length} of 4 phones selected
            </span>
            {selectedPhones.length > 0 && (
              <button
                onClick={clearComparison}
                className="ml-4 text-red-600 hover:text-red-700 text-sm font-medium"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {selectedPhones.length === 0 ? (
          /* Phone Selection */
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for iPhones to compare..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {loadingAll ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4 animate-pulse">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPhones.map((phone) => (
                  <div
                    key={phone.id}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                    onClick={() => addPhoneToCompare(phone.id)}
                  >
                    <div className="aspect-square mb-3 relative overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={phone.image_url || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300'}
                        alt={phone.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <Plus className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {phone.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-lg">${phone.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {loadingCompare ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading comparison...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 w-48">
                        Feature
                      </th>
                      {comparePhones.map((phone) => (
                        <th key={phone.id} className="px-6 py-4 text-center min-w-64">
                          <div className="flex flex-col items-center">
                            <div className="relative mb-3">
                              <img
                                src={phone.image_url || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200'}
                                alt={phone.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => removePhoneFromCompare(phone.id)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm text-center">
                              {phone.name}
                            </h3>
                          </div>
                        </th>
                      ))}
                      {selectedPhones.length < 4 && (
                        <th className="px-6 py-4 text-center min-w-64">
                          <button
                            onClick={() => setSelectedPhones([])}
                            className="flex flex-col items-center justify-center h-32 w-20 mx-auto border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                          >
                            <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
                            <span className="text-xs text-gray-500 group-hover:text-blue-500 mt-2">
                              Add Phone
                            </span>
                          </button>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={feature.key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {feature.label}
                        </td>
                        {comparePhones.map((phone) => (
                          <td key={phone.id} className="px-6 py-4 text-center text-gray-700">
                            {feature.format 
                              ? feature.format(phone[feature.key as keyof Phone])
                              : phone[feature.key as keyof Phone] || 'N/A'
                            }
                          </td>
                        ))}
                        {selectedPhones.length < 4 && (
                          <td className="px-6 py-4 text-center text-gray-400">-</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Action Buttons */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setSelectedPhones([])}
                  className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Add More Phones
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>View Detailed Comparison</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
