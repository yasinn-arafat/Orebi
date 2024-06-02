import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Product from "../Product";
import Button from "../Button";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { ShopRightPageContext } from "../../ShopComponent/ShopRight/ShopRight";
import {
  fetchProduct,
  setProducts,
} from "../../../Redux/AllSlice/ProductSilce/ProductSilce";

const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);

  // value from shop Right
  const value = useContext(ShopRightPageContext);

  // Data from redus store
  useEffect(() => {
    dispatch(fetchProduct());
  });

  useEffect(() => {
    const productDataFetcher = async () => {
      const Products = await axios.get("https://dummyjson.com/products");
      setallProducts(Products.data.products);

      //  set data on Redux
      // dispatch(setProducts(Products.data.products));
    };
    productDataFetcher();
  }, []);

  // handlePagenation Functionality

  const handlePagenation = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / value) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="pt-11">
        <div className="flex flex-wrap justify-between gap-y-7">
          {allProducts
            ?.slice(page * value - value, page * value)
            .map((productItem) => (
              <div key={productItem.id}>
                <Product
                  image={productItem.thumbnail}
                  producttitle={productItem.title}
                  productPrice={`$${productItem.price}`}
                  colorVarient={true}
                  colorVarientTitle={productItem.brand}
                  badge={
                    <Button
                      className={
                        "bg-main-font-color px-8 py-[9px] font-DMsans text-sm font-bold text-main-bg-color"
                      }
                      title={
                        productItem.discountPercentage
                          ? `- $${productItem.discountPercentage}`
                          : productItem.stock === 0
                            ? "Stock Out"
                            : "New"
                      }
                    />
                  }
                />
              </div>
            ))}
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <p
                className="flex h-9 w-9 cursor-pointer items-center justify-center bg-red-200 font-DMsans text-base font-normal text-main-font-color"
                onClick={() => handlePagenation(page - 1)}
              >
                <FaAngleDoubleLeft />
              </p>

              {[...new Array(Math.floor(allProducts.length / value) + 1)].map(
                (item, index) => (
                  <div key={index} onClick={() => handlePagenation(index + 1)}>
                    <p
                      className={`bg-transparebt flex h-9 w-9 cursor-pointer items-center justify-center border border-[#F0F0F0] font-DMsans text-base font-normal text-main-font-color ${index + 1 === page && "border border-[#F0F0F0] bg-black text-white"}`}
                    >
                      {index + 1}
                    </p>
                  </div>
                ),
              )}

              <p
                className="flex h-9 w-9 cursor-pointer items-center justify-center bg-red-200 font-DMsans text-base font-normal text-main-font-color"
                onClick={() => handlePagenation(page + 1)}
              >
                <FaAngleDoubleRight />
              </p>
            </div>
            <div>
              <span className="font-DMsans text-sm font-normal text-tertiary-font-color">{`Products from ${page * value - value + 1} to ${page === Math.floor(allProducts.length / value) + 1 ? allProducts.length : page * value} of ${allProducts.length}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
