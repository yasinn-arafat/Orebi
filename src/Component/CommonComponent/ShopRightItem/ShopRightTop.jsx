import React from "react";
import { sortBy } from "../../../../Data/Data.js";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";

const ShopRightTop = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-3xl">
        <IoGrid />
      </div>
      <div className="flex items-center gap-x-9">
        <div className="font-DMsans text-base font-normal text-tertiary-font-color">
          <span className="pr-2">Sort by:</span>
          <select
            name="sort"
            id="sort"
            className="min-w-[239px] cursor-pointer border-2 border-[#F0F0F0] p-2"
          >
            <option value="Featured">Featured</option>
            {sortBy?.map((sortItem) => (
              <option value={sortItem.sortTitle} key={sortItem.sortTitle}>
                {sortItem.sortTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="font-DMsans text-base font-normal text-tertiary-font-color">
          <span className="pr-2">Show:</span>
          <select
            name="show"
            id="show"
            className="min-w-[139px] cursor-pointer border-2 border-[#F0F0F0] p-2"
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopRightTop;
