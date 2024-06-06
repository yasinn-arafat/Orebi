import React from "react";

const ProductDetailsTop = ({ EachPoductImg }) => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-wrap items-center justify-between gap-y-7">
          {EachPoductImg.images?.map((img) => (
            <div
              className="h-[450px] w-[49%] cursor-pointer rounded-lg shadow-xl"
              key={img}
            >
              <picture>
                <img src={img} alt={img} className="h-full w-full rounded-lg" />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsTop;
