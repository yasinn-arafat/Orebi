import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ShopCategorys = ({ categoriesData, categoryTitle }) => {
  const [showShopCategory, setshowShopCategory] = useState(
    categoriesData.map(() => false),
  );

  const HandleShopCategories = (idx) => {
    setshowShopCategory((previousState) => {
      return previousState.map((value, index) =>
        idx === index ? !value : false,
      );
    });
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
              <div key={item.id}>
                <div
                  className="flex cursor-pointer justify-between border-b-2 border-b-[#F0F0F0] py-4"
                  onClick={() => HandleShopCategories(index)}
                >
                  <h2 className="text-bases font-DMsans font-normal text-tertiary-font-color">
                    {item.title}
                  </h2>
                  <div className="pr-3 text-tertiary-font-color">
                    <FaPlus />
                  </div>
                </div>

                <div>
                  {showShopCategory[index] &&
                    item.subCategoreis.map((subItem) => (
                      <div
                        className="border-b-2 border-b-[#F0F0F0] py-2"
                        key={subItem.id}
                      >
                        <h3 className="text-bases cursor-pointer pl-3 font-DMsans font-normal text-tertiary-font-color">
                          {subItem.title}
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div
                className="cursor-pointer border-b-2 border-b-[#F0F0F0] py-4"
                key={item.title}
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
