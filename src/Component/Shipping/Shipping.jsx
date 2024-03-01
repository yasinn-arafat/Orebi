import React from "react";
import ShippingItem from "../CommonComponent/ShippingItem";
import { PiNumberTwoBold } from "react-icons/pi";

const Shipping = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex items-center justify-between">
            <ShippingItem descrip={"Two years warranty"} className={""}>
              <PiNumberTwoBold />
            </ShippingItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
