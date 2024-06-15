import React from "react";
import Flex from "./Flex";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder, className }) => {
  return (
    <>
      <Flex>
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className={`placeholder:text[#C4C4C4] max-w-[600px] rounded-full py-3 pl-3 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal sm:w-[400px] sm:pl-5 md:w-[500px] md:py-5 lg:w-[600px] ${className}`}
          />
          <div className="absolute right-0 top-1/2 -translate-y-2/4 cursor-pointer pr-5 text-xl md:text-2xl">
            <FaSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Search;
