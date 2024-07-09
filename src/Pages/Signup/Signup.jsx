import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import SignUpTop from "../../Component/CommonComponent/SignUpComponent/SignUpTop/SignUpTop";
import SignUpInput from "../../Component/CommonComponent/SignUpComponent/SignUpInput/SignUpInput";
import Button from "../../Component/CommonComponent/Button";
import { ImSpinner9 } from "react-icons/im";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig.js";
import { Link } from "react-router-dom";
import {
  successMessage,
  errorMessage,
  checkEmail,
} from "../../../Utils/Utils.js";

const Signup = () => {
  const auth = getAuth();

  const [loading, setloading] = useState(false);

  const [userInfo, setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Telephone: "",
    Address1: "",
    Address2: "",
    city: "",
    postCode: "",
    Division: "",
    District: "",
    Password: "",
    RepeatPassword: "",
    Agreement: false,
    Subscribe1: false,
    Subscribe2: false,
  });

  const [userInfoError, setuserInfoError] = useState({
    FirstNameError: "",
    EmailError: "",
    TelephoneError: "",
    Address1Error: "",
    cityError: "",
    postCodeError: "",
    DivisionError: "",
    DistrictError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    AgreementError: false,
    PasswordNotMatch: "",
  });

  // handleInputChange Function
  const handleInputChange = (e) => {
    if (e.target.checked) {
      setuserInfo({ ...userInfo, [e.target.id]: true });
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }
  };

  // handleSignUp Button Functionality

  const handleSignUp = () => {
    const {
      FirstName,
      Email,
      Telephone,
      Address1,
      city,
      postCode,
      Division,
      District,
      Password,
      RepeatPassword,
      Agreement,
    } = userInfo;

    const {
      FirstNameError,
      EmailError,
      TelephoneError,
      Address1Error,
      cityError,
      postCodeError,
      DivisionError,
      DistrictError,
      PasswordError,
      RepeatPasswordError,
      AgreementError,
      PasswordNotMatch,
    } = userInfoError;

    if (!FirstName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "First Name missing",
      });
    } else if (!Email) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "Email missing",
      });
    } else if (!checkEmail(Email)) {
      setuserInfoError({
        ...userInfoError,
        EmailError: "Email is not Valid or wrongs",
      });
    } else if (!Telephone) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "Telephone missing",
      });
    } else if (!Address1) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "Adress 1 missing",
      });
    } else if (!city) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "City missing",
      });
    } else if (!postCode) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "Post code missing",
      });
    } else if (!Division) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "Division missing",
      });
    } else if (!District) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "",
        DistrictError: "District missing",
      });
    } else if (!Password) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "",
        DistrictError: "",

        PasswordError: "Password missing",
      });
    } else if (!RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "RepeatPassword missing",
      });
    } else if (Password !== RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        PasswordNotMatch: "Confirm Password Not Matched",
      });
    } else if (Agreement == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        Address1Error: "",
        cityError: "",
        postCodeError: "",
        DivisionError: "",
        DistrictError: "",
        PasswordError: "",
        RepeatPasswordError: "",
        PasswordNotMatch: "",
        AgreementError: "Please Select Our Privacy Policy",
      });
    }
    {
      // Create User With Firebase createUserWithEmailAndPassword
      setloading(true);
      createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
        .then((userCredential) => {
          successMessage(
            `${userInfo.FirstName} Sign Up Done`,
            "top-right",
            "4000",
          );
        })
        .then(() => {
          addDoc(collection(db, "users"), userInfo)
            .then((userData) => {
              sendEmailVerification(auth.currentUser).then(() => {
                successMessage(
                  "Verification code sent to your email",
                  "top-right",
                  "4000",
                );
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          errorMessage(`${err.code}`, "top-left", "4000");
        })
        .finally(() => {
          setloading(false);
          setuserInfo({
            FirstName: "",
            LastName: "",
            Email: "",
            Telephone: "",
            Address1: "",
            Address2: "",
            city: "",
            postCode: "",
            Division: "",
            District: "",
            Password: "",
            RepeatPassword: "",
            Agreement: false,
            Subscribe1: false,
            Subscribe2: false,
          });
          setuserInfoError({
            ...userInfoError,
            FirstNameError: "",
            EmailError: "",
            TelephoneError: "",
            Address1Error: "",
            cityError: "",
            postCodeError: "",
            DivisionError: "",
            DistrictError: "",
            PasswordError: "",
            RepeatPasswordError: "",
            PasswordNotMatch: "",
            AgreementError: "",
          });
        });
    }
  };

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div>
            <SignUpTop />
            <hr />
            <div className="mt-12 flex flex-col gap-y-12">
              {/* Personal Information */}
              <div>
                <h2 className="font-DMsans text-3xl font-bold text-main-font-color">
                  Your Personal Details
                </h2>
                <form
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="mt-10 flex flex-wrap gap-x-14 gap-y-9">
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"First Name"}
                        placeholder={"First Name"}
                        inputType={"text"}
                        inputId={"FirstName"}
                        onChangeInput={handleInputChange}
                        value={userInfo.FirstName}
                        className={`${userInfoError.FirstNameError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.FirstNameError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.FirstNameError}
                        </p>
                      )}
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Last Name"}
                        placeholder={"Last Name"}
                        inputType={"text"}
                        inputId={"LastName"}
                        onChangeInput={handleInputChange}
                        value={userInfo.LastName}
                      />
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Email address"}
                        placeholder={"company@domain.com"}
                        inputType={"email"}
                        inputId={"Email"}
                        onChangeInput={handleInputChange}
                        className={`${userInfoError.EmailError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        value={userInfo.Email}
                      />
                      {userInfoError.EmailError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.EmailError}
                        </p>
                      )}
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Telephone"}
                        placeholder={"Your phone number"}
                        inputType={"number"}
                        inputId={"Telephone"}
                        onChangeInput={handleInputChange}
                        className={`${userInfoError.TelephoneError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        value={userInfo.Telephone}
                      />
                      {userInfoError.TelephoneError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.TelephoneError}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* Personal Information */}
              {/* Customer Information */}
              <hr />
              <div>
                <h2 className="font-DMsans text-3xl font-bold text-main-font-color">
                  New Customer
                </h2>
                <form
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="mt-10 flex flex-wrap gap-x-14 gap-y-9">
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Address 1"}
                        placeholder={"4279 Zboncak Port Suite 6212"}
                        inputType={"text"}
                        inputId={"Address1"}
                        onChangeInput={handleInputChange}
                        className={`${userInfoError.Address1Error ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        value={userInfo.Address1}
                      />
                      {userInfoError.Address1Error && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.Address1Error}
                        </p>
                      )}
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Address 2"}
                        placeholder={"-----"}
                        inputType={"text"}
                        inputId={"Address2"}
                        onChangeInput={handleInputChange}
                        value={userInfo.Address2}
                      />
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"City"}
                        placeholder={"Your city"}
                        inputType={"text"}
                        inputId={"city"}
                        onChangeInput={handleInputChange}
                        value={userInfo.city}
                        className={`${userInfoError.cityError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.cityError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.cityError}
                        </p>
                      )}
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Post Code"}
                        placeholder={"05228"}
                        inputType={"text"}
                        inputId={"postCode"}
                        onChangeInput={handleInputChange}
                        value={userInfo.postCode}
                        className={`${userInfoError.postCodeError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.postCodeError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.postCodeError}
                        </p>
                      )}
                    </div>

                    <div className="w-[35%]">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        Division
                      </h3>
                      <select
                        name="Division"
                        id="Division"
                        className={`w-full border-b-2 py-3 pb-3 font-DMsans text-sm font-normal text-tertiary-font-color ${userInfoError.DivisionError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        onChange={handleInputChange}
                        value={userInfo.Division}
                      >
                        <option value="Pleaseselect">Please select</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Barishal">Barishal</option>
                      </select>
                      {userInfoError.DivisionError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.DivisionError}
                        </p>
                      )}
                    </div>

                    <div className="w-[35%]">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        District
                      </h3>
                      <select
                        name="District"
                        id="District"
                        className={`w-full border-b-2 py-3 pb-3 font-DMsans text-sm font-normal text-tertiary-font-color ${userInfoError.DistrictError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        onChange={handleInputChange}
                        value={userInfo.District}
                      >
                        <option value="n">Please select</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Sirajgonj">Sirajgonj</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Nawabganj">Nawabganj</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Sherpur">Sherpur</option>
                        <option value="Shariatpur">Shariatpur</option>
                        <option value="Jamalpur">Jamalpur</option>
                      </select>
                      {userInfoError.DistrictError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.DistrictError}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* Customer Information */}
              {/* Customer Information */}
              <hr />
              <div>
                <h2 className="font-DMsans text-3xl font-bold text-main-font-color">
                  Your Password
                </h2>
                <form
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="mt-10 flex flex-wrap gap-x-14 gap-y-9">
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Password"}
                        placeholder={"Password"}
                        inputType={"password"}
                        inputId={"Password"}
                        onChangeInput={handleInputChange}
                        value={userInfo.Password}
                        className={`${userInfoError.PasswordError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.PasswordError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.PasswordError}
                        </p>
                      )}
                    </div>
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"Repeat Password"}
                        placeholder={"Repeat Password"}
                        inputType={"password"}
                        inputId={"RepeatPassword"}
                        onChangeInput={handleInputChange}
                        value={userInfo.RepeatPassword}
                        className={`${userInfoError.RepeatPasswordError ? "border-b-red-500" : "border-b-[#F0F0F0]"} ${userInfoError.PasswordNotMatch ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.RepeatPasswordError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.RepeatPasswordError}
                        </p>
                      )}
                      {userInfoError.PasswordNotMatch && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.PasswordNotMatch}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <hr />
              {/* Customer Information */}
              {/* Privacy Policy */}
              <div className="font-DMsans text-sm font-normal text-tertiary-font-color">
                <div className="flex flex-col gap-y-9">
                  <div>
                    <div className="flex items-center gap-x-4">
                      <input
                        type="checkbox"
                        name="Agreement"
                        id="Agreement"
                        onChange={handleInputChange}
                        value={userInfo.Agreement}
                      />
                      <h4>I have read and agree to the Privacy Policy</h4>
                    </div>
                    <div>
                      {userInfoError.AgreementError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.AgreementError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-x-10">
                    <h3>Subscribe Newsletter</h3>
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        name="Subscribe1"
                        id="Subscribe1"
                        onChange={handleInputChange}
                        value={userInfo.Subscribe1}
                      />
                      <p>Yes</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        name="Subscribe2"
                        id="Subscribe2"
                        onChange={handleInputChange}
                        value={userInfo.Subscribe2}
                      />
                      <p>No</p>
                    </div>
                  </div>
                  <div>
                    <Button
                      title={"Sign Up"}
                      onClickFunction={handleSignUp}
                      className={
                        "flex w-[200px] items-center justify-center gap-x-3 rounded bg-main-font-color py-4 font-DMsans text-base font-bold text-main-bg-color"
                      }
                      icon={
                        <ImSpinner9
                          className={`animate-spin text-2xl text-pink-500  ${loading ? "block" : "hidden"}`}
                        />
                      }
                    />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className="cursor-pointer font-DMsans text-base font-bold text-main-font-color">
                      Already have an account?
                    </p>
                    <Link to={"/login"}>
                      <h3 className="cursor-pointer font-DMsans text-lg font-bold text-blue-500 hover:underline">
                        Log In
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Privacy Policy */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
