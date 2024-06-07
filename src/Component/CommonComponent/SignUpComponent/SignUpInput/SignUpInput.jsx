import React from "react";

const SignUpInput = ({
  labelTitle,
  inputType,
  inputId,
  placeholder,
  onChangeInput,
  className,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-y-1">
        <label
          htmlFor={labelTitle}
          className="font-DMsans text-base font-bold text-main-font-color"
        >
          {labelTitle}
        </label>
        <input
          type={inputType}
          id={inputId}
          name={inputId}
          placeholder={placeholder}
          className={`border-b-2 pb-3 placeholder:font-DMsans placeholder:text-sm placeholder:font-normal placeholder:text-tertiary-font-color ${className}`}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export default SignUpInput;
