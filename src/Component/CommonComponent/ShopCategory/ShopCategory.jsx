import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ShopCategorys = ({ categoriesData, categoryTitle }) => {
  const [showShopCategories, setshowShopCategories] = useState(false);

  // HandleShopCategories Functionality
  const HandleShopCategories = () => {
    setshowShopCategories(!showShopCategories);
    console.log(setshowShopCategories);
  };

  return (
    <>
      <div>
        <div>
          <h3 className="pb-4 font-DMsans text-xl font-bold text-main-font-color">
            {categoryTitle ? categoryTitle : "Shop by Category"}
          </h3>
        </div>

        <div>
          {categoriesData?.map((item, index) =>
            item.subCategoreis.length ? (
              <div
                className="flex cursor-pointer justify-between border-b-2 border-b-[#F0F0F0] py-4"
                key={item}
                onClick={HandleShopCategories}
              >
                <h2 className="text-bases font-DMsans font-normal text-tertiary-font-color">
                  {item.title}
                </h2>
                <div className="pr-3 text-tertiary-font-color">
                  <FaPlus />
                </div>
              </div>
            ) : (
              <div
                className=" cursor-pointer border-b-2 border-b-[#F0F0F0] py-4"
                key={index}
              >
                <h2 className="text-bases font-DMsans font-normal text-tertiary-font-color">
                  {item.title}
                </h2>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCategorys;
