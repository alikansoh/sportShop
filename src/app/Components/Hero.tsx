import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className=' w-full'>
      <Image src="/images/header.png" alt="heroImage" width={10000} height={10000} className='w-full h-[630px] mobile:h-[420px]' />

    </div>)
}

export default Hero