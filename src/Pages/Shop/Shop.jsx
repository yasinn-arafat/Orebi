import React from "react";
import CommonHeading from "../../Component/CommonComponent/CommonHeading/CommonHeading";
import ShopLeft from "../../Component/ShopComponent/ShopLeft/ShopLeft";
import ShopRight from "../../Component/ShopComponent/ShopRight/ShopRight";

const Shop = () => {
  return (
    <>
      <div className="py-14">
        <div className="container">
          <div>
            <CommonHeading className={"mb-0"} title={"Products"} />
          </div>
          <div className="flex pt-20">
            <ShopLeft className={"w-[23%]"} />
            <ShopRight className={"ml-7 w-[77%]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
