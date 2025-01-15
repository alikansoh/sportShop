import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="w-full relative">
      <Image
        src="/images/header.jpeg"
        alt="heroImage"
        width={10000}
        height={10000}
        className="w-full h-[850px] mobile:h-[420px] opacity-100"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-8 text-center w-[80%] md:w-[50%] mobile:w-[90%] mobile:p-4">
        <h1 className="text-4xl font-bold text-white mobile:text-xl ">
          Step into greatness with hero-inspired clothing and shoes. </h1>
        <p className="text-lg text-white mt-2 mobile:text-md">Discover our new collection of luxury and sustainable fashion.</p>
        <button className="text-white uppercase bg-red-600  px-12 py-4 rounded-md hover:bg-red-700 mt-2 mobile:text-sm mobile:px-5 mobile:py-3">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero
