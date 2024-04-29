import React, { useState } from "react";
import Slider from "react-slick";
import Product from "../../CommonComponent/Product";
import Button from "../../CommonComponent/Button";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

// SampleNextArrow Functionality

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        color: "#FFFFFF",
        width: "50px",
        height: "50px",
        position: "absolute",
        right: "-1%",
        top: "32%",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full">
        <FaLongArrowAltRight />
      </div>
    </div>
  );
}

// SamplePrevArrow Functionality

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        color: "#FFFFFF",
        width: "50px",
        height: "50px",
        position: "absolute",
        left: "-2%",
        top: "32%",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full">
        <FaLongArrowAltLeft />
      </div>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const NewArival = ({ heading, ProductData }) => {
  const [AllProductData, setAllProductData] = useState(ProductData);

  return (
    <>
      <div className="pb-28">
        <div className="container">
          <h3 className="text-[39px] text-main-font-color font-DMsans font-bold pb-12">
            {heading ? heading : "New Arrivals"}
          </h3>

          <Slider {...settings}>
            {AllProductData?.map((item) => (
              <div key={item.id}>
                <Product
                  image={item.img}
                  producttitle={item.title}
                  productPrice={item.price}
                  colorVarient={item.color === true ? true : false}
                  badge={
                    item.badge == true ? (
                      <Button
                        className={
                          "py-[9px] px-8 bg-main-font-color text-main-bg-color text-sm font-DMsans font-bold"
                        }
                        title={
                          item.badgetitle == true ? "New" : item.discountOffer
                        }
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NewArival;
