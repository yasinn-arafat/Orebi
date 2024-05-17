import React from "react";
import MenuBar from "../../HomeComponent/MenuBar/MenuBar";
import Header from "../../HomeComponent/Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
