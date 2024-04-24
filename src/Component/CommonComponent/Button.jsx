import React from "react";

const Button = ({ className, title }) => {
  return (
    <>
      <button
        className={
          className
            ? className
            : "px-14 py-4 bg-main-font-color text-main-bg-color text-sm font-DMsans font-bold"
        }
      >
        {title ? title : "Shop Now"}
      </button>
    </>
  );
};

export default Button;
