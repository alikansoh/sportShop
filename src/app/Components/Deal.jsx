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

const Carousel = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" back={true} />,
  };

  const items = [
    {
      id: 1,
      name: "Samsung Refrigerator",
      image: "/images/offer.jpg",
      rating: 4,
      price: "$999.99",
      oldPrice: "$1299.99",
      description: "Limited-time offer: Save $300 on this premium refrigerator!",
    },
    {
      id: 2,
      name: "LG Washing Machine",
      image: "https://via.placeholder.com/300x400?text=LG+Washing+Machine",
      rating: 5,
      price: "$499.99",
      oldPrice: "$649.99",
      description: "Get the latest LG washing machine at a 25% discount!",
    },
    {
      id: 3,
      name: "Dyson Vacuum Cleaner",
      image: "https://via.placeholder.com/300x400?text=Dyson+Vacuum+Cleaner",
      rating: 3,
      price: "$399.99",
      oldPrice: "$499.99",
      description: "Special offer: Dyson vacuum for $100 off the original price!",
    },
    {
      id: 4,
      name: "Whirlpool Microwave Oven",
      image: "https://via.placeholder.com/300x400?text=Whirlpool+Microwave+Oven",
      rating: 5,
      price: "$129.99",
      oldPrice: "$179.99",
      description: "Save $50 on this Whirlpool microwave, the perfect kitchen addition!",
    },
    {
      id: 5,
      name: "KitchenAid Stand Mixer",
      image: "https://via.placeholder.com/300x400?text=KitchenAid+Stand+Mixer",
      rating: 4,
      price: "$379.99",
      oldPrice: "$429.99",
      description: "Exclusive offer: Get $50 off KitchenAid's top-rated stand mixer!",
    },
    {
      id: 6,
      name: "Breville Espresso Machine",
      image: "https://via.placeholder.com/300x400?text=Breville+Espresso+Machine",
      rating: 5,
      price: "$599.99",
      oldPrice: "$799.99",
      description: "Enjoy gourmet coffee at home with $200 off the Breville Espresso Machine!",
    },
    {
      id: 7,
      name: "Philips Air Fryer",
      image: "https://via.placeholder.com/300x400?text=Philips+Air+Fryer",
      rating: 4,
      price: "$129.99",
      oldPrice: "$159.99",
      description: "Limited offer: Air fry your favorite meals with $30 off!",
    },
    {
      id: 8,
      name: "Bose Smart Speaker",
      image: "https://via.placeholder.com/300x400?text=Bose+Smart+Speaker",
      rating: 5,
      price: "$199.99",
      oldPrice: "$249.99",
      description: "Get $50 off the Bose Smart Speaker - Incredible sound, incredible price!",
    },
  ];

  return (
    <div className="py-5">
        <h1 className="text-3xl font-semibold mobile:text-xl text-center  px-5 ">Our offers</h1>
        <h2 className=" font-medium px-5 text-lg text-orange-600 text-center">Discover our Best offers for you </h2>
      <div className="mx-3 mt-10">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-2">
              <div className="relative flex flex-col items-center border rounded-lg h-[26rem] lg:h-[28rem]">
                <img
                  width={300}
                  height={400}
                  src={item.image}
                  alt={item.name}
                  className="rounded-t-lg w-[60%] h-[300px] "
                />
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-lg text-center font-semibold">{item.name}</div>
                  <div className="flex justify-between text-base text-gray-500">
                    <p className="line-through">{item.oldPrice}</p>
                    <p className="text-orange-500 font-bold text-lg">{item.price}</p>
                  </div>
                  <p className="text-base text-red-600 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
