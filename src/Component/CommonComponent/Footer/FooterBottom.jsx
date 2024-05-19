import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Flex from "../Flex";

const FooterBottom = () => {
  return (
    <>
      <Flex
        className={
          "flex-col justify-between gap-y-3 pt-14 sm:flex-row sm:gap-y-0"
        }
      >
        <Flex className={"gap-x-6 pb-4 text-2xl sm:pb-0"}>
          <a href="#" className="text-[#1877F2]">
            <FaFacebookF />
          </a>
          <a href="#" className="text-[#0077b5]">
            <FaLinkedinIn />
          </a>
          <a href="#" className=" text-[#F04470]">
            <FaInstagram />
          </a>
        </Flex>
        <div>
          <hr className="border-main-font-color pb-3 sm:hidden" />
          <p className="font-DMsans text-xs font-normal text-[#6D6D6D] sm:text-sm">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Flex>
    </>
  );
};

export default FooterBottom;
