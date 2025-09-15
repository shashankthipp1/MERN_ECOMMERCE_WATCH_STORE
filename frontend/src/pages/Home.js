import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../config/api';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { } = useAuth(); // Removed unused auth destructuring

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Add a small delay to prevent immediate API calls
        const timer = setTimeout(async () => {
          const [categoriesRes, productsRes] = await Promise.all([
            apiClient.get('/api/products/categories'),
            apiClient.get('/api/products?limit=6')
          ]);
          
          // Extract category names from the API response objects
          setCategories(categoriesRes.data.map(cat => cat._id));
          setFeaturedProducts(productsRes.data.products);
          setLoading(false);
        }, 100);
        
        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-amber-200 border-t-amber-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading luxury collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with luxury gradient */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-slate-400/20 to-blue-500/20 rounded-lg rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/40 to-cyan-600/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-14 h-14 bg-gradient-to-br from-sky-400/25 to-blue-500/25 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-18 h-18 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-8 hero-text-shadow">
              Luxury
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-slate-300 bg-clip-text text-transparent">Timepieces</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our exquisite collection of premium watches, elegant wall clocks, and luxury accessories. 
              Crafted with precision and designed for the discerning connoisseur.
            </p>
            <div className="mb-12">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-semibold">Established 1996 • Trusted for 28+ Years</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/category/Watches" className="btn-primary text-lg px-12 py-4 shadow-luxury">
                Explore Collection
              </Link>
              <Link to="/category/WallClocks" className="btn-secondary text-lg px-12 py-4 shadow-luxury">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Premium Categories Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mb-6">
              Curated Collections
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Each category represents a carefully selected range of premium timepieces and accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="group card-luxury p-8 text-center hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative mb-6">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-500">
                    {category === 'Watches' && '⌚'}
                    {category === 'WallClocks' && '🕐'}
                    {category === 'Accessories' && '💎'}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-slate-900 mb-4">
                  {category}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Discover our premium {typeof category === 'string' ? category.toLowerCase() : category} collection featuring the finest craftsmanship and timeless design
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-cyan-600 transition-colors">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Featured Products Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mb-6">
              Featured Masterpieces
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Handpicked selections from our most exclusive and sought-after timepieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product._id} 
                className="product-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-full h-80 object-cover"
                    />
                  </Link>
                  <div className="absolute top-4 right-4">
                    <span className="badge-premium">Featured</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-slate-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                    </div>
                    <Link
                      to={`/product/${product._id}`}
                      className="btn-luxury text-sm px-6 py-3"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive repair and maintenance services for all your timepiece needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-900 mb-3">
                Mobile Repair Combos
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete mobile repair solutions with professional tools and quality spare parts
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-luxury group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-900 mb-3">
                Spare Parts
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Genuine spare parts for watches, clocks, and mobile devices with warranty
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-900 mb-3">
                Watch Repair
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert wrist watch repair services with precision tools and skilled technicians
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-900 mb-3">
                Wall Clock Repair
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional wall clock repair and maintenance for all types and brands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted expertise since 1996 with modern POS systems and professional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🚚</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-slate-900 mb-4">
                Established 1996
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Over 28 years of trusted service in timepiece repair and sales. We've built our reputation on quality, reliability, and customer satisfaction.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-blue-700 rounded-full flex items-center justify-center mx-auto shadow-luxury group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">💎</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-blue-700/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-slate-900 mb-4">
                Modern POS Systems
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Equipped with state-of-the-art Point of Sale systems for efficient transactions, inventory management, and customer service excellence.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🛡️</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-slate-900 mb-4">
                Trusted Service
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our qualified technicians provide expert repair services with genuine parts and comprehensive warranties for all your timepiece needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;