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
}) => {
  return (
    <>
      <div>
        <div className="w-[305px] h-[396px]">
          <div className="relative overflow-hidden group">
            <div className="absolute top-5 left-5">{badge}</div>
            <picture>
              <img src={image} alt={image} />
            </picture>

            {/* -------- Overlay ------ */}

            <div className=" px-7 py-6 flex flex-col gap-y-2 absolute left-0 bottom-[-42%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 ease-linear duration-200 w-full bg-main-bg-color">
              <div className="cursor-pointer">
                <Flex className={"gap-x-4 justify-end"}>
                  <h5 className="menu_list text-base">Add to List</h5>
                  <span>
                    <FaHeart />
                  </span>
                </Flex>
              </div>
              <div className="cursor-pointer">
                <Flex className={"gap-x-4 justify-end"}>
                  <h5 className="menu_list text-base">Compare</h5>
                  <span>
                    <FaArrowsRotate />
                  </span>
                </Flex>
              </div>
              <div className="cursor-pointer">
                <Flex className={"gap-x-4 justify-end"}>
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
              <h4 className="text-main-font-color text-[18px] font-DMsans font-bold">
                {producttitle ? producttitle : "  Basic Crew Neck Tee"}
              </h4>
              <p className="text-tertiary-font-color text-base font-DMsans font-normal">
                {productPrice ? productPrice : " $44.00"}
              </p>
            </Flex>
          </div>
          <div className="mt-4">
            {colorVarient && (
              <span className="text-tertiary-font-color text-base font-DMsans font-normal">
                Black
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
