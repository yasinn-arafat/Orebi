import React from "react";
import CommonHeading from "../CommonComponent/CommonHeading/CommonHeading";
import OurBrand from "../../assets/AboutPage/OurBrand.png";
import OurStores from "../../assets/AboutPage/OurStores.png";
import Button from "../CommonComponent/Button";

const AboutComponent = () => {
  return (
    <>
      <div>
        <div>
          <CommonHeading title={"About"} />
        </div>
        <div className="flex flex-col gap-y-24">
          <div className="flex w-full items-center justify-between">
            <div className="relative w-[47%]">
              <picture>
                <img src={OurBrand} alt={OurBrand} className="w-full" />
              </picture>
              <div>
                <Button
                  title={"Our Brands"}
                  className={
                    "absolute bottom-[8%] left-[50%] -translate-x-1/2 bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                  }
                />
              </div>
            </div>
            <div className="relative w-[47%]">
              <picture>
                <img src={OurStores} alt={OurStores} className="w-full" />
              </picture>
              <div>
                <Button
                  title={"Our Storess"}
                  className={
                    "absolute bottom-[8%] left-[50%] -translate-x-1/2 bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-DMsans text-3xl font-normal text-main-font-color">
              Orebi is one of the world’s leading ecommerce brands and is
              internationally recognized for celebrating the essence of classic
              Worldwide cool looking style.
            </h1>
          </div>

          <div className="flex w-full items-start justify-between">
            <div className="w-[31%]">
              <h2 className="font-DMsans text-2xl font-bold text-main-font-color">
                Our Vision
              </h2>
              <div className="pt-3">
                <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
            <div className="w-[31%]">
              <h2 className="font-DMsans text-2xl font-bold text-main-font-color">
                Our Story
              </h2>
              <div className="pt-3">
                <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic.
                </p>
              </div>
            </div>
            <div className="w-[31%]">
              <h2 className="font-DMsans text-2xl font-bold text-main-font-color">
                Our Brands
              </h2>
              <div className="pt-3">
                <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
