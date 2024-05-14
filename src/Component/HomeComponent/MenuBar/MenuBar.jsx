import React, { useState } from "react";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser, FaCaretDown, FaCaretUp, FaShoppingCart } from "react-icons/fa";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);

  const [showUSer, setshowUser] = useState(false);

  const [showCart, setshowCart] = useState(false);

  // HandleCatagories Functionality

  const HandleCatagories = () => {
    setshowCatagories(!showCatagories);
  };

  // HandleUser Funtionality
  const HandleUser = () => {
    setshowUser(!showUSer);
  };

  // HandleCart Functionality

  const HandleCart = () => {
    setshowCart(!showCart);
  };

  return (
    <>
      <div className="bg-secondery-bg-colorr px-4 py-5">
        <div className="container">
          <Flex className={"justify-between"}>
            <Flex className={"gap-x-3"}>
              <div onClick={HandleCatagories}>
                <HiMiniBars3BottomLeft
                  className={`cursor-pointer text-2xl ${showCatagories && "text-blue-600"}`}
                />
              </div>

              {showCatagories && (
                <ul
                  className={`absolute z-10 w-full divide-y divide-[#4b4949] bg-main-font-color text-center duration-200 ease-linear sm:w-[263px] sm:text-start ${showCatagories ? "left-0 top-[152px] w-full sm:left-[42px] sm:top-[156px] md:left-5 md:top-[172px] xl:left-[74px]" : "left-[-100%] top-[156px]"}`}
                >
                  <li className="menu_list w-full cursor-pointer py-4 pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                    <a href="#">Accesories</a>
                  </li>
                  <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                    <a href="#">Furniture</a>
                  </li>
                  <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear  hover:text-main-bg-color ">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear  hover:text-main-bg-color ">
                    <a href="#">Bags</a>
                  </li>
                  <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear  hover:text-main-bg-color ">
                    <a href="#">Home appliances</a>
                  </li>
                </ul>
              )}

              <p className="hidden font-DMsans text-sm font-normal text-main-font-color lg:block">
                Shop by Category
              </p>
            </Flex>

            <Search placeholder={"Search Products"} />

            <Flex className={""}>
              <div onClick={HandleUser} className="pr-5 sm:pr-10">
                <Flex
                  className={`cursor-pointer gap-x-1 md:gap-x-2 ${showUSer && "text-blue-600"}`}
                >
                  <div className={`text-xl md:text-2xl `}>
                    <FaUser />
                  </div>
                  <div className="hidden text-xl sm:block md:text-2xl">
                    {showUSer ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                </Flex>
              </div>

              {showUSer && (
                <ul
                  className={`absolute divide-y divide-[#4b4949] text-center duration-500 ease-linear  ${showUSer ? "right-0 top-[144px] z-10 w-full sm:right-[90px] sm:top-[153px] sm:w-[200px] md:right-[83px] md:top-[168px] xl:right-[140px]" : "right-[-100%]"}`}
                >
                  <li className="cursor-pointer bg-[#2B2B2B] px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear hover:bg-main-bg-color hover:text-[#2B2B2B]">
                    <a href="#">My Account</a>
                  </li>
                  <li className="cursor-pointer bg-[#2B2B2B] px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear hover:bg-main-bg-color hover:text-[#2B2B2B]">
                    <a href="#">Log Out</a>
                  </li>
                </ul>
              )}

              <div
                className="cursor-pointer text-xl md:text-2xl"
                onClick={HandleCart}
              >
                <FaShoppingCart />
              </div>

              <div></div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
