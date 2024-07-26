import React from "react";

const SearchResult = ({ className }) => {
  return (
    <>
      <div>
        <div
          className={`max-w-[600px] rounded-sm bg-gray-300 p-3 sm:w-[400px] md:w-[500px] lg:w-[550px] ${className}`}
        >
          <span>product</span>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
