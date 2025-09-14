import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import axios from 'axios';

// Global error handler to prevent unwanted error toasts
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only log errors, don't show toasts for automatic API calls
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
