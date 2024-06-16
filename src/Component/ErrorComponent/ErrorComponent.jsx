import React from "react";
import Search from "../CommonComponent/Search";
import Button from "../CommonComponent/Button";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <>
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col gap-y-6">
          <div>
            <h1 className="font-DMsans text-9xl font-bold text-main-font-color">
              404
            </h1>
          </div>
          <div>
            <p className="w-1/2 font-DMsans text-base font-normal text-tertiary-font-color">
              The page you were looking for couldn't be found. The page could be
              removed or you misspelled the word while searching for it. Maybe
              try a search?
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <div>
            <Search
              className={"rounded-lg border border-[#F0F0F0]"}
              placeholder={"Type to search"}
            />
          </div>
          <div>
            <Link to={"/"}>
              <Button
                title={"Back to Home"}
                className={
                  "rounded-md bg-main-font-color px-14 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;
