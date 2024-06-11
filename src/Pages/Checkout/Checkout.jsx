import React, { useState } from "react";
import CheckoutComponent from "../../Component/CheckoutComponent/CheckoutComponent";
import SignUpInput from "../../Component/CommonComponent/SignUpComponent/SignUpInput/SignUpInput";
import Button from "../../Component/CommonComponent/Button";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [userInfo, setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    CompanyName: "",
    Country: "",
    HouseNumber: "",
    ApartmentNumber: "",
    TownCity: "",
    County: "",
    PostCode: "",
    Phone: "",
    Email: "",
    Bank1: false,
    Bank2: false,
  });

  const [userInfoError, setuserInfoError] = useState({
    FirstNameError: "",
    LastNameError: "",
    CountryError: "",
    HouseNumberError: "",
    ApartmentNumberError: "",
    TownCityError: "",
    PostCodeError: "",
    PhoneError: "",
    EmailError: "",
    Bank1Error: "",
    Bank2Error: "",
  });

  // handleInputInfo Functionality
  const handleInputInfo = (event) => {
    setuserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };

  // handleProceedToBank Functionality

  const handleProceedToBank = () => {
    const {
      FirstName,
      LastName,
      Country,
      HouseNumber,
      ApartmentNumber,
      TownCity,
      PostCode,
      Phone,
      Email,
      Bank1,
      Bank2,
    } = userInfo;

    const {
      FirstNameError,
      LastNameError,
      CountryError,
      HouseNumberError,
      ApartmentNumberError,
      TownCityError,
      PostCodeError,
      PhoneError,
      EmailError,
      Bank1Error,
      Bank2Error,
    } = userInfoError;

    if (!FirstName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "First Name is mendatory",
      });
    } else if (!LastName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "Last Name is mendatory",
      });
    } else if (!Country) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "Please Select Your Country",
      });
    } else if (!HouseNumber) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "house name mis",
      });
    } else if (!ApartmentNumber) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "aprt name mis",
      });
    } else if (!TownCity) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "town name mis",
      });
    } else if (!PostCode) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "post name mis",
      });
    } else if (!Phone) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "",
        PhoneError: "phn name mis",
      });
    } else if (!Email) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "",
        PhoneError: "",
        EmailError: "email name mis",
      });
    } else if (Bank1 == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "",
        PhoneError: "",
        EmailError: "",
        Bank1Error: "Bank 1 mis",
      });
    } else if (Bank2 == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "",
        PhoneError: "",
        EmailError: "",
        Bank1Error: "",
        Bank2Error: "Bank 2 mis",
      });
    } else {
      setuserInfo({
        ...userInfo,
        FirstName: "",
        LastName: "",
        CompanyName: "",
        Country: "",
        HouseNumber: "",
        ApartmentNumber: "",
        TownCity: "",
        County: "",
        PostCode: "",
        Phone: "",
        Email: "",
        Bank1: false,
        Bank2: false,
      });

      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        LastNameError: "",
        CountryError: "",
        HouseNumberError: "",
        ApartmentNumberError: "",
        TownCityError: "",
        PostCodeError: "",
        PhoneError: "",
        EmailError: "",
        Bank1Error: "",
        Bank2Error: "",
      });
      alert("everything ok");
    }
  };

  /**
   * todo : Take all product from redux
   */

  const { cartItem, totalItem, totalAmount } = useSelector(
    (state) => state.cart,
  );

  return (
    <>
      <div className="my-10">
        <div className="container">
          <div>
            <CheckoutComponent />
          </div>

          <div className="pb-20">
            <p className="font-DMsans text-base font-normal text-tertiary-font-color">
              Have a coupon?{" "}
              <span className="text-sky-600 underline">
                Click here to enter your code
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-y-20">
            {/* Billing Form */}
            <div className="flex flex-col gap-y-10">
              <div>
                <h1 className="font-DMsans text-4xl font-bold text-main-font-color">
                  Billing Details
                </h1>
              </div>
              <form
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col gap-y-8">
                  <div className="flex gap-x-10">
                    <div className="w-[35%]">
                      <SignUpInput
                        labelTitle={"First Name *"}
                        placeholder={"First Name"}
                        inputType={"text"}
                        inputId={"FirstName"}
                        onChangeInput={handleInputInfo}
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
                        labelTitle={"Last Name *"}
                        placeholder={"Last Name"}
                        inputType={"text"}
                        inputId={"LastName"}
                        onChangeInput={handleInputInfo}
                        className={`${userInfoError.LastNameError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                      />
                      {userInfoError.LastNameError && (
                        <p className="font-DMsans text-sm font-normal text-red-500">
                          {userInfoError.LastNameError}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Companye Name (optional)"}
                      placeholder={"Company Name"}
                      inputType={"text"}
                      inputId={"CompanyName"}
                    />
                  </div>

                  <div className="w-[73%]">
                    <h3 className="font-DMsans text-base font-bold text-main-font-color">
                      Country *
                    </h3>
                    <select
                      name="Country"
                      id="Country"
                      onChange={handleInputInfo}
                      // className="w-full border-b-2 pb-3 font-DMsans text-sm font-normal text-tertiary-font-color "
                      className={`w-full border-b-2 py-3 pb-3 font-DMsans text-sm font-normal text-tertiary-font-color ${userInfoError.CountryError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    >
                      <option value="">Please select</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Mymensingh">Mymensingh</option>
                    </select>
                    {userInfoError.CountryError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.CountryError}
                      </p>
                    )}
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Street Address *"}
                      placeholder={"House number and street name"}
                      inputType={"text"}
                      inputId={"HouseNumber"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.HouseNumberError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.HouseNumberError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.HouseNumberError}
                      </p>
                    )}
                    <SignUpInput
                      placeholder={"Apartment, suite, unit etc. (optional)"}
                      inputType={"text"}
                      inputId={"ApartmentNumber"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.ApartmentNumberError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.ApartmentNumberError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.ApartmentNumberError}
                      </p>
                    )}
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Town/City *"}
                      placeholder={"Town/City"}
                      inputType={"text"}
                      inputId={"TownCity"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.TownCityError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.TownCityError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.TownCityError}
                      </p>
                    )}
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"County (optional)"}
                      placeholder={"County"}
                      inputType={"text"}
                      inputId={"County"}
                      onChangeInput={handleInputInfo}
                    />
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Post Code *"}
                      placeholder={"Post Code"}
                      inputType={"text"}
                      inputId={"PostCode"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.PostCodeError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.PostCodeError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.PostCodeError}
                      </p>
                    )}
                  </div>

                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Phone *"}
                      placeholder={"Phone"}
                      inputType={"number"}
                      inputId={"Phone"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.PhoneError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.PhoneError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.PhoneError}
                      </p>
                    )}
                  </div>
                  <div className="w-[73%]">
                    <SignUpInput
                      labelTitle={"Email Address *"}
                      placeholder={"Email"}
                      inputType={"email"}
                      inputId={"Email"}
                      onChangeInput={handleInputInfo}
                      className={`${userInfoError.EmailError ? "border-b-red-500" : "border-b-[#F0F0F0]"}`}
                    />
                    {userInfoError.EmailError && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.EmailError}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
            {/* Billing Form */}

            {/* Additional Information Component */}
            <div className="flex flex-col gap-y-7">
              <div>
                <h2 className="font-DMsans text-4xl font-bold text-main-font-color">
                  Additional Information
                </h2>
              </div>
              <div>
                <h4 className="font-DMsans text-base font-bold text-main-font-color">
                  Other Notes (optional)
                </h4>
                <p className="pt-2 font-DMsans text-sm font-normal text-main-font-color">
                  Notes about your order, e.g. special notes for delivery.
                </p>
              </div>

              <hr className="mt-6 w-[73%]" />
            </div>
            {/* Additional Information Component */}

            {/* Cart Total */}
            <div className="flex basis-5/12 justify-start">
              <div className="flex basis-5/12 flex-col gap-y-8">
                <div>
                  <h2 className="pr-4 font-DMsans text-3xl font-bold text-main-font-color">
                    Your Order
                  </h2>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className=" flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        Product
                      </h3>
                    </div>
                    <div className="flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <p className="font-DMsans text-base font-medium text-tertiary-font-color">
                        Total
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        Product name x 1
                      </h3>
                    </div>
                    <div className="flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <p className="font-DMsans text-base font-medium text-tertiary-font-color">
                        389.99 $
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className=" flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        Subtotal
                      </h3>
                    </div>
                    <div className="flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <p className="font-DMsans text-base font-medium text-main-font-color">
                        {totalAmount ? `$${totalAmount}` : "$00.00"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className=" flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <h3 className="font-DMsans text-base font-bold text-main-font-color">
                        Total
                      </h3>
                    </div>
                    <div className="flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                      <p className="font-DMsans text-base font-medium text-main-font-color">
                        {totalAmount ? `$${totalAmount}` : "$00.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cart Total */}

            {/* Bank Payment Method */}

            <div className="flex w-[73%] flex-col gap-y-7 border-2 border-[#F0F0F0] px-7 py-5">
              <div className="flex flex-col gap-y-3">
                <div>
                  <div className="px-5 py-4">
                    <div className="flex flex-row gap-x-3">
                      <input
                        type="radio"
                        name="Bank1"
                        id="Bank1"
                        onChange={handleInputInfo}
                        className={`${userInfoError.Bank1Error ? "border-red-500" : "border-[#F0F0F0]"}`}
                      />

                      <span className="font-DMsans text-base font-bold text-main-font-color">
                        Bank 1
                      </span>
                    </div>
                    {userInfoError.Bank1Error && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.Bank1Error}
                      </p>
                    )}
                  </div>
                  <div className="bg-[#F5F5F3] px-6 py-4">
                    <p className="font-DMsans text-sm font-normal text-tertiary-font-color">
                      Pay via Bank; you can pay with your credit card if you
                      don’t have a Bank account.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="px-5 py-4">
                    <div className="flex flex-row gap-x-3">
                      <input
                        type="radio"
                        name="Bank2"
                        id="Bank2"
                        onChange={handleInputInfo}
                        className={`${userInfoError.Bank2Error ? "border-red-500" : "border-[#F0F0F0]"}`}
                      />

                      <span className="font-DMsans text-base font-bold text-main-font-color">
                        Bank 2
                      </span>
                    </div>
                    {userInfoError.Bank2Error && (
                      <p className="font-DMsans text-sm font-normal text-red-500">
                        {userInfoError.Bank2Error}
                      </p>
                    )}
                  </div>
                  <div className="py-1">
                    <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our{" "}
                      <span className="text-main-font-color">
                        privacy policy.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  title={"Proceed to Bank"}
                  className={
                    "bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                  }
                  onClickFunction={handleProceedToBank}
                />
              </div>
            </div>
            {/* Bank Payment Method */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
