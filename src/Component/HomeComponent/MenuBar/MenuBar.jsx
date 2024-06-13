import React, { useEffect, useRef, useState } from "react";
import Flex from "../../CommonComponent/Flex";
import Search from "../../CommonComponent/Search";
import Button from "../../CommonComponent/Button";
import { Link, useNavigate } from "react-router-dom";
import SpecialProduct3 from "../../../assets/Image2.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaUser, FaCaretDown, FaCaretUp, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotal,
  removeCartItem,
} from "../../../Redux/AllSlice/AddToCartSlice/AddToCartSlice";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);
  const [showUSer, setshowUser] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const Menuref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  /**
   * todo : Take all product from redux
   */

  const { cartItem, totalAmount, totalItem } = useSelector(
    (state) => state.cart,
  );

  // handleNavigateToCart Functionality

  const handleNavigateToCart = () => {
    navigate("/cart");
    setshowCart(false);
  };

  // handleNavigateToCheckout Functionality
  const handleNavigateToCheckout = () => {
    navigate("/checkout");
    setshowCart(false);
  };

  // Call useEffect to update Total item & Total Amount
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartItem]);

  // handleRemoveCartItem Functionality

  const handleRemoveCartItem = (item) => {
    dispatch(removeCartItem(item));
  };

  return (
    <>
      <div className="bg-secondery-bg-colorr px-4 py-4" ref={Menuref}>
        <div className="container">
          <Flex className={"justify-between"}>
            <Flex className={"gap-x-3"}>
              <div onClick={HandleCatagories}>
                <HiMiniBars3BottomLeft
                  className={`cursor-pointer text-2xl ${showCatagories && "text-blue-600"}`}
                />
              </div>

              <ul
                className={`absolute z-10 w-full divide-y divide-[#4b4949] bg-main-font-color text-center duration-200 ease-linear sm:w-[263px] sm:text-start ${showCatagories ? "left-0 top-[135px] sm:left-[42px] sm:top-[140px] md:left-5 md:top-[152px] xl:left-[74px]" : "left-[-100%] top-[135px]"}`}
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
                  className={`absolute divide-y divide-[#4b4949] border border-[#F0F0F0] text-center duration-500 ease-linear ${showUSer ? "right-0 top-[135px] z-10 w-full sm:right-[90px] sm:top-[140px] sm:w-[200px] md:right-[83px] md:top-[152px] xl:right-[140px]" : "right-[-100%]"}`}
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
                className={`relative cursor-pointer text-xl md:text-2xl ${showCart && "text-blue-600"}`}
                onClick={Handlecart}
              >
                <FaShoppingCart />
                <span className="absolute bottom-[16px] left-[16px] flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative flex h-5 w-5 flex-col items-center justify-center rounded-full bg-sky-500 font-DMsans text-xs font-normal text-main-bg-color">
                    {totalItem}
                  </span>
                </span>
              </div>

              {showCart && (
                <div
                  className={`absolute top-[135px] z-10 w-full bg-main-bg-color duration-100 ease-linear sm:top-[140px] sm:w-[360px] md:top-[152px] ${showCart ? "right-0 top-[135px] sm:right-[34px] sm:top-[140px] md:right-[50px] md:top-[152px] lg:right-[111px] xl:right-16" : null}`}
                >
                  <div className="h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-secondery-bg-colorr scrollbar-thumb-main-font-color">
                    {cartItem?.map((item) => (
                      <div
                        className="flex items-center gap-x-[71px] bg-[#F5F5F3] p-5 sm:gap-x-[68px]"
                        key={item.id}
                      >
                        <div className="flex items-center gap-x-5">
                          <div className="h-[80px] w-[80px] bg-white object-cover">
                            <picture>
                              <img
                                src={
                                  item.thumbnail
                                    ? item.thumbnail
                                    : { SpecialProduct3 }
                                }
                                alt={
                                  item.thumbnail
                                    ? item.thumbnail
                                    : { SpecialProduct3 }
                                }
                              />
                            </picture>
                          </div>
                          <div className="font-DMsans text-sm font-bold text-main-font-color">
                            <h3 className="pb-3">
                              {item.title
                                ? `${item.title.slice(0, 13)}..`
                                : "Title"}
                            </h3>
                            <p>{item.price ? `$${item.price}` : "$0.00"}</p>
                          </div>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleRemoveCartItem(item)}
                        >
                          <FaXmark />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-main-bg-color p-5">
                    <div>
                      <p className="pb-3 font-DMsans text-base font-bold text-tertiary-font-color">
                        Subtotal:
                        <span className="text-main-font-color">
                          {totalAmount ? `$${totalAmount}` : "$0.00"}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        title={"View Cart"}
                        onClickFunction={handleNavigateToCart}
                        className={
                          "h-[49px] w-[147px] border border-[#2B2B2B] bg-transparent font-DMsans text-sm font-bold"
                        }
                      />
                      <Button
                        title={"Checkout"}
                        onClickFunction={handleNavigateToCheckout}
                        className={
                          "h-[50px] w-[148px] bg-main-font-color font-DMsans text-sm font-bold text-main-bg-color"
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
