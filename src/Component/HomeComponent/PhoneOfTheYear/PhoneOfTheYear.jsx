import React from "react";
import PhoneOfTheYearImg from "../../../assets/PhoneOfTheYear.png";
import Button from "../../CommonComponent/Button";

const PhoneOfTheYear = () => {
  return (
    <>
      <div className="mb-7 px-4 lg:mb-32 xl:px-0">
        <div className="container">
          <div className="relative">
            <picture>
              <img
                src={PhoneOfTheYearImg}
                alt={PhoneOfTheYearImg}
                className="h-[161px] md:h-full"
              />
            </picture>
            <div className="absolute left-[35%] top-1/2 -translate-y-1/2 md:left-[42%]">
              <h3 className="pb-[4px] font-DMsans text-base font-bold text-main-font-color md:pb-5 lg:pb-9 lg:text-4xl">
                Phone of the year
              </h3>
              <p className="w-[204px] pb-5 font-DMsans text-[10px] font-normal leading-7 text-main-font-color sm:w-[300px] sm:text-sm md:w-[330px] md:pb-5 lg:w-[511px] lg:pb-12 lg:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button
                title={"Shop Now"}
                className={
                  "bg-main-font-color px-8 py-2 font-DMsans text-sm font-bold text-main-bg-color md:px-14 md:py-4"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneOfTheYear;
