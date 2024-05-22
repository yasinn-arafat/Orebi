import React from "react";

const ShopCategorys = ({ categoriesData }) => {
  return (
    <>
      <div>
        <h3>Shop by Category</h3>
      </div>
      <div>
        {categoriesData?.map((item) => (
          <h2>{item.title}</h2>
        ))}
      </div>
    </>
  );
};

export default ShopCategorys;
