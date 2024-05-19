import React from "react";
import Button from "./Button";

const Overlay = ({
  className,
  titleStyle,
  title,
  discountStyle,
  uptoStyle,
  upto,
  discount,
  saleStyle,
  sale,
}) => {
  return (
    <>
      <div className={className}>
        <h3
          className={
            titleStyle
              ? titleStyle
              : "font-DMsans text-4xl font-bold text-main-font-color"
          }
        >
          {title ? title : "Phones Sale"}
        </h3>
        <div className="pb-4 pt-4 sm:pt-1 lg:pb-8 lg:pt-6">
          <span
            className={
              uptoStyle
                ? uptoStyle
                : "font-DMsans text-base font-normal text-main-font-color opacity-70"
            }
          >
            {upto ? upto : "Up to"}
          </span>
          <span
            className={
              discountStyle
                ? discountStyle
                : "font-DMsans text-[40px] font-bold text-main-font-color"
            }
          >
            {discount ? discount : " 30% "}
          </span>
          <span
            className={
              saleStyle
                ? saleStyle
                : "font-DMsans text-base font-normal text-main-font-color opacity-70"
            }
          >
            {sale ? sale : "sale for all phones!"}
          </span>
        </div>
        <Button
          className={
            "block bg-main-font-color px-10 py-3 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear md:px-14 md:py-4 lg:hover:translate-x-2"
          }
          title={"Shop Now"}
        />
      </div>
    </>
  );
};

export default Overlay;
