import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: {
    _id: '',
    title: '',
    cover: '',
    price: 0, // Ensure it starts as a number
    quantity: 1, // or some default value
    desc: '',
    e: '',
    r: '',
    n: '',
    b: '',
    measure: '',
    oldPrice: 0,
  },
  authData: {
    userInfo: null, // You can keep this for compatibility if needed
    authToken: null, // Replace userInfo with authToken
  },
  error: null,
};

export const bazarSlice = createSlice({
  name: 'bazar',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload._id
      );

      if (item) {
        console.log('Existing item _id:', item._id);
        item.quantity += action.payload.quantity;
      } else {
        console.log('New item _id:', action.payload._id);
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    setAuthData: (state, action) => {
      state.authData = action.payload;
    },

    clearAuthData: (state) => {
      state.authData = {
        userInfo: null,
        authToken: null,
      };
    },

    signInSuccess: (state, action) => {
      state.authData = {
        userInfo: action.payload,
        authToken: action.payload.token,
      };
      state.error = null;
    },

    signInFailure: (state, action) => {
      state.authData = {
        userInfo: null,
        authToken: null,
      };
      state.error = action.payload;
    },

    createAccountSuccess: (state, action) => {
      state.authData = {
        userInfo: action.payload,
        authToken: action.payload.token,
      };
      state.error = null;
    },

    createAccountFailure: (state, action) => {
      state.authData = {
        userInfo: null,
        authToken: null,
      };
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setAuthData,
  clearAuthData,
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  signInSuccess,
  signInFailure,
  createAccountSuccess,
  createAccountFailure,
  clearError,
} = bazarSlice.actions;
export default bazarSlice.reducer;
