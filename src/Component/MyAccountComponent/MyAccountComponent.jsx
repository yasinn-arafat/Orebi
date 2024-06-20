import React from "react";
import CommonHeading from "../CommonComponent/CommonHeading/CommonHeading";
import { MyAccountDshboard } from "../../../Data/Data";
import ShopByColor from "../CommonComponent/ShopLeftItem/ShopByColor";

const MyAccountComponent = () => {
  return (
    <>
      <div>
        <div>
          <CommonHeading title={"My Account"} />
        </div>
        <div className="mb-16 flex items-start gap-x-9">
          <div className="w-1/4">
            <ShopByColor
              className={"mt-0"}
              categoryTitle={"Dashboard"}
              shopCatagoryItem={MyAccountDshboard ? MyAccountDshboard : []}
              color={false}
              dropDownIs={false}
              dropDownExpandIs={true}
            />
          </div>
          <div className="w-3/4">
            <div className="mb-10">
              <h1 className="font-DMsans text-base font-normal text-tertiary-font-color">
                Hello
                <span className="font-bold text-main-font-color"> admin </span>
                (not
                <span className="font-bold text-main-font-color"> admin</span>?
                <span className="font-bold text-main-font-color"> Log out</span>
                )
              </h1>
            </div>
            <p className="font-DMsans text-base font-normal text-tertiary-font-color">
              From your account dashboard you can view your{" "}
              <span className="font-bold text-main-font-color">
                recent orders
              </span>
              ,{" "}
              <span className="font-bold text-main-font-color">
                manage your shipping and billing addresses
              </span>
              , and
              <span className="font-bold text-main-font-color">
                {" "}
                edit your password and account details.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountComponent;
