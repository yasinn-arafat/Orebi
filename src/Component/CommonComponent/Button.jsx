import React from "react";

const Button = ({ className, title, icon, onClickFunction }) => {
  return (
    <>
      <button
        className={
          className
            ? className
            : "bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
        }
        onClick={onClickFunction}
      >
        {icon}
        {title ? title : "Shop Now"}
      </button>
    </>
  );
};

export default Button;
