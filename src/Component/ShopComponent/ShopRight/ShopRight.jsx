import React, { createContext, useState } from "react";
import ShopRightTop from "../../CommonComponent/ShopRightItem/ShopRightTop";
import ShopRightBottom from "../../CommonComponent/ShopRightItem/ShopRightBottom";

export const ShopRightPageContext = createContext();

const ShopRight = ({ className }) => {
  const [showPerPageItem, setshowPerPageItem] = useState(9);
  const [gridLayout, setgridLayout] = useState(false);

  // HandlePageOptn Functionality

  const HandlePageOptn = (e) => {
    setshowPerPageItem(e.target.value);
  };

  // HandleChangeLayout Funtionalty

  const HandleChangeLayout = () => {
    setgridLayout(!gridLayout);
  };

  const ShopRightItem = {
    showPerPageItem,
    gridLayout,
  };

  return (
    <>
      <div className={className}>
        <div>
          <ShopRightTop
            onPageOptn={HandlePageOptn}
            onChangeLayout={HandleChangeLayout}
            changeIcon={gridLayout}
          />
          <ShopRightPageContext.Provider value={ShopRightItem}>
            <ShopRightBottom />
          </ShopRightPageContext.Provider>
        </div>
      </div>
    </>
  );
};

export default ShopRight;
