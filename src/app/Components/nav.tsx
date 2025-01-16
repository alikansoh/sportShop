'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import navdata from '../fakeData/navData';

interface SubCategory {
    name: string;
    subCategories?: SubCategory[];
    image?: string;
}

interface NavItem {
    name: string;
    subCategories?: SubCategory[];
    image?: string;
}


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpen2, setIsOpen2] = useState<boolean>(false);
    const [isUnderNav, setIsUnderNav] = useState<boolean>(false);
    const [selectedDropdown, setSelectedDropdown] = useState<SubCategory | null>(null);
    const [selectedDropdown2, setSelectedDropdown2] = useState<SubCategory | null>(null);
    const [isOpen3, setIsOpen3] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);

    const toggleNavbar = () => {
        if (isOpen2 || isOpen3) {
            setIsOpen2(false);

        } else {
            setIsOpen(!isOpen);
        }
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleback = () => {
        setIsOpen(true);
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleNavbar2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen3(false);
        setIsOpen(false);
    };

    const toggleNavbar3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen2(false);

    };

    const showUnderNav = () => {
        setIsUnderNav(true);
    };

    const hideUnderNav = () => {
        setIsUnderNav(false);
    };

    const toggleback1 = () => {
        setIsOpen3(false);
        setIsOpen(false);
        setIsOpen2(true);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-black h-18 flex items-center px-3 justify-between flex-wrap tablet:gap-x-0 mobile:pt-2 tablet:pt-2">
                {/* Burger Icon */}
                <Image
                    src={isOpen || isOpen2 || isOpen3 ? 'images/x.svg' : 'images/burger.svg'}
                    alt="burger"
                    className="h-7 lg:hidden pl-0"
                    onClick={toggleNavbar}
                    width={100}
                    height={100}
                />

                {/* Logo */}
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    className="h-10 tablet:h-12"
                    width={100}
                    height={100}
                />

                {/* Search Input */}
                <div className="relative lg:w-[37%] mobile:order-2 py-4 mobile:py-2 tablet:order-2 tablet:w-full mobile:w-full">
                    <input
                        type="text"
                        placeholder="Search Products or Categories"
                        className="pl-9 py-2 border border-gray-300 rounded-[0.25rem] w-full focus:outline-none focus:bg-white bg-gray-100"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </span>
                </div>

                {/* Icons - Bag, Favorite, User */}
                <div className="flex gap-2 items-center tablet:gap-6 mobile:h-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8 text-white mobile:hidden"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7z"
                        />
                    </svg>
                    <Image
                        src="images/fav.svg"
                        alt="favorite"
                        className="w-8 h-8 mobile:w-[3rem] mobile:h-8"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="images/bag.svg"
                        alt="bag"
                        className="w-8 h-8 mobile:w-[3rem] mobile:h-8"
                        width={100}
                        height={100}
                    />
                </div>
            </div>

            {/* Navbar for Large Screens */}
            <nav className="hidden lg:flex items-center justify-center w-full text-white bg-gray-800">
                {navdata.map((item, index) => (
                    <ul key={index} className="">
                        <li
                            className="relative group w-auto"
                            onMouseLeave={hideUnderNav}
                            onMouseEnter={() => {
                                setSelectedItem(item as unknown as NavItem);
                                showUnderNav();
                            }}
                        >
                            <a
                                href="#"
                                className="flex p-3 px-7 m-0 lg:inline-flex items-center text-white hover:bg-black hover:text-white"
                            >
                                <span className="ml-4">{item.name}</span>
                            </a>
                        </li>
                        <div
                            className={`flex w-full bg-white z-10 absolute top-50 left-0 right-0 gap-5 justify-center flex-wrap space-x-4 transition-opacity duration-300 ${isUnderNav ? 'opacity-100' : 'opacity-0 lg:hidden'}`}
                            onMouseEnter={showUnderNav}
                            onMouseLeave={hideUnderNav}
                        >
                            {selectedItem?.subCategories?.map((subItem, subIndex) => (
                                <section key={subIndex} className="p-4 font-bold w-auto text-black">
                                    {subItem.name}
                                    <section>
                                        {subItem.subCategories?.map((subSubItem, subSubIndex) => (
                                            <section key={subSubIndex} className="font-normal text-sm text-black mt-2">
                                                {subSubItem.name}
                                            </section>
                                        ))}
                                    </section>
                                </section>
                            ))}
                        </div>
                    </ul>
                ))}
            </nav>

            {/* Navbar for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 left-0 z-50 bg-white w-full p-2 pb-4 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <ul className="flex flex-col items-center gap-5 mobile:items-start tablet:items-start">
                    {navdata.map((item, index) => (
                        <li
                            key={index}
                            className={`relative group w-full ${item.name === 'Sale' || item.name === 'sale' ? 'bg-red-600 text-white' : ''}`}
                            onClick={() => {
                                toggleNavbar2();
                                setSelectedDropdown(item as unknown as SubCategory);
                            }}
                        >
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center border-b border-b-gray-200"
                            >
                                {item.image && (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[2.5rem] h-[2.5rem] rounded-sm tablet:w-[3.5rem] tablet:h-[3.5rem]"
                                    />
                                )}
                                <span className="ml-4 font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                                <span className="font-bold text-xl absolute right-6">
                                    {'>'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <p className="text-center w-[90%] text-l m-auto text-gray-600 mt-4 tablet:text-xl">
                    Become a Member with us for the best products, offers and more.
                </p>

                {/* Buttons for Join Us and Sign In */}
                <div className="flex justify-center gap-4 mt-4 w-full">
                    <button className="text-white w-[5.5rem] h-[2.5rem] rounded-full bg-black hover:bg-gray-800 tablet:w-[7.5rem] tablet:h-[2.5rem]">
                        Join Us
                    </button>
                    <button className="w-[5.5rem] h-[2.5rem] rounded-full text-black border border-gray-400 hover:bg-gray-800 tablet:w-[7.5rem] tablet:h-[2.5rem]">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Submenu for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 right-0 z-50 bg-white w-full overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen2 ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ maxHeight: '80vh' }}
            >
                <section className="flex justify-between items-center p-5 tablet:text-xl">
                    <p className="text-black tablet:text-xl" onClick={toggleback}>
                        {'<'}
                        <span className="font-bold pl-5 tablet:text-xl">
                            {selectedDropdown?.name}
                        </span>
                    </p>
                    <p className="text-blue-700 border-b-blue-700 border-b-2 text-sm font-semibold tablet:text-xl">
                        View All
                    </p>
                </section>
                <ul className="flex flex-col items-center gap-5 mobile:items-start mt-4 tablet:items-start">
                    {selectedDropdown?.subCategories?.map((item, index) => (
                        <li key={index} className="group w-full relative">
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center border-b border-b-gray-200"
                                onClick={() => {
                                    toggleNavbar3();
                                    setSelectedDropdown2(item);
                                }}
                            >
                                {item.image && (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[2.5rem] mobile:h-[2.5rem] rounded-sm tablet:w-[3.5rem] tablet:h-[3.5rem]"
                                    />
                                )}
                                <span className="ml-4 text-black font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                                <span className="font-bold text-black text-xl absolute right-6">
                                    {'>'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Third-level Submenu for Mobile */}
            <nav
                className={`lg:hidden fixed top-30 right-0 z-50 bg-white w-full overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen3 ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ maxHeight: '80vh' }}
            >
                <section className="flex justify-between items-center p-5">
                    <p className="text-black tablet:text-xl" onClick={toggleback1}>
                        {'<'}
                        <span className="font-bold pl-5 tablet:text-xl">
                            {selectedDropdown2?.name}
                        </span>
                    </p>
                    <p className="text-blue-700 border-b-blue-700 border-b-2 text-sm font-semibold tablet:text-xl">
                        View All
                    </p>
                </section>
                <ul className="flex flex-col gap-5 items-start mt-4">
                    {selectedDropdown2?.subCategories?.map((item, index) => (
                        <li key={index} className="group w-full relative">
                            <a
                                href="#"
                                className="flex p-4 lg:inline-flex items-center hover:text-white border-b border-b-gray-200"
                            >
                                <span className="ml-4 text-black font-bold text-sm tablet:text-xl">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;