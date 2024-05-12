import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isShow, setisShow] = useState(false);

  // HandelNavICon Functionality

  const HandelNavICon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <nav className="bg-main-bg-color px-4 py-8 md:px-3 lg:px-4 ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>

            <div>
              <ul
                className={`absolute flex flex-col items-center  gap-x-9 divide-y divide-[#4b4949] bg-main-font-color duration-200 ease-linear sm:static sm:flex-row sm:divide-y-0 sm:bg-transparent ${isShow ? "left-0 top-[64px] z-10  w-full   text-center " : "left-[-100%] top-[64px] z-10  w-full text-center "}`}
              >
                <li className="menu_list w-full cursor-pointer py-2 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <a href="#">Home</a>
                </li>
                <li className="menu_list w-full cursor-pointer py-2 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <a href="#">Shop</a>
                </li>
                <li className="menu_list w-full cursor-pointer py-2 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <a href="#">About</a>
                </li>
                <li className="menu_list w-full cursor-pointer py-2 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <a href="#">Contacts</a>
                </li>
                <li className="menu_list w-full cursor-pointer py-2 text-[#b3b3b3] hover:text-main-bg-color sm:py-0 sm:text-tertiary-font-color sm:hover:text-main-font-color">
                  <a href="#">Journal</a>
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
