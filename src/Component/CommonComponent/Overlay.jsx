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
              : "text-[39px] text-main-font-color font-DMsans font-bold"
          }
        >
          {title ? title : "Phones Sale"}
        </h3>
        <div className="pt-5 pb-7">
          <span
            className={
              uptoStyle
                ? uptoStyle
                : "text-main-font-color text-base font-DMsans font-normal opacity-70"
            }
          >
            {upto ? upto : "Up to"}
          </span>
          <span
            className={
              discountStyle
                ? discountStyle
                : "text-main-font-color text-[40px] font-DMsans font-bold"
            }
          >
            {discount ? discount : " 30% "}
          </span>
          <span
            className={
              saleStyle
                ? saleStyle
                : "text-main-font-color text-base font-DMsans font-normal opacity-70"
            }
          >
            {sale ? sale : "sale for all phones!"}
          </span>
        </div>
        <Button
          className={
            "block px-14 py-4 bg-main-font-color text-main-bg-color text-sm font-DMsans font-bold"
          }
          title={"Shop Now"}
        />
      </div>
    </>
  );
};

export default Overlay;
