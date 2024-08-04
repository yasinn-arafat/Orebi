import React from "react";

const SearchResult = ({ className, searchResult, onToProduct }) => {
  return (
    <>
      <div className={className}>
        {searchResult?.map((product) => (
          <div
            onClick={() => onToProduct(product.id)}
            className="h-full w-[550px] max-w-[600px] cursor-pointer rounded-sm border-b-2 border-b-gray-300 bg-gray-200 px-3 py-2 hover:bg-gray-400"
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
