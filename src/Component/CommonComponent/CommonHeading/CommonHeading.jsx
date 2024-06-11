import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const CommonHeading = ({ title }) => {
  return (
    <>
      <div className="mb-24">
        <div className="flex flex-col gap-y-7">
          <div>
            <h1 className="font-DMsans text-4xl font-bold text-main-font-color">
              {title ? title : "Title"}
            </h1>
          </div>
          <div>
            <BreadCrumb />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonHeading;
