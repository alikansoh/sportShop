import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className=' w-full'>
      <Image src="/images/header.jpeg" alt="heroImage" width={10000} height={10000} className='w-full h-[900px] mobile:h-[420px]' />

    </div>)
}

export default Hero