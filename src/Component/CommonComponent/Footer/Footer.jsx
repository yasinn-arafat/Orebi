import React from "react";
import FooterLogo from "../../../assets/FooterLogo.png";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <div className="py-12 bg-[#F5F5F3]">
        <div className="container">
          <div className="flex items-start gap-x-28 ">
            <div className="flex items-start gap-x-32 ">
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
                <div className="text-main-font-color text-base font-DMsans font-bold">
                  <div>
                    <a href="tel:+052611-5711">(052) 611-5711</a>
                  </div>
                  <div>
                    <a href="mailto:company@domain.com">company@domain.com</a>
                  </div>
                </div>

                <address className="pt-[18px] text-sm text-[#6D6D6D] font-DMsans font-normal">
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
