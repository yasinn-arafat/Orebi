import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Flex from "../Flex";

const FooterBottom = () => {
  return (
    <>
      <Flex className="pt-14 justify-between">
        <Flex className={"gap-x-6 text-2xl"}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </Flex>
        <div>
          <p className="text-sm text-[#6D6D6D] font-DMsans font-normal">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
      </Flex>
    </>
  );
};

export default FooterBottom;
