import { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Menu, X, Search, Smartphone, GitCompare, RefreshCw, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@getmocha/users-service/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, redirectToLogin, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mophones
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
            <Link 
              to="/compare" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <GitCompare className="w-4 h-4" />
              <span>Compare</span>
            </Link>
            <Link 
              to="/trade-in" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Trade-In</span>
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search phones..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-64"
              />
            </div>
            <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <img
                    src={user.google_user_data.picture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{user.google_user_data.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/admin"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Admin Panel
                      </Link>
                      <button
                        onClick={async () => {
                          setShowUserMenu(false);
                          await logout();
                        }}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={redirectToLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search phones..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-full"
                />
              </div>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/compare" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <GitCompare className="w-4 h-4" />
                <span>Compare</span>
              </Link>
              <Link 
                to="/trade-in" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Trade-In</span>
              </Link>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </button>
              
              {/* Mobile User Menu */}
              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={user.google_user_data.picture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format'}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.google_user_data.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Admin Panel</span>
                  </Link>
                  <button
                    onClick={async () => {
                      setIsMenuOpen(false);
                      await logout();
                    }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      redirectToLogin();
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
