import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      console.log('Dispatching Add to Cart:', { userId, productId, quantity }); // Debug log
      const response = await axios.post('http://localhost:3000/api/cart/add', {
        userId,
        productId,
        quantity,
      });
      console.log('Add to Cart Response:', response.data.cart); // Debug log
      return response.data.cart; // Updated to handle detailed cart response
    } catch (error) {
      console.error('Add to Cart Error:', error.response.data); // Debug log
      return rejectWithValue(error.response.data);
    }
  }
);

export const syncCart = createAsyncThunk(
  'cart/syncCart',
  async ({ userId, cart }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/update', {
        userId,
        cart,
      });
      return response.data.cart;
    } catch (error) {
      console.error('Sync Cart Error:', error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from local storage:', error);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to local storage:', error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(), // Load cart from local storage
    status: 'idle',
    error: null,
  },
  reducers: {
    updateCart(state, action) {
      state.items = action.payload; // Update cart items directly
      saveCartToLocalStorage(state.items); // Save to local storage
    },
    setCart(state, action) { // Add a new reducer to set the cart
      state.items = action.payload;
      saveCartToLocalStorage(state.items); // Save to local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Update cart items with the response
        saveCartToLocalStorage(state.items); // Save to local storage
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(syncCart.fulfilled, (state, action) => {
        state.items = action.payload; // Update cart items with the response
        saveCartToLocalStorage(state.items); // Save to local storage
      });
  },
});

export const { updateCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
