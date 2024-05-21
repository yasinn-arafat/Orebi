import React from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";

const Shop = () => {
  return (
    <>
      <div className="bg-yellow-800 py-16">
        <div className="container">
          <div className="bg-green-400">
            <div className="pb-6">
              <h2 className="font-DMsans text-5xl font-bold text-main-font-color">
                Products
              </h2>
            </div>
            <BreadCrumb />
          </div>
          <div className="flex bg-purple-400 pt-20">
            <div className="h-48 w-1/4 bg-red-400"></div>
            <div className="h-48 w-9/12 bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
