import React from "react";
import Flex from "./Flex";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder }) => {
  return (
    <>
      <Flex>
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className="w-[600px] py-5 pl-5 placeholder:text[#C4C4C4] placeholder:text-sm placeholder:font-DMsans placeholder:font-normal"
          />
          <div className="absolute top-1/2 right-0 -translate-y-2/4 pr-5 text-2xl">
            <FaSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Search;
