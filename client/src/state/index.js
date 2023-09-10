import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  isCartOpen: false,
  cart: [],
  items: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loggedIn = action.payload.loggedIn;
    },
    setItems: (state, action) => {
      state.items = action.payload.items;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if(item.id === action.payload.id){
          item.count++;
        }
        return item;
      })
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if(item.id === action.payload.id  && item.count > 1){
          item.count--;
        }
        return item;
      })
    },
    setIsCartOpen: state => {
      state.isCartOpen = !state.isCartOpen;
    }
  },
});

export const { setLogin, setItems, addToCart, removeFromCart, increaseCount, decreaseCount, setIsCartOpen } = authSlice.actions;
export default authSlice.reducer;