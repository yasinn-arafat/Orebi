import React from "react";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
import SaleInfo from "../../Component/HomeComponent/SaleInfo/SaleInfo";
import NewArival from "../../Component/HomeComponent/NewArival/NewArival";
import PhoneOfTheYear from "../../Component/HomeComponent/PhoneOfTheYear/PhoneOfTheYear";
import {
  NewProductData,
  BestSellingData,
  SpecialProductData,
} from "/Data/Data.js";

const Home = () => {
  return (
    <>
      <Banner />
      <Shipping />
      <SaleInfo />
      <NewArival heading={"New Arrivals"} ProductData={NewProductData} />
      <NewArival heading={"Our Bestsellers"} ProductData={BestSellingData} />
      <PhoneOfTheYear />
      <NewArival heading={"Special Offers"} ProductData={SpecialProductData} />
    </>
  );
};

export default Home;
