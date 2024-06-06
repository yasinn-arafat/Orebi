import React, { useState } from "react";
import { FaXmark, FaPlus } from "react-icons/fa6";

const ProductDropDown = ({ DropDownTitle }) => {
  const [dropDown, setdropDown] = useState(false);
  // handleDropDown Functionality
  const handleDropDown = () => {
    setdropDown(!dropDown);
  };
  return (
    <>
      <div>
        <div className="w-1/2">
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={handleDropDown}
          >
            <h2 className="font-DMsans text-base font-bold text-main-font-color">
              {DropDownTitle ? DropDownTitle : "FEATURES & DETAILS"}
            </h2>
            <span>{dropDown ? <FaXmark /> : <FaPlus />}</span>
          </div>
          {dropDown && (
            <div>
              <p className="pr-3 pt-6 font-DMsans text-base font-normal text-tertiary-font-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDropDown;
