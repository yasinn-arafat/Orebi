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
            <div className="absolute top-1/2 left-[42%] -translate-y-1/2">
              <h3 className="pb-9 text-4xl text-main-font-color font-DMsans font-bold">
                Phone of the year
              </h3>
              <p className="w-[511px] pb-12 text-main-font-color text-base leading-7 font-DMsans font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button
                title={"Shop Now"}
                className={
                  "px-14 py-4 bg-main-font-color text-main-bg-color text-sm font-DMsans font-bold"
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
