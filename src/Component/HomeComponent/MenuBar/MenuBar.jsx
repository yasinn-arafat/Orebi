import React, { useEffect, useRef, useState } from "react";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import Button from "../../CommonComponent/Button";
import { Link } from "react-router-dom";
import SpecialProduct3 from "../../../assets/Image2.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser, FaCaretDown, FaCaretUp, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);

  const [showUSer, setshowUser] = useState(false);

  const [showCart, setshowCart] = useState(false);
  const Menuref = useRef();

  // HandleCatagories Functionality

  const HandleCatagories = () => {
    setshowUser(false);
    setshowCart(false);
    setshowCatagories(!showCatagories);
  };

  // HandleUser Funtionality
  const HandleUser = () => {
    setshowCatagories(false);
    setshowCart(false);
    setshowUser(!showUSer);
  };

  // Handlecart Funtionality
  const Handlecart = () => {
    setshowCatagories(false);
    setshowUser(false);
    setshowCart(!showCart);
  };

  // Menuref Funtionality

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!Menuref.current.contains(e.target)) {
        setshowCatagories(false);
        setshowUser(false);
        setshowCart(false);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-secondery-bg-colorr px-4 py-5" ref={Menuref}>
        <div className="container">
          <Flex className={"justify-between"}>
            <Flex className={"gap-x-3"}>
              <div onClick={HandleCatagories}>
                <HiMiniBars3BottomLeft
                  className={`cursor-pointer text-2xl ${showCatagories && "text-blue-600"}`}
                />
              </div>

              <ul
                className={`absolute z-10 w-full divide-y divide-[#4b4949] bg-main-font-color text-center duration-200 ease-linear sm:w-[263px] sm:text-start ${showCatagories ? "left-0 top-[135px] sm:left-[42px] sm:top-[140px] md:left-5 md:top-[158px] xl:left-[74px]" : "left-[-100%] top-[156px]"}`}
              >
                <li className="menu_list w-full cursor-pointer py-4 pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                  <Link to={"/"}>Accesories</Link>
                </li>
                <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                  <Link to={"/"}>Furniture</Link>
                </li>
                <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear hover:text-main-bg-color ">
                  <Link to={"/"}>Electronics</Link>
                </li>
                <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear  hover:text-main-bg-color ">
                  <Link to={"/"}>Clothes</Link>
                </li>
                <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3]  ease-linear  hover:text-main-bg-color ">
                  <Link to={"/"}>Bags</Link>
                </li>
                <li className="menu_list w-full cursor-pointer py-4  pl-5 text-[#b3b3b3] duration-100 ease-linear  hover:text-main-bg-color ">
                  <Link to={"/"}>Home appliances</Link>
                </li>
              </ul>

              <p className="hidden font-DMsans text-sm font-normal text-main-font-color lg:block">
                Shop by Category
              </p>
            </Flex>

            <Search placeholder={"Search Products"} />

            <Flex>
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
                  className={`absolute divide-y divide-[#4b4949] text-center duration-500 ease-linear  ${showUSer ? "right-0 top-[135px] z-10 w-full sm:right-[90px] sm:top-[140px] sm:w-[200px] md:right-[83px] md:top-[158px] xl:right-[140px]" : "right-[-100%]"}`}
                >
                  <li className="cursor-pointer bg-[#2B2B2B] px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear hover:bg-main-bg-color hover:text-[#2B2B2B]">
                    <Link to={"/"}>My Account</Link>
                  </li>
                  <li className="cursor-pointer bg-[#2B2B2B] px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear hover:bg-main-bg-color hover:text-[#2B2B2B]">
                    <Link to={"/"}>Log Out</Link>
                  </li>
                </ul>
              )}

              <div
                className={`cursor-pointer text-xl md:text-2xl ${showCart && "text-blue-600"}`}
                onClick={Handlecart}
              >
                <FaShoppingCart />
              </div>

              <div
                className={`absolute top-[135px] z-10 w-full duration-100 ease-linear sm:top-[140px] sm:w-[360px] md:top-[158px] ${showCart ? "right-0 top-[135px] sm:right-[34px] sm:top-[140px] md:right-[50px] md:top-[158px] lg:right-[111px] xl:right-16" : "right-[-100%] "}`}
              >
                <div className="flex items-center gap-x-[71px] bg-[#F5F5F3] p-5 sm:gap-x-[75px]">
                  <div className="flex items-center gap-x-5">
                    <div className="h-[80px] w-[80px] border border-[#2B2B2B] object-cover">
                      <picture>
                        <img src={SpecialProduct3} alt={SpecialProduct3} />
                      </picture>
                    </div>
                    <div className="font-DMsans text-sm font-bold text-main-font-color">
                      <h3 className="pb-3">Black Smart Watch</h3>
                      <p>$44.00</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <FaXmark />
                  </div>
                </div>

                <div className="bg-main-bg-color p-5">
                  <div>
                    <p className="pb-3 font-DMsans text-base font-bold text-tertiary-font-color">
                      Subtotal:
                      <span className="text-main-font-color"> $44.00</span>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Button
                      title={"View Cart"}
                      className={
                        "h-[49px] w-[147px] border border-[#2B2B2B] bg-transparent font-DMsans text-sm font-bold"
                      }
                    />
                    <Button
                      title={"Checkout"}
                      className={
                        "h-[50px] w-[148px] bg-main-font-color font-DMsans text-sm font-bold text-main-bg-color"
                      }
                    />
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
