import React from "react";
import FooterLogo from "../../../assets/FooterLogo.png";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] px-4 py-4 sm:py-7 lg:py-12 xl:px-0">
        <div className="container">
          <div className="flex flex-wrap items-start gap-x-28 gap-y-4 xl:gap-y-0 ">
            <div className="flex flex-wrap items-start gap-x-7 gap-y-4 lg:gap-x-32 lg:gap-y-0 ">
              <FooterTop
                title={"MENU"}
                allItem={["Home", "Shop", "About", "Contact", "Journal"]}
              />

              <FooterTop
                title={"SHOP"}
                allItem={[
                  "Category ",
                  "Category ",
                  "Category ",
                  "Category ",
                  "Category ",
                ]}
              />

              <FooterTop
                title={"HELP"}
                allItem={[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Special E-shop",
                  "Shipping",
                  "Secure Payments",
                ]}
              />
              <div>
                <div className="font-DMsans text-base font-bold text-main-font-color">
                  <div>
                    <a href="tel:+052611-5711">(052) 611-5711</a>
                  </div>
                  <div>
                    <a href="mailto:company@domain.com">company@domain.com</a>
                  </div>
                </div>

                <address className="pt-2 font-DMsans text-sm font-normal text-[#6D6D6D] md:pt-[18px]">
                  575 Crescent Ave. Quakertown, PA 18951
                </address>
              </div>
            </div>

            <div>
              <picture>
                <a href="#">
                  <img src={FooterLogo} alt={FooterLogo} />
                </a>
              </picture>
            </div>
          </div>

          <FooterBottom />
        </div>
      </div>
    </>
  );
};

export default Footer;
