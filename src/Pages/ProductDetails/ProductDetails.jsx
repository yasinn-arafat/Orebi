import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Component/CommonComponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/AllSlice/ProductSilce/ProductSilce";
import ProductDetailsTop from "../../Component/CommonComponent/ProductDetailsComponent/ProductDetailsTop";
import Loading from "../../Component/CommonComponent/Loading/Loading";
import RatingStar from "../../Component/CommonComponent/ProductDetailsComponent/RatingStar/RatingStar";
import ProductInfo from "../../Component/CommonComponent/ProductDetailsComponent/ProductInfo/ProductInfo";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [eachProduct, seteachProduct] = useState({});

  useEffect(() => {
    dispatch(fetchProduct("https://dummyjson.com/products/1"));
  }, []);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      seteachProduct(data.payload);
    }
  }, [data.payload, status.payload]);

  return (
    <>
      <div className="py-6">
        <div className="container">
          <div>
            <BreadCrumb />
          </div>
          {status.payload === "LOADING" ? (
            <div className="py-10">
              <Loading perItem={1} />
            </div>
          ) : status.payload === "ERROR" ? (
            <h1>ERROR</h1>
          ) : (
            <ProductDetailsTop EachPoductImg={eachProduct} />
          )}
          <div>
            <h1 className="font-DMsans text-2xl font-bold text-main-font-color">
              {eachProduct.title ? eachProduct.title : "Product"}
            </h1>
          </div>
          <RatingStar rating={eachProduct.rating} />
          <div className="py-5">
            <div className="flex items-center gap-x-5">
              <del className="font-DMsans text-base font-normal text-tertiary-font-color">
                <span>${eachProduct.price}</span>
              </del>
              <div>
                <h3 className="font-DMsans text-xl font-bold text-main-font-color">
                  $
                  {Math.round(
                    eachProduct.price -
                      (eachProduct.price * eachProduct.discountPercentage) /
                        100,
                  )}
                  .00
                </h3>
              </div>
            </div>
          </div>
          <hr className="w-1/2" />
          <div>
            <ProductInfo productstock={eachProduct.stock} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
