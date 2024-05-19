import React from "react";

const FooterTop = ({
  allItem = ["Home", "Shop", "About", "Contact", "Journal"],
  title,
}) => {
  return (
    <>
      <div className="">
        <h4 className="pb-2 font-DMsans text-base font-bold text-main-font-color md:pb-4">
          {title}
        </h4>
        <ul>
          {allItem?.map((item, index) => (
            <li className="menu_list pb-[6px]" key={index}>
              <a href="#">
                {title.toLocaleLowerCase() === "SHOP".toLocaleLowerCase()
                  ? item + (index + 1)
                  : item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterTop;
