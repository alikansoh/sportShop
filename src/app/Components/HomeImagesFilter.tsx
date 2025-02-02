import React from 'react';
const CategoryButton = ({ label }: { label: string }) => (
    <div className='flex flex-col'>
        <div className='border-[1px] rounded-md border-black h-[3rem] justify-center items-center mb-6 flex cursor-pointer p-7 py-5 text-nowrap mobile:p-6 mobile:py-3 mobile:no-scrollbar hover:border-orange-600 tablet:no-scrollbar'>
            <p className='text-center text-sm font-normal'>{label}</p>
        </div>
    </div>
);

export const HomeImagesFilter = () => {
    const categories = ['Televisions', 'Gaming Laptops', 'Dryer', 'Landry', 'Speeker', 'Cameras', 'dishwasher'];

    return (
        <div className='flex flex-row gap-2 justify-center mobile:justify-start mobile:overflow-x-scroll mobile:mx-3 tablet:overflow-x-scroll tablet:justify-start tablet:mx-3 scrollbar- custom-scrollbar lg:mx-2  mobile:scrollbar-none' >
            {categories.map((category) => (
                <CategoryButton key={category} label={category} />
            ))}

        </div>
    );
};
