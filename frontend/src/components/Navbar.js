import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-luxury sticky top-0 z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">⌚</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-700/20 to-slate-800/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-playfair font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                LuxeTime
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">
                Premium Timepieces
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/category/Watches" className="nav-link text-lg">
              Watches
            </Link>
            <Link to="/category/WallClocks" className="nav-link text-lg">
              Wall Clocks
            </Link>
            <Link to="/category/Accessories" className="nav-link text-lg">
              Accessories
            </Link>
            <div className="relative group">
              <button className="nav-link text-lg flex items-center">
                Services
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-luxury py-2 z-50 border border-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/services/mobile-repair" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile Repairing Combos
                </Link>
                <Link to="/services/spare-parts" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Spare Parts
                </Link>
                <Link to="/services/watch-repair" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Repair Services
                </Link>
                <Link to="/services/wall-clock-repair" className="flex items-center px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Wall Clock Repair
                </Link>
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-6">
            {/* Premium Cart */}
            <Link to="/cart" className="relative p-3 text-slate-700 hover:text-blue-600 transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                    {getCartItemCount()}
                  </span>
                )}
              </div>
            </Link>

            {/* Premium User Menu */}
            {user ? (
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">{user?.name || 'User'}</p>
                    <p className="text-xs text-slate-500 capitalize">{user?.role || 'user'}</p>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full hover:from-slate-200 hover:to-slate-300 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-luxury py-2 z-50 border border-slate-200/50">
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Profile
                        </Link>
                        <Link
                          to="/orders"
                          className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Orders
                        </Link>
                        {user?.role === 'admin' && (
                          <Link
                            to="/admin"
                            className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Admin Panel
                          </Link>
                        )}
                        {user?.role === 'deliveryBoy' && (
                          <Link
                            to="/delivery"
                            className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            Delivery Panel
                          </Link>
                        )}
                        <div className="border-t border-slate-200 my-2"></div>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="nav-link text-lg">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-luxury border border-slate-200/50">
              <Link
                to="/category/Watches"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">⌚</span>
                Watches
              </Link>
              <Link
                to="/category/WallClocks"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">🕐</span>
                Wall Clocks
              </Link>
              <Link
                to="/category/Accessories"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3">💎</span>
                Accessories
              </Link>
              <div className="border-t border-slate-200 my-2"></div>
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Services</h3>
              </div>
              <Link
                to="/services/mobile-repair"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile Repair Combos
              </Link>
              <Link
                to="/services/spare-parts"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Spare Parts
              </Link>
              <Link
                to="/services/watch-repair"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Repair
              </Link>
              <Link
                to="/services/wall-clock-repair"
                className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wall Clock Repair
              </Link>
              {!user && (
                <>
                  <div className="border-t border-slate-200 my-2"></div>
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-200 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center px-4 py-3 text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 rounded-lg mx-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;