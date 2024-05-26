import React from "react";
import ShopRightTop from "../../CommonComponent/ShopRightItem/ShopRightTop";
import ShopBottom from "../../CommonComponent/ShopRightItem/ShopRightBottom";

const ShopRight = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div>
          <ShopRightTop />
          <ShopBottom />
        </div>
      </div>
    </>
  );
};

export default ShopRight;
