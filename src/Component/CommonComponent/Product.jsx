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
  productDescrip,
  changeIcon,
}) => {
  return (
    <>
      <div className={`${changeIcon ? "hover:shadow-xl" : null}`}>
        <div className="w-[296px] md:w-[300px] lg:w-[305px]">
          <div className="group relative left-[11.5px] overflow-hidden md:left-10 lg:left-0">
            <div className="absolute left-5 top-5">{badge}</div>
            <picture>
              <img src={image} alt={image} className="cursor-pointer" />
            </picture>

            {/* -------- Overlay ------ */}

            <div className="absolute bottom-[-42%] left-0 flex w-full flex-col gap-y-2 bg-lime-100  px-7 py-6 opacity-0 duration-200 ease-linear group-hover:bottom-0 group-hover:opacity-100">
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

          <div
            className={`${changeIcon ? "absolute left-[38%] top-[5%] z-10" : null}`}
          >
            <div className="pt-6">
              <div
                className={` ${changeIcon ? "pb-5" : "flex items-start justify-between"}`}
              >
                <h4 className="font-DMsans text-[18px] font-bold text-main-font-color">
                  {producttitle ? producttitle : "  Basic Crew Neck Tee"}
                </h4>
                <p
                  className={`font-DMsans text-base font-normal text-tertiary-font-color ${changeIcon ? "pt-5" : null}`}
                >
                  {productPrice ? productPrice : " $44.00"}
                </p>

                {changeIcon ? (
                  <p className="w-[84%] pt-5 font-DMsans text-base font-normal text-tertiary-font-color">
                    {productDescrip}
                  </p>
                ) : null}
              </div>
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
      </div>
    </>
  );
};

export default Product;
