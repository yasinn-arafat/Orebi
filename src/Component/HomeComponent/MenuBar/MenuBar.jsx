import React from "react";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

const MenuBar = () => {
  return (
    <>
      <div className="bg-secondery-bg-colorr py-6">
        <div className="container">
          <Flex className={"justify-between"}>
            <Flex className={"gap-x-3"}>
              <HiMiniBars3BottomLeft className="text-2xl" />
              <p className=" text-main-font-color text-sm font-DMsans font-normal">
                Shop by Category
              </p>
            </Flex>

            <Search placeholder={"Search Products"} />

            <Flex className={"gap-x-10"}>
              <Flex className={"gap-x-2"}>
                <div className="text-2xl">
                  <FaUser />
                </div>
                <div className="text-2xl">
                  <FaCaretDown />
                </div>
              </Flex>
              <div className="text-2xl">
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
