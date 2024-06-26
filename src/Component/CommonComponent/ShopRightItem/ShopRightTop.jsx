import React, { useState } from "react";
import { sortBy } from "../../../../Data/Data.js";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";

const ShopRightTop = ({ onPageOptn, onChangeLayout, changeIcon }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="cursor-pointer text-3xl" onClick={onChangeLayout}>
        {changeIcon ? <FaListUl /> : <IoGrid />}
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
            onChange={onPageOptn}
          >
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="27">27</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopRightTop;
