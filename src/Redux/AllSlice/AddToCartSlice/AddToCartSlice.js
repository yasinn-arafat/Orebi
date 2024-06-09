import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalItem: 0,
  totalAmount: 0,
};

export const AddToCartSlice = createSlice({
  name: "AddToCartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findindexNumbr = state.cartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findindexNumbr >= 0) {
        state.cartItem[findindexNumbr].cartQuantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
        toast.info(`${action.payload.title} again added to cart`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(temporary);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
        toast(`${action.payload.title} added to cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    removeCartItem: (state, action) => {
      const removeItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartItem = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      toast.error(`${action.payload.title} removed from cart`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    productIncrement: (state, action) => {
      const incremnetItem = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (incremnetItem >= 0) {
        state.cartItem[incremnetItem].cartQuantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
        toast.success(`${action.payload.title} added another one`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    productDecrement: (state, action) => {
      const decrementItem = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.cartItem[decrementItem].cartQuantity > 1) {
        state.cartItem[decrementItem].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
        toast.warn(`${action.payload.title} one item remove`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    getTotal: (state, action) => {
      const Total = state.cartItem.reduce(
        (totalCart, CartItem) => {
          const { price, cartQuantity } = CartItem;
          const cartTotalPrice = cartQuantity * price;

          totalCart.totalPrice += Math.round(cartTotalPrice);
          totalCart.TotalItem += cartQuantity;
          return totalCart;
        },
        { totalPrice: 0, TotalItem: 0 },
      );
      state.totalItem = Total.TotalItem;
      state.totalAmount = Total.totalPrice;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeCartItem,
  productIncrement,
  productDecrement,
  getTotal,
} = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
