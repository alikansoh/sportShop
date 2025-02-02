'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDown } from 'react-icons/io';
import PopularProductCard from './PopularProductCard'; // Import the card component

const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle = {
    ...style,
    background: 'orange', // White background for the arrow
    color: 'white',     // Orange color for the arrow
    borderRadius: '50%', // Circular shape for the arrow button
    padding: '10px',     // Some padding for the arrow button
    zIndex: 1,
    display: 'flex',     // Center the arrow inside the button
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const positionStyle =
    position === 'next'
      ? { ...arrowStyle, right: '10px', backgroundColor: 'orange', color: 'white' }
      : { ...arrowStyle, left: '10px', backgroundColor: 'orange', color: 'white' };

  return (
    <div
      className={className}
      style={positionStyle}
      onClick={onClick}
    >
      {/* The arrow icon itself */}
      <IoIosArrowDown size={30} />
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
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };

  return (
    <div className=''>
      <div className="flex flex-col  py-12">
        <div className="flex flex-col items-center justify-center">

        </div>
        <div className="mx-12  ">
          <Slider {...settings} className=''>
            {items.map((item, index) => (
              <div key={index}>
                <div className="relative flex flex-col  items-center border rounded-lg mx-2    ">
                  <img
                    width={300}
                    height={400}
                    src={item.image}
                    alt={item.name}
                    className="  rounded-t-lg w-[10rem]  pt-2"
                  />
                  {/* Rating Section */}
                  <div className='flex justify-center items-center mt-3'>
                    <span className='text-yellow-500 text-lg'>
                      {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                    </span>
                    <span className='text-sm text-gray-500 ml-2'>({item.rating}/5)</span>
                  </div>

                  <div className="flex flex-col gap-2 px-2 py-4 w-22">
                    <div className="text-sm mobile:text-xs mb-3 ">{item.name}</div>
                    <p className='absolute bottom-1 left-[50%] transform -translate-x-1/2 text-orange-500 font-bold text-sm text-center '>
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
