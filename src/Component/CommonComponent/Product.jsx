import React from "react";
import Flex from "../CommonComponent/Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const Product = ({
  colorVarient,
  badge,
  image,
  producttitle,
  productPrice,
  colorVarientTitle,
}) => {
  return (
    <>
      <div>
        <div className="w-[296px] md:w-[300px] lg:w-[305px]">
          <div className="group relative left-[11.5px] overflow-hidden md:left-10 lg:left-0">
            <div className="absolute left-5 top-5">{badge}</div>
            <picture>
              <img src={image} alt={image} className="cursor-pointer" />
            </picture>

            {/* -------- Overlay ------ */}

            <div className=" absolute bottom-[-42%] left-0 flex w-full flex-col gap-y-2 bg-main-bg-color px-7 py-6 opacity-0 duration-200 ease-linear group-hover:bottom-0 group-hover:opacity-100">
              <div className="cursor-pointer">
                <Flex className={"justify-end gap-x-4"}>
                  <h5 className="menu_list text-base">Add to List</h5>
                  <span>
                    <FaHeart />
                  </span>
                </Flex>
              </div>
              <div className="cursor-pointer">
                <Flex className={"justify-end gap-x-4"}>
                  <h5 className="menu_list text-base">Compare</h5>
                  <span>
                    <FaArrowsRotate />
                  </span>
                </Flex>
              </div>
              <div className="cursor-pointer">
                <Flex className={"justify-end gap-x-4"}>
                  <h5 className="menu_list text-base">Add to Cart</h5>
                  <span>
                    <FaShoppingCart />
                  </span>
                </Flex>
              </div>
            </div>

            {/* -------- Overlay ------ */}
          </div>
          <div className="pt-6">
            <Flex className={"justify-between"}>
              <h4 className="font-DMsans text-[18px] font-bold text-main-font-color">
                {producttitle ? producttitle : "  Basic Crew Neck Tee"}
              </h4>
              <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                {productPrice ? productPrice : " $44.00"}
              </p>
            </Flex>
          </div>
          <div className="mt-4">
            {colorVarient && (
              <span className="font-DMsans text-base font-normal text-tertiary-font-color">
                {colorVarientTitle ? colorVarientTitle : null}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
