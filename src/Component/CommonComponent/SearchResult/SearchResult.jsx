import React from "react";

const SearchResult = ({ className, searchResult, onToProduct }) => {
  return (
    <>
      <div className={className}>
        {searchResult?.map((product) => (
          <div
            onClick={() => onToProduct(product.id)}
            className="h-full w-[550px] cursor-pointer rounded-sm border-b-2 border-b-gray-300 bg-gray-200 px-3 py-2 hover:bg-gray-400 md:w-[350px] lg:w-[400px]"
            key={product.id}
          >
            <span>{product.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
