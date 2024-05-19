import React from "react";
import Home from "./Pages/Home/Home";
import RootLayout from "./Component/CommonComponent/RootLayout/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
