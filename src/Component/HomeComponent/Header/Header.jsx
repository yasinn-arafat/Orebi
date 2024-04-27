import React from "react";
import Logo from "../../../assets/Logo.png";

const Header = () => {
  return (
    <>
      <nav className="py-8 bg-main-bg-color">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div>
              <ul className="flex items-center gap-x-9">
                <li>
                  <a href="#" className="menu_list">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_list">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_list">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_list">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_list">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
