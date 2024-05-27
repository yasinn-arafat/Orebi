import React, { useState } from "react";
import ShopRightTop from "../../CommonComponent/ShopRightItem/ShopRightTop";
import ShopBottom from "../../CommonComponent/ShopRightItem/ShopRightBottom";

const ShopRight = ({ className }) => {
  const [showPage, setshowPage] = useState(null);

  // HandlePageOptn Functionality

  const HandlePageOptn = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className={className}>
        <div>
          <ShopRightTop onPageOptn={HandlePageOptn} />
          <ShopBottom />
        </div>
      </div>
    </>
  );
};

export default ShopRight;
