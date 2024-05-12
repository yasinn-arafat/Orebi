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
      <div className="flex h-full items-center justify-center">
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
      <div className="flex h-full items-center justify-center">
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
          <h3 className="pb-12 font-DMsans text-[39px] font-bold text-main-font-color">
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
                          "bg-main-font-color px-8 py-[9px] font-DMsans text-sm font-bold text-main-bg-color"
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
