import { configureStore } from "@reduxjs/toolkit";
import ProductSilce from "../AllSlice/ProductSilce/ProductSilce.js";
import AddToCartSlice, {
  getTotal,
} from "../AllSlice/AddToCartSlice/AddToCartSlice.js";

export const store = configureStore({
  reducer: {
    cart: AddToCartSlice,
    product: ProductSilce,
  },
});

store.dispatch(getTotal());
