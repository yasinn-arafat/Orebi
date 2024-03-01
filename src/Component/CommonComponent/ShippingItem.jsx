import React from "react";

const ShippingItem = ({ className, children }) => {
  return (
    <>
      <div className="flex items-center gap-x-4">{children}</div>
    </>
  );
};

export default ShippingItem;
