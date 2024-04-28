import React, { useState } from "react";
import Product from "../../CommonComponent/Product";
import Flex from "../../CommonComponent/Flex";
import Button from "../../CommonComponent/Button";
import { ProductData } from "/Data/Data.js";

const NewArival = () => {
  const [AllProductData, setAllProductData] = useState(ProductData);

  return (
    <>
      <div className="pb-28 bg-slate-600">
        <div className="container bg-purple-400">
          <h3 className="text-[39px] text-main-font-color font-DMsans font-bold pb-12">
            New Arrivals
          </h3>

          <Flex className={"justify-between"}>
            {AllProductData?.map((item) => (
              <div key={item.id}>
                <Product
                  colorVarient={item.color === true ? true : false}
                  badge={
                    item.badge == true ? (
                      <Button
                        className={
                          "py-[9px] px-8 bg-main-font-color text-main-bg-color text-sm font-DMsans font-bold"
                        }
                        title={"10%"}
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default NewArival;
