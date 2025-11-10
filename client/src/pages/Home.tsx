import { ArrowRight, Shield, Truck, RefreshCw, GitCompare, Star } from 'lucide-react';
import { Link } from 'react-router';
import { useFeaturedPhones } from '../hooks/UsePhones';
import PhoneCard from '../components/PhoneCard';
import Header from '../components/Header';
import type { Phone } from '../shared/types';

export default function Home() {
  const { phones: featuredPhones, loading } = useFeaturedPhones();

  const handleAddToCart = (phone: Phone) => {
    console.log('Add to cart:', phone);
    // TODO: Implement cart functionality
  };

  const handleAddToCompare = (phone: Phone) => {
    console.log('Add to compare:', phone);
    // TODO: Implement comparison functionality
  };

  const handleViewDetails = (phone: Phone) => {
    console.log('View details:', phone);
    // TODO: Navigate to product details
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                iPhone
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Compare, trade-in, and buy the latest iPhones with confidence. 
              Get the best deals and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/shop"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/trade-in"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Trade-In Value</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Mophones?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make buying your next iPhone simple, safe, and smart with industry-leading features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GitCompare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Comparison</h3>
              <p className="text-gray-600">
                Compare specs, prices, and features side-by-side to make the best decision.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trade-In Program</h3>
              <p className="text-gray-600">
                Get instant quotes for your old device and apply credit to your new purchase.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Purchase</h3>
              <p className="text-gray-600">
                Shop with confidence using our secure payment system and warranty protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Phones Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured iPhones</h2>
              <p className="text-gray-600">Discover our handpicked selection of the best iPhones</p>
            </div>
            <Link 
              to="/shop"
              className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPhones.map((phone) => (
                <PhoneCard
                  key={phone.id}
                  phone={phone}
                  onAddToCart={handleAddToCart}
                  onAddToCompare={handleAddToCompare}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link 
              to="/shop"
              className="sm:hidden inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <span>View All Phones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Phones Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
              <div className="text-gray-600 flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span>Rating</span>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">Mophones</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for buying, selling, and comparing the latest iPhones.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/shop" className="block text-gray-400 hover:text-white transition-colors">Shop</Link>
                <Link to="/compare" className="block text-gray-400 hover:text-white transition-colors">Compare</Link>
                <Link to="/trade-in" className="block text-gray-400 hover:text-white transition-colors">Trade-In</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Warranty</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mophones. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
