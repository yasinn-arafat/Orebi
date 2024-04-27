import React from "react";
import SaleLeft from "../../../assets/Phones.png";
import SaleRightUp from "../../../assets/Electronic.png";
import SaleRightDown from "../../../assets/Furniture.png";
import Overlay from "../../CommonComponent/Overlay";

const SaleInfo = () => {
  return (
    <>
      <div className="pt-36 pb-32">
        <div className="container">
          <div className="flex gap-x-7">
            <div className="w-full relative">
              <picture>
                <img src={SaleLeft} alt={SaleLeft} />
              </picture>
              <Overlay
                className={"absolute left-16 bottom-10 "}
                titleStyle={
                  "text-4xl text-main-font-color font-DMsans font-bold"
                }
                uptoStyle={
                  "text-main-font-color text-base font-DMsans font-normal opacity-70"
                }
                discountStyle={
                  "text-main-font-color text-[40px] font-DMsans font-bold align-middle"
                }
                title={"Phones Sale"}
                upto={"Up to"}
                discount={" 30% "}
                sale={"sale for all phones!"}
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-y-8">
                <div className="w-full relative">
                  <picture>
                    <img src={SaleRightUp} alt={SaleRightUp} />
                  </picture>
                  <Overlay
                    className={"absolute left-9 bottom-10 "}
                    titleStyle={
                      "text-4xl text-main-font-color font-DMsans font-bold"
                    }
                    uptoStyle={
                      "text-main-font-color text-base font-DMsans font-normal opacity-70"
                    }
                    discountStyle={
                      "text-main-font-color text-[40px] font-DMsans font-bold align-middle"
                    }
                    title={"Electronics Sale"}
                    upto={"Up to"}
                    discount={" 70% "}
                    sale={"sale for all electronics!"}
                  />
                </div>
                <div className="w-full relative">
                  <picture>
                    <img src={SaleRightDown} alt={SaleRightDown} />
                  </picture>
                  <Overlay
                    className={"absolute left-9 bottom-10 "}
                    titleStyle={
                      "text-4xl text-main-font-color font-DMsans font-bold"
                    }
                    uptoStyle={
                      "text-main-font-color text-base font-DMsans font-normal opacity-70"
                    }
                    discountStyle={
                      "text-main-font-color text-[40px] font-DMsans font-bold align-middle"
                    }
                    title={"Furniture Offer"}
                    upto={"Up to"}
                    discount={" 50% "}
                    sale={"sale for all furniture items!"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleInfo;
