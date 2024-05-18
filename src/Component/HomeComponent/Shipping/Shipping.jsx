import React from "react";
import ShippingItem from "../../CommonComponent/ShippingItem";
import { PiNumberTwoBold } from "react-icons/pi";
import { IoReload } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
const data = [
  { id: 1, icon: <PiNumberTwoBold />, title: "Two years warranty" },
  { id: 2, icon: <FaTruck />, title: "Free shipping" },
  { id: 3, icon: <IoReload />, title: "Return policy in 30 days" },
];

const Shipping = () => {
  return (
    <>
      <div className="border-b-2 border-[#F0F0F0] px-4 py-5 sm:py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-y-3 sm:flex-row">
            {data?.map((item) => (
              <ShippingItem
                key={item.id}
                className={"flex items-center justify-between gap-x-3"}
              >
                <span className="text-xl sm:text-3xl">{item.icon}</span>
                <p className="font-DMsans  text-base font-normal text-secondery-font-color">
                  {item.title}
                </p>
              </ShippingItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
