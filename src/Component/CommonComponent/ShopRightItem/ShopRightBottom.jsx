import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product";
import Button from "../Button";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { ShopRightPageContext } from "../../ShopComponent/ShopRight/ShopRight";
import {
  fetchProduct,
  setProducts,
} from "../../../Redux/AllSlice/ProductSilce/ProductSilce";
import { RiH1 } from "react-icons/ri";
import Loading from "../Loading/Loading";
import { addToCart } from "../../../Redux/AllSlice/AddToCartSlice/AddToCartSlice";

const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);

  // value from shop Right
  const value = useContext(ShopRightPageContext);
  const { showPerPageItem, gridLayout } = value;

  // Data from redus store
  useEffect(() => {
    dispatch(fetchProduct("https://dummyjson.com/products"));
  }, []);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [data.payload, status.payload]);

  /**
   * useEffect(() => {
    const productDataFetcher = async () => {
      const Products = await axios.get("https://dummyjson.com/products");
      setallProducts(Products.data.products);

      //  set data on Redux
      // dispatch(setProducts(Products.data.products));
    };
    productDataFetcher();
  }, []); 
 */

  // handlePagenation Functionality

  const handlePagenation = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / showPerPageItem) + 1
    ) {
      setpage(pageNumber);
    }
  };

  /**
   *  TODO: handleAddToCart Functionality
   * @params : ({item})
   */

  const handleAddToCart = (productItem) => {
    dispatch(addToCart(productItem));
  };

  return (
    <>
      <div className="pt-11">
        {status.payload === "LOADING" ? (
          <Loading perItem={9} />
        ) : status.payload === "ERROR" ? (
          <h1>Error</h1>
        ) : (
          allProducts && (
            <div>
              <div className="flex flex-wrap justify-between gap-y-7">
                {allProducts
                  ?.slice(
                    page * showPerPageItem - showPerPageItem,
                    page * showPerPageItem,
                  )
                  .map((productItem) => (
                    <div
                      className={`${gridLayout ? "relative w-full rounded-xl bg-gray-100" : null}`}
                      key={productItem.id}
                    >
                      <Product
                        onAddToCart={() => handleAddToCart(productItem)}
                        productId={productItem.id}
                        image={productItem.thumbnail}
                        producttitle={productItem.title}
                        productPrice={`$${productItem.price}`}
                        colorVarient={true}
                        productDescrip={productItem.description}
                        changeIcon={gridLayout}
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

              {/* Pagination */}
              <div className="mt-14">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <p
                      className="flex h-9 w-9 cursor-pointer items-center justify-center bg-red-200 font-DMsans text-base font-normal text-main-font-color"
                      onClick={() => handlePagenation(page - 1)}
                    >
                      <FaAngleDoubleLeft />
                    </p>

                    {[
                      ...new Array(
                        Math.floor(allProducts.length / showPerPageItem) + 1,
                      ),
                    ].map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handlePagenation(index + 1)}
                      >
                        <p
                          className={`bg-transparebt flex h-9 w-9 cursor-pointer items-center justify-center border border-[#F0F0F0] font-DMsans text-base font-normal text-main-font-color ${index + 1 === page && "border border-[#F0F0F0] bg-black text-white"}`}
                        >
                          {index + 1}
                        </p>
                      </div>
                    ))}

                    <p
                      className="flex h-9 w-9 cursor-pointer items-center justify-center bg-red-200 font-DMsans text-base font-normal text-main-font-color"
                      onClick={() => handlePagenation(page + 1)}
                    >
                      <FaAngleDoubleRight />
                    </p>
                  </div>
                  <div>
                    <span className="font-DMsans text-sm font-normal text-tertiary-font-color">{`Products from ${page * showPerPageItem - showPerPageItem + 1} to ${page === Math.floor(allProducts.length / showPerPageItem) + 1 ? allProducts.length : page * showPerPageItem} of ${allProducts.length}`}</span>
                  </div>
                </div>
              </div>
              {/* Pagination */}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom;
