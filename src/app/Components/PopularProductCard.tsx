import React from 'react'
import Image from 'next/image'

const PopularProductCard = ({ image, name, rating, price }) => {
    return (
        <div className=' lg:w-[100%] h-auto border-[2px] mt-5 border-gray-200 rounded-[10px] relative p-2 flex flex-col '>
            {/* Image */}
            <Image src={image} alt={name} width={1000} height={1000} className='w-full h-25' />

            {/* Rating Section */}
            <div className='flex justify-center items-center mt-3'>
                <span className='text-yellow-500 text-lg'>
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                </span>
                <span className='text-sm text-gray-500 ml-2'>({rating}/5)</span>
            </div>

            {/* Product Name */}
            <h3 className='text-sm mt-3 flex-grow mobile:text-xs'>{name}</h3>

            {/* Price */}
            <p className='font-semibold text-orange-500 mt-2 text-center mobile:text-sm'>
                ${price}
            </p>
        </div>
    )
}

export default PopularProductCard
