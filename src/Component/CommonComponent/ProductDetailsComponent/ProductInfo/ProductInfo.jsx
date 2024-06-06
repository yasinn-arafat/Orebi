import React from "react";
import { HiOutlinePlus, HiOutlineMinusSm } from "react-icons/hi";
import Button from "../../../CommonComponent/Button";
import ProductDropDown from "../ProductDropDown/ProductDropDown";
import ProductReview from "../ProductReview/ProductReview";

const ProductInfo = ({ productstock, productDescription }) => {
  const colorItem = [
    { id: 1, colorCode: "#979797" },
    { id: 2, colorCode: "#FF8686" },
    { id: 3, colorCode: "#7ED321" },
    { id: 4, colorCode: "#B6B6B6" },
    { id: 5, colorCode: "#15CBA5" },
  ];

  return (
    <>
      <div className="mt-8 flex flex-col gap-y-6">
        <div className="flex items-center gap-x-[55px]">
          <h2 className="font-DMsans text-base font-bold text-main-font-color">
            COLOR:
          </h2>
          <div className="flex items-center gap-x-3">
            {colorItem?.map((color) => (
              <div
                className="h-5 w-5 cursor-pointer rounded-full hover:scale-150"
                style={{ backgroundColor: color.colorCode }}
                key={color.id}
              ></div>
            ))}
          </div>
        </div>
        {/* {Size Component} */}
        <div className="flex items-center gap-x-[76.5px]">
          <h3 className="font-DMsans text-base font-bold text-main-font-color">
            SIZE:
          </h3>
          <div>
            <select
              name="productSize"
              id="productSize"
              className="w-[130px] border-2 border-[#F0F0F0] px-1 py-2 font-DMsans text-base font-normal text-tertiary-font-color"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
        {/* {Size Component} */}
        {/* {Quantity Component} */}
        <div className="flex items-center gap-8">
          <h3 className="font-DMsans text-base font-bold text-main-font-color">
            QUANTITY:
          </h3>

          <div className=" w-[130px] border-2 border-[#F0F0F0] py-2">
            <div className="flex items-center justify-center gap-x-7 font-DMsans text-base font-normal text-tertiary-font-color">
              <span>
                <HiOutlineMinusSm />
              </span>
              <p>1</p>
              <span>
                <HiOutlinePlus />
              </span>
            </div>
          </div>
        </div>
        {/* {Quantity Component} */}
        {/* {Stock Component} */}
        <div>
          <hr className="w-1/2" />
          <div className="flex items-center gap-8 py-4 ">
            <h3 className="font-DMsans text-base font-bold text-main-font-color">
              STATUS:
            </h3>
            <div>
              <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                {productstock} In stock
              </p>
            </div>
          </div>
          <hr className="w-1/2" />
        </div>
        {/* {Stock Component} */}
        {/* {Wishlist & Cart btn Component} */}
        <div className="flex items-center gap-5">
          <div>
            <Button
              title={"Add to Wish List"}
              className={
                "w-48 rounded border border-main-font-color py-3 font-DMsans text-sm font-bold text-main-font-color"
              }
            />
          </div>
          <div>
            <Button
              title={"Add to Cart"}
              className={
                "w-48 rounded border border-main-font-color bg-main-font-color py-3 font-DMsans text-sm font-bold text-main-bg-color"
              }
            />
          </div>
        </div>
        <hr className="w-1/2" />
        {/* {Wishlist & Cart btn Component} */}
        {/* {DropDown Component} */}
        <div className="flex flex-col gap-y-5">
          <ProductDropDown DropDownTitle={"FEATURES & DETAILS"} />
          <hr className="w-1/2" />
          <ProductDropDown DropDownTitle={"SHIPPING & RETURNS"} />
          <hr className="w-1/2" />
        </div>
        {/* {DropDown Component} */}
        {/* {Review Component} */}
        <ProductReview description={productDescription} />
        {/* {Review Component} */}
      </div>
    </>
  );
};

export default ProductInfo;
