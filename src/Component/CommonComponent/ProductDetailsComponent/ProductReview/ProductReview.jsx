import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import Button from "../../Button";

const ProductReview = ({ description }) => {
  const [showDescription, setshowDescription] = useState("");

  return (
    <>
      <div className="mt-10">
        <div className="flex items-center gap-x-9">
          <h2
            className={`cursor-pointer font-DMsans text-base font-bold  ${showDescription === "description" ? "font-bold text-green-500" : "text-main-font-color"}`}
            onClick={() => setshowDescription("description")}
          >
            Description
          </h2>
          <h2
            className={`cursor-pointer font-DMsans text-base font-bold ${showDescription === "description" ? "text-main-font-color" : "text-green-500"}`}
            onClick={() => setshowDescription("")}
          >
            Reviews (1)
          </h2>
        </div>

        {showDescription === "description" ? (
          <div className="mb-5 mt-6 w-1/2">
            <p className="font-DMsans text-base font-normal text-tertiary-font-color">
              {description}
            </p>
          </div>
        ) : (
          <div>
            <div className="pb-5 pt-8">
              <h3 className="font-DMsans text-sm font-normal text-tertiary-font-color">
                1 review for Product
              </h3>
            </div>
            <hr />

            <div className="py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-9">
                  <div>
                    <h3 className="font-DMsans text-base font-bold text-main-font-color">
                      John Ford
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                    <span>
                      <IoIosStar />
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                    6 months ago
                  </p>
                </div>
              </div>
              <div className="mt-5 pr-5">
                <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        )}

        <hr />

        {/* Post Review */}
        <div className="mt-12">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div>
              <h3 className="font-DMsans text-xl font-bold text-main-font-color">
                Add a Review
              </h3>
            </div>

            <div className="mt-9 flex flex-col gap-y-9">
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="name"
                  className="font-DMsans text-base font-bold text-main-font-color"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name here"
                  className="w-1/2 border-b-2 border-b-[#F0F0F0] py-2"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="email"
                  className="font-DMsans text-base font-bold text-main-font-color"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email here"
                  className="w-1/2 border-b-2 border-b-gray-200 py-2"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="review"
                  className="font-DMsans text-base font-bold text-main-font-color"
                >
                  Review
                </label>
                <textarea
                  name="review"
                  id="review"
                  placeholder="Your review here"
                  className="w-1/2 border-b-2  border-b-gray-200 py-2"
                />
              </div>

              <div>
                <Button
                  title={"Post"}
                  className={
                    "rounded bg-main-font-color px-20 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                  }
                />
              </div>
            </div>
          </form>

          {/* Post Review */}
        </div>
      </div>
    </>
  );
};

export default ProductReview;
