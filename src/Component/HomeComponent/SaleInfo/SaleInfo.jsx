import React from "react";
import SaleLeft from "../../../assets/Phones.png";
import SaleRightUp from "../../../assets/Electronic.png";
import SaleRightDown from "../../../assets/Furniture.png";
import Overlay from "../../CommonComponent/Overlay";

const SaleInfo = () => {
  return (
    <>
      <div className="pb-9 pt-0 sm:pb-32 sm:pt-8 md:pt-28">
        <div className="container">
          <div className="flex flex-col gap-x-7 gap-y-4 sm:flex-row sm:gap-y-0">
            <div className="relative w-full cursor-pointer">
              <picture>
                <img src={SaleLeft} alt={SaleLeft} />
              </picture>
              <Overlay
                className={
                  "absolute bottom-[10px] left-[38px] sm:bottom-3 md:bottom-8 lg:bottom-10 lg:left-16 "
                }
                titleStyle={
                  "lg:text-4xl sm:text-2xl text-3xl text-main-font-color font-DMsans font-bold"
                }
                uptoStyle={
                  "text-main-font-color text-base font-DMsans font-normal opacity-70"
                }
                discountStyle={
                  "text-main-font-color text-3xl lg:text-[40px] font-DMsans font-bold align-middle"
                }
                saleStyle={
                  "text-main-font-color text-base font-DMsans font-normal opacity-70"
                }
                title={"Phones Sale"}
                upto={"Up to"}
                discount={" 30% "}
                sale={"sale for all phones!"}
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-y-4 sm:gap-y-4 md:gap-y-5 lg:gap-y-8">
                <div className="relative w-full cursor-pointer">
                  <picture>
                    <img src={SaleRightUp} alt={SaleRightUp} />
                  </picture>
                  <Overlay
                    className={
                      "absolute bottom-1 left-[38px] sm:bottom-0 sm:left-[14px] md:bottom-[6px] md:left-7 lg:bottom-10 lg:left-9 "
                    }
                    titleStyle={
                      "lg:text-4xl text-xl text-main-font-color font-DMsans font-bold"
                    }
                    uptoStyle={
                      "text-main-font-color text-base font-DMsans font-normal opacity-70"
                    }
                    saleStyle={
                      "text-main-font-color block lg:inline-block text-base font-DMsans font-normal opacity-70"
                    }
                    discountStyle={
                      "text-main-font-color text-2xl lg:text-[40px] font-DMsans font-bold align-middle"
                    }
                    title={"Electronics Sale"}
                    upto={"Up to"}
                    discount={" 70% "}
                    sale={"sale for all electronics!"}
                  />
                </div>
                <div className="relative w-full cursor-pointer">
                  <picture>
                    <img src={SaleRightDown} alt={SaleRightDown} />
                  </picture>
                  <Overlay
                    className={
                      "absolute bottom-1 left-[38px] sm:bottom-0 sm:left-[14px] md:bottom-[6px] md:left-7 lg:bottom-10 lg:left-9"
                    }
                    titleStyle={
                      "lg:text-4xl text-xl text-main-font-color font-DMsans font-bold"
                    }
                    uptoStyle={
                      "text-main-font-color text-base font-DMsans font-normal opacity-70"
                    }
                    saleStyle={
                      "text-main-font-color block lg:inline-block text-base font-DMsans font-normal opacity-70"
                    }
                    discountStyle={
                      "text-main-font-color text-2xl lg:text-[40px] font-DMsans font-bold align-middle"
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
