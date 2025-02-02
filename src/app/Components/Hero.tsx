import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="w-full relative flex justify-center ">
      <Image src="/images/header.jpg" alt="hero" width={1000} height={1000} />
    </div>
  );
}

export default Hero
