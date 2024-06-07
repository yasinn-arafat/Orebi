import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";

const SignUpTop = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="font-DMsans text-4xl font-bold text-main-font-color">
            Sign up
          </h1>
        </div>
        <div className="pt-7">
          <BreadCrumb />
        </div>
        <div className="mb-16 mt-20 w-1/2">
          <p className="font-DMsans text-base font-normal text-tertiary-font-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpTop;
