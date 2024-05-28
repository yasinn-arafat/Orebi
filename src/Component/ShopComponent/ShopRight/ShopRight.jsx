import React, { createContext, useState } from "react";
import ShopRightTop from "../../CommonComponent/ShopRightItem/ShopRightTop";
import ShopBottom from "../../CommonComponent/ShopRightItem/ShopRightBottom";

export const ShopRightPageContext = createContext();

const ShopRight = ({ className }) => {
  const [showPerPageItem, setshowPerPageItem] = useState(9);

  // HandlePageOptn Functionality

  const HandlePageOptn = (e) => {
    setshowPerPageItem(e.target.value);
  };

  return (
    <>
      <div className={className}>
        <div>
          <ShopRightTop onPageOptn={HandlePageOptn} />
          <ShopRightPageContext.Provider value={showPerPageItem}>
            <ShopBottom />
          </ShopRightPageContext.Provider>
        </div>
      </div>
    </>
  );
};

export default ShopRight;
