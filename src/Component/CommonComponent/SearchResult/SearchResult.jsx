import React from "react";

const SearchResult = ({ className, searchResult, onToProduct }) => {
  return (
    <>
      <div className={className}>
        {searchResult?.map((product) => (
          <div
            onClick={() => onToProduct(product.id)}
            className="h-full max-w-[600px] cursor-pointer rounded-sm border-b-2 border-b-gray-300 bg-gray-200 px-3 py-2 hover:bg-gray-400 sm:w-[400px] md:w-[450px] lg:w-[550px]"
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
