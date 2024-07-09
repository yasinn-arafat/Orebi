import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isShow, setisShow] = useState(false);

  // HandelNavICon Functionality

  const HandelNavICon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <nav className="bg-main-bg-color px-4 py-6 md:px-3 lg:px-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link to={"/"}>
                <picture>
                  <img src={Logo} alt={Logo} />
                </picture>
              </Link>
            </div>

            <div>
              <ul
                className={`absolute flex flex-col items-center  gap-x-9 divide-y divide-[#4b4949] bg-main-font-color duration-200 ease-linear sm:static sm:flex-row sm:divide-y-0 sm:bg-transparent ${isShow ? "left-0 top-[64px] z-10 w-full text-center " : "left-[-100%] top-[64px] z-10  w-full text-center "}`}
              >
                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/shop"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/about"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/checkout"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    Journal
                  </NavLink>
                </li>

                <li className="menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <NavLink
                    to={"/login"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "menu_list w-full cursor-pointer py-3 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color"
                        : isActive
                          ? "menu_list w-full cursor-pointer py-3 font-bold text-green-500 hover:text-main-bg-color sm:py-0 sm:text-green-500 sm:hover:text-green-500"
                          : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="hidden md:block"></div>

            <div className="cursor-pointer sm:hidden" onClick={HandelNavICon}>
              {isShow === true ? <FaXmark /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
