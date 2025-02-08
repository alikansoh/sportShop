'use client'
import React, { useRef, useEffect, useState } from 'react';

const Deal = () => {
    const data = [
        {
            id: 1,
            image: '/images/product.jpg',
            title: 'Best Deal: 10% Off on Samsung TV',
            description: 'Get up to 10% off your Samsung TV with our exclusive deal',
            link: 'https://example.com',
            price: '299.99',
            oldPrice: '399.99',
        },
        {
            id: 2,
            image: '/images/product.jpg',
            title: 'Buy 2 Get 1 Free: PlayStation 5',
            description: 'Get your PlayStation 5 for free with this limited-time offer',
            link: 'https://example.com',
            price: '149.99',
            oldPrice: '199.99',
        },
        {
            id: 3,
            image: '/images/product.jpg',
            title: 'Buy 1 Get 1 Free: Xbox Series X',
            description:
                'Get your Xbox Series X for free with this limited-time offer if you purchase a subscription to the original',
            link: 'https://example.com',
            price: '119.99',
            oldPrice: '179.99',
        },
        {
            id: 4,
            image: '/images/product.jpg',
            title: 'Buy 3 Get 1 Free: PlayStation 4',
            description:
                'Get your PlayStation 4 for free with this limited-time offer if you purchase a subscription to the original',
            link: 'https://example.com',
            price: '119.99',
            oldPrice: '179.99',
        },
        {
            id: 5,
            image: '/images/product.jpg',
            title: 'Buy 3 Get 1 Free: PlayStation 4',
            description:
                'Get your PlayStation 4 for free with this limited-time offer if you purchase a subscription to the original',
            link: 'https://example.com',
            price: '119.99',
            oldPrice: '179.99',
        },
        {
            id: 6,
            image: '/images/product.jpg',
            title: 'Buy 3 Get 1 Free: PlayStation 4',
            description:
                'Get your PlayStation 4 for free with this limited-time offer if you purchase a subscription to the original',
            link: 'https://example.com',
            price: '119.99',
            oldPrice: '179.99',
        },
        {
            id: 7,
            image: '/images/product.jpg',
            title: 'Buy 3 Get 1 Free: PlayStation 4',
            description:
                'Get your PlayStation 4 for free with this limited-time offer if you purchase a subscription to the original',
            link: 'https://example.com',
            price: '119.99',
            oldPrice: '179.99',
        },
    ];

    const [visibleIndex, setVisibleIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(220); // Default card width
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const updateCardWidth = () => {
            if (window.innerWidth < 640) {
                setCardWidth(200); // mobile
            } else if (window.innerWidth < 768) {
                setCardWidth(240); // tablet, adjusted for better fit
            } else {
                setCardWidth(440); // desktop, adjusted for better fit
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        return () => {
            window.removeEventListener('resize', updateCardWidth);
        };
    }, []);

    // Use a consistent offset for scrolling
    const scrollOffset = cardWidth + 15;

    const handleNext = () => {
        if (visibleIndex < data.length - 1) {
            setVisibleIndex(visibleIndex + 1);
            scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (visibleIndex > 0 ) {
            setVisibleIndex(visibleIndex - 1);
            scrollContainerRef.current.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-10 px-4 sm:px-8">
            <h1 className="text-3xl font-semibold text-center mobile:text-xl">Best Deals</h1>
            <h2 className="font-medium text-lg text-center text-orange-600 mb-6">
                Discover our best deals today
            </h2>
            <div className="relative">
                <div ref={scrollContainerRef} className="flex gap-6  overflow-x-hidden  scroll-smooth py-4 px-2 ">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 flex flex-col items-center bg-white shadow-lg rounded-lg border border-gray-200 p-4"
                            style={{ width: `${cardWidth}px` }}
                        >
                            <img src={item.image} alt={item.title} className="w-[200px] h-[200px] rounded-md" />
                            <h3 className="font-semibold mt-4 text-center text-sm sm:text-base">{item.title}</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">{item.description}</p>
                            <div className="mt-4 flex justify-between w-full">
                                <span className="text-lg font-semibold">${item.price}</span>
                                <span className="line-through text-gray-500">${item.oldPrice}</span>
                            </div>
                            <a
                                href={item.link}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md text-center"
                            >
                                Shop Now
                            </a>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-4 mt-2'>
                    {/* Navigation buttons */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Deals"
                        className="text-orange-600 border-2 border-orange-600  p-5 rounded-full"
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Deals"
                        className="  text-orange-600 border-2 border-orange-600 p-5 rounded-full"
                    >
                        {'>'}

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deal;
