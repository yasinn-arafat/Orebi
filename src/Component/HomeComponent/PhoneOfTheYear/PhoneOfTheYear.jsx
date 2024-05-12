import React from "react";
import PhoneOfTheYearImg from "../../../assets/PhoneOfTheYear.png";
import Button from "../../CommonComponent/Button";

const PhoneOfTheYear = () => {
  return (
    <>
      <div className="mb-32">
        <div className="container">
          <div className="relative">
            <picture>
              <img src={PhoneOfTheYearImg} alt={PhoneOfTheYearImg} />
            </picture>
            <div className="absolute left-[42%] top-1/2 -translate-y-1/2">
              <h3 className="pb-9 font-DMsans text-4xl font-bold text-main-font-color">
                Phone of the year
              </h3>
              <p className="w-[511px] pb-12 font-DMsans text-base font-normal leading-7 text-main-font-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button
                title={"Shop Now"}
                className={
                  "bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
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
