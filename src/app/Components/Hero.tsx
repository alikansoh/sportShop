import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className=' w-full'>
      <Image src="/images/header.png" alt="heroImage" width={1000} height={1000} className='w-full mobile:h-[320px]' />

    </div>)
}

export default Hero