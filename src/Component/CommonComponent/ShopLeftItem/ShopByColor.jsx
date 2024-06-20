import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const ShopByColor = ({
  categoryTitle,
  shopCatagoryItem,
  color,
  dropDownIs,
  dropDownExpandIs,
  className,
}) => {
  const [showShopColor, setshowShopColor] = useState(dropDownExpandIs);

  //   HandleShopColor Functionality
  const HandleShopColor = () => {
    setshowShopColor(!showShopColor);
  };

  return (
    <>
      <div className={`mt-8 ${className}`}>
        <div
          className="mb-4 flex cursor-pointer items-center justify-between"
          onClick={HandleShopColor}
        >
          <h3 className="font-DMsans text-xl font-bold text-main-font-color">
            {categoryTitle ? categoryTitle : "Shop by Color"}
          </h3>
          {dropDownIs && (
            <div className="pr-3 text-xl">
              {showShopColor ? <FaCaretUp /> : <FaCaretDown />}
            </div>
          )}
        </div>

        {showShopColor && (
          <div>
            {shopCatagoryItem?.map((item) => (
              <div
                className="cursor-pointer border-b-2 border-b-[#F0F0F0] py-4"
                key={item.id}
              >
                <div className="flex items-center gap-x-[10px]">
                  {color && (
                    <div
                      className="h-3 w-3 rounded-full bg-red-500"
                      style={{ backgroundColor: `${item.colorCode}` }}
                    ></div>
                  )}

                  <h2 className="text-bases font-DMsans font-normal text-tertiary-font-color">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopByColor;
