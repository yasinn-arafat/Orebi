import React, { useState } from "react";
import CommonHeading from "../CommonComponent/CommonHeading/CommonHeading";
import SignUpInput from "../CommonComponent/SignUpComponent/SignUpInput/SignUpInput";
import Button from "../CommonComponent/Button";
import { Link, useNavigate } from "react-router-dom";
import { checkEmail, successMessage } from "../../../Utils/Utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginComponent = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    Email: "",
    Password: "",
  });

  const [loginInfoError, setloginInfoError] = useState({
    EmailError: "",
    PasswordError: "",
  });

  /**
   * TODO: handleLogInInput Functionality
   * @params : ({event.target.value})
   */

  const handleLogInInput = (event) => {
    setloginInfo({
      ...loginInfo,
      [event.target.id]: event.target.value,
    });
  };

  // handleLogIn Functionality
  const handleLogIn = () => {
    const { Email, Password } = loginInfo;
    const { EmailError, PasswordError } = loginInfoError;

    if (!Email) {
      setloginInfoError({
        ...loginInfoError,
        EmailError: "Please Enter a valid Email",
      });
    } else if (!checkEmail(Email)) {
      setloginInfoError({
        ...loginInfoError,
        EmailError: "Email is not Valid or wrong",
      });
    } else if (!Password) {
      setloginInfoError({
        ...loginInfoError,
        EmailError: "",
        PasswordError: "Please enter password",
      });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userLogInInfo) => {
          console.log(userLogInInfo);
          successMessage("Login Complete");
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setloginInfo({ Email: "", Password: "" });
          setloginInfoError({
            EmailError: "",
            PasswordError: "",
          });
        });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-y-12">
        <div>
          <CommonHeading title={"Login"} />{" "}
          <div>
            <p className="w-1/2 font-DMsans text-base font-normal text-tertiary-font-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-y-12">
          <div>
            <h1 className="font-DMsans text-3xl font-bold text-main-font-color">
              Returning Customer
            </h1>
          </div>
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-x-10">
                <div className="w-[35%]">
                  <SignUpInput
                    labelTitle={"Email address"}
                    placeholder={"company@domain.com"}
                    inputType={"email"}
                    inputId={"Email"}
                    className={`${loginInfoError.EmailError ? "border-red-500" : "border-[#F0F0F0]"}`}
                    onChangeInput={handleLogInInput}
                    value={loginInfo.Email}
                  />
                  {loginInfoError.EmailError && (
                    <p className="font-DMsans text-sm font-normal text-red-500">
                      {loginInfoError.EmailError}
                    </p>
                  )}
                </div>
                <div className="w-[35%]">
                  <SignUpInput
                    labelTitle={"Password"}
                    placeholder={"........"}
                    inputType={"password"}
                    inputId={"Password"}
                    className={`${loginInfoError.PasswordError ? "border-red-500 placeholder:text-4xl" : "border-[#F0F0F0] placeholder:text-4xl"}`}
                    onChangeInput={handleLogInInput}
                    value={loginInfo.Password}
                  />
                  {loginInfoError.PasswordError && (
                    <p className="font-DMsans text-sm font-normal text-red-500">
                      {loginInfoError.PasswordError}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Button
                  title={"Log in"}
                  className={
                    "rounded border border-[#2B2B2B] bg-transparent px-20 py-4 font-DMsans text-sm font-bold text-main-font-color duration-150 ease-linear hover:bg-main-font-color hover:text-main-bg-color"
                  }
                  onClickFunction={handleLogIn}
                />
              </div>
            </div>
          </form>
        </div>
        <hr />

        <div className="flex flex-col gap-y-7">
          <div>
            <h2 className="font-DMsans text-3xl font-bold text-main-font-color">
              New Customer
            </h2>
          </div>
          <div className="flex">
            <Link to={"/sign-up"}>
              <p className="cursor-pointer font-DMsans text-base font-bold text-blue-500 hover:underline">
                Create an account
              </p>
            </Link>
          </div>
          <div>
            <Link to={"/sign-up"}>
              <Button
                title={"Sign Up"}
                className={
                  "rounded border border-[#2B2B2B] bg-main-font-color px-20 py-4 font-DMsans text-sm font-bold text-main-bg-color duration-150 ease-linear hover:bg-transparent hover:text-main-font-color"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
