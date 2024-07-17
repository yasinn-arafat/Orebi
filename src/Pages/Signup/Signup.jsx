import React from "react";
import SignUpTop from "../../Component/CommonComponent/SignUpComponent/SignUpTop/SignUpTop";
import SignUpComponent from "../../Component/SignUpComponent/SignUpComponent";

const Signup = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div>
            <SignUpTop />
          </div>
          <hr />
          <div>
            <SignUpComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
