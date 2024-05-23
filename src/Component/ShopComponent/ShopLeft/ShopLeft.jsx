import React from "react";
import ShopCategorys from "../../CommonComponent/ShopCategory/ShopCategory";
import {
  categories,
  shopByColor,
  shopByBrand,
  shopByPrice,
} from "../../../../Data/Data";
import ShopByColor from "../../CommonComponent/ShopCategory/ShopByColor";

const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <ShopCategorys
          categoriesData={categories ? categories : []}
          categoryTitle={"Shop by Category"}
        />
      </div>
      <div>
        <ShopByColor
          categoryTitle={"Shop by Color"}
          shopCatagoryItem={shopByColor ? shopByColor : []}
          color={true}
          dropDownIs={true}
          dropDownExpandIs={false}
        />
      </div>
      <div>
        <ShopByColor
          categoryTitle={"Shop by Brand"}
          shopCatagoryItem={shopByBrand ? shopByBrand : []}
          color={false}
          dropDownIs={true}
          dropDownExpandIs={false}
        />
      </div>
      <div>
        <ShopByColor
          categoryTitle={"Shop by Price"}
          shopCatagoryItem={shopByPrice ? shopByPrice : []}
          color={false}
          dropDownIs={false}
          dropDownExpandIs={true}
        />
      </div>
    </div>
  );
};

export default ShopLeft;
