import axios from 'axios';

// API Configuration
const API_BASE_URL = 'https://ecommerce-mern-stack-backend-o2u9.onrender.com';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  PROFILE: '/api/auth/profile',
  
  // Product endpoints
  PRODUCTS: '/api/products',
  PRODUCT_CATEGORIES: '/api/products/categories',
  PRODUCT_BY_ID: (id) => `/api/products/${id}`,
  ADMIN_PRODUCTS: '/api/products/admin/all',
  
  // Cart endpoints
  CART: '/api/cart',
  CART_ADD: '/api/cart/add',
  CART_UPDATE: '/api/cart/update',
  CART_REMOVE: (productId) => `/api/cart/remove/${productId}`,
  CART_CLEAR: '/api/cart/clear',
  
  // Order endpoints
  ORDERS: '/api/orders',
  ADMIN_ORDERS: '/api/orders/admin/all',
  DELIVERY_ORDERS: '/api/orders/delivery/assigned',
  DELIVERY_BOYS: '/api/orders/delivery/boys',
  ORDER_ASSIGN: (orderId) => `/api/orders/${orderId}/assign`,
  ORDER_STATUS: (orderId) => `/api/orders/${orderId}/status`,
};

export default apiClient;