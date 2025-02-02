"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SliderArrow = ({ className, style, onClick, position, back }) => {
  const arrowStyle = {
    ...style,
    backgroundColor: "gray",
    color: "white",
    borderRadius: "50%", // Keep circular shape
    padding: "10px", // Increase padding for a larger button
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6, // Reduced opacity for a more subtle effect
    cursor: "pointer",
    width: "2.2rem",
    height: "2.2rem",

    fontSize: "1.5rem",
  };

  // Positioning of the arrows
  const positionStyle =
    position === "next"
      ? {
          ...arrowStyle,
          right: "1px",
        }
      : {
          ...arrowStyle,
          left: "1px",
        };

  return (
    <div className={className} style={positionStyle} onClick={onClick}>
      {back ? <IoIosArrowBack size={30} /> : <IoIosArrowForward size={30} />}
    </div>
  );
};

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" back={true} />,
  };

  return (
    <div className="">
      <div className="flex flex-col py-5">
        <div className="flex flex-col items-center justify-center"></div>
        <div className="mx-3">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index}>
                <div className="relative flex flex-col items-center border rounded-lg mx-2 h-[23.5rem] lg:h-[25rem]">
                  <img
                    width={300}
                    height={400}
                    src={item.image}
                    alt={item.name}
                    className="rounded-t-lg w-[10rem] pt-2"
                  />
                  {/* Rating Section */}
                  <div className="flex justify-center items-center mt-3">
                    <span className="text-yellow-500 text-lg">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({item.rating}/5)
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 px-2 py-4 w-22">
                    <div className="text-sm mobile:text-xs mb-3 ">
                      {item.name}
                    </div>
                    <p className="absolute bottom-1 left-[50%] transform -translate-x-1/2 text-orange-500 font-bold mobile:text-sm text-center">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
