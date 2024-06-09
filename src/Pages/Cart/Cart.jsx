import React, { useEffect } from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
import { HiOutlineMinusSm, HiOutlinePlus } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import productimage from "../../assets/BestSellingProduct/Image6.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCartItem,
  productIncrement,
  productDecrement,
  getTotal,
} from "../../Redux/AllSlice/AddToCartSlice/AddToCartSlice.js";
import Button from "../../Component/CommonComponent/Button.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem, totalAmount, totalItem } = useSelector(
    (state) => state.cart,
  );

  // Call useEffect to update Total item & Total Amount
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cartItem]);

  /**
   *  todo : handleRemove Functionality added
   * @params ({item})
   */

  const handleRemove = (item) => {
    dispatch(removeCartItem(item));
  };

  /**
   * todo : handleProductIncrement Functionality
   * motiv : Increase Product Quantity
   * @params : ({item})
   */

  const handleProductIncrement = (item) => {
    dispatch(productIncrement(item));
  };

  /**
   * todo : handleProductDecrement Functionality
   * motiv : Decrease Product Quantity
   * @params : ({item})
   */

  const handleProductDecrement = (item) => {
    dispatch(productDecrement(item));
  };

  return (
    <>
      <div className="py-12">
        <div className="container">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="font-DMsans text-4xl font-bold text-main-font-color">
                Cart
              </h1>
            </div>
            <div>
              <BreadCrumb />
            </div>
          </div>

          <div className="mt-24 flex items-center justify-between bg-[#F5F5F3] px-4 py-7">
            <div className="shrink grow basis-72 pl-28">
              <h3 className="font-DMsans text-base font-bold text-main-font-color">
                Product
              </h3>
            </div>
            <div className="flex shrink grow basis-60 justify-center">
              <h3 className="font-DMsans text-base font-bold text-main-font-color">
                Price
              </h3>
            </div>
            <div className="flex shrink grow basis-60 justify-center">
              <h3 className="font-DMsans text-base font-bold text-main-font-color">
                Quantity
              </h3>
            </div>
            <div className="flex shrink grow basis-60 justify-center">
              <h3 className="font-DMsans text-base font-bold text-main-font-color">
                Total
              </h3>
            </div>
          </div>

          {/* Cart Products Show */}
          <div className="h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-secondery-bg-colorr scrollbar-thumb-main-font-color">
            {cartItem?.length > 0 ? (
              cartItem?.map((item) => (
                <div
                  className="flex items-center justify-between border border-[#F0F0F0] px-4 py-8"
                  key={item.id}
                >
                  <div className="flex shrink grow basis-72 items-center gap-x-7">
                    <span
                      className="cursor-pointer text-2xl"
                      onClick={() => handleRemove(item)}
                    >
                      <MdCancel />
                    </span>
                    <Link to={`/product-details/${item.id}`}>
                      <div className="flex items-center gap-x-5 rounded-md">
                        <div className="h-[100px] w-[100px]">
                          <picture>
                            <img
                              src={
                                item.thumbnail ? item.thumbnail : productimage
                              }
                              alt={
                                item.thumbnail ? item.thumbnail : productimage
                              }
                              className="h-full w-full rounded-md bg-cyan-200  object-cover shadow-xl"
                            />
                          </picture>
                        </div>

                        <div>
                          <h3>{item.title ? item.title : "Product name"}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="flex shrink grow basis-60 justify-center">
                    <p>{`$${item.price ? Math.round(item.price) : "$0.00"}`}</p>
                  </div>

                  <div className="flex shrink grow basis-60 items-center justify-center gap-8">
                    <div className=" w-[130px] border-2 border-[#F0F0F0] py-2">
                      <div className="flex items-center justify-center gap-x-7 ">
                        <span
                          className="cursor-pointer"
                          onClick={() => handleProductDecrement(item)}
                        >
                          <HiOutlineMinusSm />
                        </span>
                        <p className="font-DMsans text-base font-normal text-tertiary-font-color">
                          {item.cartQuantity ? item.cartQuantity : "1"}
                        </p>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleProductIncrement(item)}
                        >
                          <HiOutlinePlus />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink grow basis-60 justify-center">
                    <p>{`$${item.cartQuantity * item.price ? item.cartQuantity * Math.round(item.price) : "$0.00"}`}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-10">
                <h2 className="text-center font-DMsans text-2xl font-bold text-main-font-color">
                  No Products Added To Cart
                </h2>
              </div>
            )}
          </div>
          {/* Cart Products Show */}

          {/* Cart Total */}
          <div className="my-24 flex basis-5/12   justify-end text-end">
            <div className="flex basis-5/12 flex-col gap-y-8">
              <div>
                <h2 className="pr-4 font-DMsans text-xl font-bold text-main-font-color">
                  Cart totals : {totalItem}
                </h2>
              </div>

              <div>
                <div className="flex items-center">
                  <div className=" flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                    <h3 className="font-DMsans text-base font-bold text-main-font-color">
                      Subtotal
                    </h3>
                  </div>
                  <div className="flex w-full justify-start border border-[#F0F0F0] py-3 pl-3">
                    <p className="font-DMsans text-base font-medium text-tertiary-font-color">
                      {totalAmount ? `$${totalAmount}` : "$0.00"}
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
                      {totalAmount ? `$${totalAmount}` : "$0.00"}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link to={`/sign-up`}>
                  <Button
                    title={"Proceed to Checkout"}
                    className={
                      "w-full rounded bg-main-font-color px-12 py-4 font-DMsans text-sm font-bold text-main-bg-color"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Cart Total */}
        </div>
      </div>
    </>
  );
};

export default Cart;
