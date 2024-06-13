import React, { useState } from "react";
import CommonHeading from "../CommonComponent/CommonHeading/CommonHeading";
import Button from "../CommonComponent/Button";
import SignUpInput from "../CommonComponent/SignUpComponent/SignUpInput/SignUpInput";
import { ImSpinner9 } from "react-icons/im";
import {
  checkEmail,
  checkWordLimit,
  successMessage,
  errorMessage,
} from "../../../Utils/Utils.js";
import { FaCircleExclamation } from "react-icons/fa6";

const ContactComponent = () => {
  const [loading, setloading] = useState(false);

  const [inputValue, setinputValue] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [inputValueError, setinputValueError] = useState({
    NameError: "",
    EmailError: "",
    MessageError: "",
  });

  /**
   * TODO : handleInput Functionality
   * @params : ({event.target.value})
   */

  const handleInput = (event) => {
    setinputValue({
      ...inputValue,

      [event.target.id]: event.target.value,
    });
  };

  /**
   * TODO : handlePost Functionality
   */

  const handlePost = () => {
    const { Name, Email, Message } = inputValue;
    const { NameError, EmailError, MessageError } = inputValueError;

    if (!Name) {
      setinputValueError({
        ...inputValueError,
        NameError: "Please Enter Your Name",
      });
    } else if (!Email) {
      setinputValueError({
        ...inputValueError,
        NameError: "",
        EmailError: "Please Enter a valid Email",
      });
    } else if (!checkEmail(Email)) {
      setinputValueError({
        EmailError: "Email is not Valid or wrong",
      });
    } else if (!Message) {
      setinputValueError({
        ...inputValueError,
        NameError: "",
        EmailError: "",
        MessageError: "Please give a short message",
      });
    } else if (!checkWordLimit(Message)) {
      setinputValueError({
        ...inputValueError,
        NameError: "",
        EmailError: "",
        MessageError: "Message cannot exceed 100 words",
      });
    } else {
      setloading(true);
      successMessage("Everything is Ok", "top-right", 4000);

      setinputValue({
        ...inputValue,
        Name: "",
        Email: "",
        Message: "",
      });
      setinputValueError({
        ...inputValueError,
        NameError: "",
        EmailError: "",
        MessageError: "",
      });
    }
  };

  return (
    <>
      <div>
        <div>
          <CommonHeading title={"Contacts"} />
        </div>

        <div className="flex flex-col gap-y-24">
          <div className="flex flex-col gap-y-10">
            <div>
              <h1 className="font-DMsans text-4xl font-bold text-main-font-color">
                Fill up a Form
              </h1>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-y-6">
                <div className="w-1/2">
                  <SignUpInput
                    labelTitle={"Name"}
                    placeholder={"Your name here"}
                    inputType={"text"}
                    inputId={"Name"}
                    onChangeInput={handleInput}
                    className={`${inputValueError.NameError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                  />
                  {inputValueError.NameError && (
                    <p className="font-DMsans text-sm font-normal text-red-500">
                      {inputValueError.NameError}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <SignUpInput
                    labelTitle={"Email"}
                    placeholder={"Your email here"}
                    inputType={"email"}
                    inputId={"Email"}
                    onChangeInput={handleInput}
                    className={`${inputValueError.EmailError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                  />
                  {inputValueError.EmailError && (
                    <p className="font-DMsans text-sm font-normal text-red-500">
                      {inputValueError.EmailError}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <div className="flex flex-col gap-y-3">
                    <label
                      htmlFor="Message"
                      className="font-DMsans text-base font-bold text-main-font-color"
                    >
                      Message
                    </label>
                    <div>
                      <textarea
                        name="Message"
                        id="Message"
                        placeholder="Your message here"
                        className={`h-20 w-full border-b-2 pb-3 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-tertiary-font-color ${inputValueError.MessageError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                        onChange={handleInput}
                      ></textarea>
                      {inputValueError.MessageError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {inputValueError.MessageError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div>
              <Button
                title={"Post"}
                className={
                  "flex w-[200px] items-center justify-center gap-x-3 rounded bg-main-font-color py-4 font-DMsans text-base font-bold text-main-bg-color"
                }
                onClickFunction={handlePost}
                icon={
                  <ImSpinner9
                    className={`animate-spin text-2xl text-pink-500  ${loading ? "block" : "hidden"}`}
                  />
                }
              />
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.2422545589857!2d88.6277597!3d25.6300841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb4d00188172e5%3A0x2989530b9cfb4c2c!2sArafat&#39;s%20Sweet%20Home!5e0!3m2!1sen!2sbd!4v1718051895634!5m2!1sen!2sbd"
              className={"h-[400px] w-full rounded"}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
