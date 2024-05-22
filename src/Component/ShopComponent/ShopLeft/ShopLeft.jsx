import React from "react";
import ShopCategorys from "../../CommonComponent/ShopCategory/ShopCategory";
import { categories } from "../../../../Data/Data";

const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <ShopCategorys categoriesData={categories ? categories : []} />
      </div>
    </div>
  );
};

export default ShopLeft;
