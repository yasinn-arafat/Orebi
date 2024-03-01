import React from "react";
import ShippingItem from "../CommonComponent/ShippingItem";

const Shipping = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between">
            <ShippingItem></ShippingItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
