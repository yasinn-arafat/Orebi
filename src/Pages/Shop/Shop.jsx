import React from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
import ShopLeft from "../../Component/ShopComponent/ShopLeft/ShopLeft";
import ShopRight from "../../Component/ShopComponent/ShopRight/ShopRight";

const Shop = () => {
  return (
    <>
      <div className="py-14">
        <div className="container">
          <div>
            <div className="pb-6">
              <h2 className="font-DMsans text-5xl font-bold text-main-font-color">
                Products
              </h2>
            </div>
            <BreadCrumb />
          </div>
          <div className="flex pt-20">
            <ShopLeft className={"w-[23%]"} />
            <ShopRight className={"ml-7 w-[77%]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
