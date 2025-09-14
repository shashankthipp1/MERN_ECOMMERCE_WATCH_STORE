import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';

const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
  loading: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        loading: false
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        loading: false
      };
    case 'UPDATE_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        loading: false
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        loading: false
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { isAuthenticated } = useAuth();

  const fetchCart = useCallback(async () => {
    if (!isAuthenticated) {
      dispatch({ type: 'CLEAR_CART' });
      return;
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.get('/api/cart');
      dispatch({
        type: 'SET_CART',
        payload: {
          items: response.data.items,
          total: response.data.total
        }
      });
    } catch (error) {
      console.error('Error fetching cart:', error);
      dispatch({ type: 'CLEAR_CART' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [isAuthenticated]);

  // Fetch cart when user logs in
  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [isAuthenticated, fetchCart]);

  const addToCart = async (productId, quantity = 1) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return { success: false, message: 'Please login to add items to cart' };
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.post('/api/cart/add', {
        productId,
        quantity
      });
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          items: response.data.cart.items,
          total: response.data.cart.total
        }
      });
      toast.success('Item added to cart!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add to cart';
      // Show error toast for actual add to cart attempts
      toast.error(message);
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, message };
    }
  };

  const updateCartItem = async (productId, quantity) => {
    if (!isAuthenticated) {
      return { success: false, message: 'Please login to update cart' };
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.put('/api/cart/update', {
        productId,
        quantity
      });
      dispatch({
        type: 'UPDATE_CART',
        payload: {
          items: response.data.cart.items,
          total: response.data.cart.total
        }
      });
      toast.success('Cart updated!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update cart';
      // Don't show error toasts to prevent blinking
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, message };
    }
  };

  const removeFromCart = async (productId) => {
    if (!isAuthenticated) {
      return { success: false, message: 'Please login to remove from cart' };
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.delete(`/api/cart/remove/${productId}`);
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
          items: response.data.cart.items,
          total: response.data.cart.total
        }
      });
      toast.success('Item removed from cart!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to remove from cart';
      // Don't show error toasts to prevent blinking
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, message };
    }
  };

  const clearCart = async () => {
    if (!isAuthenticated) {
      dispatch({ type: 'CLEAR_CART' });
      return { success: true };
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await axios.delete('/api/cart/clear');
      dispatch({ type: 'CLEAR_CART' });
      toast.success('Cart cleared!');
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to clear cart';
      // Don't show error toasts to prevent blinking
      dispatch({ type: 'SET_LOADING', payload: false });
      return { success: false, message };
    }
  };

  const getCartItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartItem = (productId) => {
    return state.items.find(item => item.productId === productId);
  };

  const value = {
    ...state,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart,
    getCartItemCount,
    getCartItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
