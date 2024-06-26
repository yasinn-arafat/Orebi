import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import MyAccount from "./Pages/MyAccount/MyAccount";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details/:productID" element={<ProductDetails />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
