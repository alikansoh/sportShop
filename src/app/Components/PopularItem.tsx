import React from 'react';
import Carousel from './Carousel';

const PopularItem = () => {
  const popularProducts = [
    { name: 'ACER Predator Helios 16" Gaming Laptop - Intel® Core™ i9, RTX 4070, 1 TB SSD', image: '/images/product.jpg', rating: 4, price: '1599.99' },
    { name: 'ACER Nitro V15 15.6" Gaming Laptop - AMD Ryzen 5, RTX 3050, 512 GB SSD', image: '/images/product.jpg', rating: 5, price: '1999.99' },
    { name: 'SAMSUNG Galaxy Book4 Edge 15.6" Laptop, Copilot+ PC - Snapdragon X Plus, 256 GB SSD, Sapphire Blue', image: '/images/product.jpg', rating: 4, price: '2399.99' },
    { name: 'HP Omen 17', image: '/images/product.jpg', rating: 3, price: '1799.99' },
    { name: 'Razer Blade 15', image: '/images/product.jpg', rating: 5, price: '2499.99' },
    { name: 'MSI GE76 Raider', image: '/images/product.jpg', rating: 4, price: '2299.99' },
    { name: 'ASUS ROG Strix', image: '/images/product.jpg', rating: 4, price: '1699.99' },
    { name: 'Lenovo Legion 5', image: '/images/product.jpg', rating: 4, price: '1599.99' },
  ];

  return (
    <div className="mt-10 ">
      <h1 className="text-3xl font-semibold mobile:text-xl text-center  px-5 ">Popular Products</h1>
      <h2 className=" font-medium px-5 text-lg text-orange-600 text-center">Discover our top-rated products</h2>
      <Carousel items={popularProducts} />
    </div>
  );
};

export default PopularItem;
