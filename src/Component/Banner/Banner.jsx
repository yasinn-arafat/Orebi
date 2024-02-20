import React from "react";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import BannersliderImg from "../../assets/Bannerslider.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "var(--main-font-color)",
          borderRight: "2px solid var(--main-font-color)",
          fontSize: "12px",
          padding: "10px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <>
      <div className=" overflow-hidden">
        <Slider {...settings}>
          <div>
            <picture>
              <img src={BannersliderImg} alt={BannersliderImg} />
            </picture>
          </div>
          <div>
            <picture>
              <img src={BannersliderImg} alt={BannersliderImg} />
            </picture>
          </div>
          <div>
            <picture>
              <img src={BannersliderImg} alt={BannersliderImg} />
            </picture>
          </div>
          <div>
            <picture>
              <img src={BannersliderImg} alt={BannersliderImg} />
            </picture>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
