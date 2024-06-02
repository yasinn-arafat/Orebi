import { configureStore } from "@reduxjs/toolkit";
import ProductSilce from "../AllSlice/ProductSilce/ProductSilce";

export const store = configureStore({
  reducer: {
    product: ProductSilce,
  },
});
