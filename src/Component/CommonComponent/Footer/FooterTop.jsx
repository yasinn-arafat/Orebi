import React from "react";

const FooterTop = ({
  allItem = ["Home", "Shop", "About", "Contact", "Journal"],
  title,
}) => {
  return (
    <>
      <div>
        <h4 className="pb-4 text-main-font-color text-base font-DMsans font-bold">
          {title}
        </h4>
        <ul>
          {allItem?.map((item, index) => (
            <li className="menu_list pb-[6px]">
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
