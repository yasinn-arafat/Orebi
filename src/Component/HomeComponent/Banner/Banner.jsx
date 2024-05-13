import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannersliderImg from "../../../assets/Bannerslider.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1100,
    autoplaySpeed: 2000,

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
          borderRight: "2px solid var(--main-bg-color)",
          borderRight: "red",
          fontSize: "12px",
          padding: "10px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "96%",
                left: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px", transform: "rotate(90deg)" }}>
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "15px",
                borderRight: "2px solid #B0EBB4",
                fontSize: "9px",
                padding: "10px 0",
              }}
            ></div>
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px", transform: "rotate(90deg)" }}>
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "15px",
                borderRight: "2px solid #B0EBB4",
                fontSize: "9px",
                padding: "10px 0",
              }}
            ></div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "93%",
                left: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px", transform: "rotate(90deg)" }}>
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "15px",
                borderRight: "2px solid #9DDE8B",
                fontSize: "9px",
                padding: "10px 0",
              }}
            ></div>
          ),
        },
      },
    ],
  };

  return (
    <>
      <div className="overflow-hidden">
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
