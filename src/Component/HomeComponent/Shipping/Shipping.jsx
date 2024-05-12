import React from "react";
import ShippingItem from "../../CommonComponent/ShippingItem";
import { PiNumberTwoBold } from "react-icons/pi";
import { IoReload } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const Shipping = () => {
  return (
    <>
      <div className="border-b-2 border-[#F0F0F0] py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <ShippingItem
              className={"flex items-center justify-between gap-x-3"}
            >
              <span className="text-3xl">
                <PiNumberTwoBold />
              </span>
              <p className="font-DMsans text-base font-normal text-secondery-font-color">
                Two years warranty
              </p>
            </ShippingItem>

            <ShippingItem
              className={"flex items-center justify-between gap-x-4"}
            >
              <span className="text-3xl">
                <FaTruck />
              </span>
              <p className="font-DMsans text-base font-normal text-secondery-font-color">
                Free shipping
              </p>
            </ShippingItem>

            <ShippingItem
              className={"flex items-center justify-between gap-x-4"}
            >
              <span className="text-3xl">
                <IoReload />
              </span>
              <p className="font-DMsans text-base font-normal text-secondery-font-color">
                Return policy in 30 days
              </p>
            </ShippingItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
