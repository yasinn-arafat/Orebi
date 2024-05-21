import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const BreadCrumb = () => {
  const location = useLocation();
  let BreaCrumbPath = location.pathname.split("/").filter((x) => x);
  let BreadCrumblist = "";

  return (
    <>
      <div>
        <ul className="flex items-center gap-x-4">
          <li>
            <Link to={"/"} className="rounded-xl bg-blue-400 px-5 py-2">
              Home
            </Link>
          </li>
          <div>
            <FiChevronsRight />
          </div>
          {BreaCrumbPath.map((path, index) => {
            const isLast = index === BreaCrumbPath.length - 1;
            const routeTo = `${BreaCrumbPath.slice(0, index + 1)}`;
            // BreadCrumblist += path; <----- Another Process

            return (
              <li key={path}>
                {isLast ? (
                  <Link
                    to={`/${routeTo}`}
                    className={`${isLast ? "rounded-xl bg-green-400 px-5 py-2" : null}`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={`/${routeTo}`}
                    className={`${isLast ? "rounded-xl bg-green-400 px-5 py-2" : null}`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
