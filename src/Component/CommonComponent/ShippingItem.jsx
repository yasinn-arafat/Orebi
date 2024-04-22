import React from "react";

const ShippingItem = ({ className, children }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default ShippingItem;
