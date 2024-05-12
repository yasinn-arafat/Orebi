import React from "react";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const MenuBar = () => {
  return (
    <>
      <div className="bg-secondery-bg-colorr px-4 py-5 md:px-3 md:py-6 lg:px-4">
        <div className="container">
          <Flex className={"justify-between"}>
            <Flex className={"gap-x-3"}>
              <HiMiniBars3BottomLeft className="cursor-pointer text-2xl" />
              <p className="hidden font-DMsans text-sm font-normal text-main-font-color md:block">
                Shop by Category
              </p>
            </Flex>

            <Search placeholder={"Search Products"} />

            <Flex className={"gap-x-6 sm:gap-x-10"}>
              <Flex className={"gap-x-1 md:gap-x-2"}>
                <div className="cursor-pointer text-xl sm:text-2xl">
                  <FaUser />
                </div>
                <div className="hidden cursor-pointer text-xl sm:text-2xl md:block">
                  <FaCaretDown />
                </div>
              </Flex>
              <div className="cursor-pointer text-xl sm:text-2xl">
                <FaShoppingCart />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
