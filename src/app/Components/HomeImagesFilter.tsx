import React from 'react';
const CategoryButton = ({ label }) => (
    <div className='flex flex-col'>
        <div className='border-[1px] rounded-md border-black h-[3rem] justify-center items-center mb-6 flex cursor-pointer p-7 py-5 text-nowrap mobile:p-6 mobile:py-3'>
            <p className='text-center text-sm font-normal'>{label}</p>
        </div>
    </div>
);

export const HomeImagesFilter = () => {
    const categories = ['Mens', 'Womens', 'Kids', 'Trainers', 'Football', 'Running', 'Training', 'Daily Deal'];

    return (
        <div className='flex flex-row gap-2 justify-center mobile:justify-start mobile:overflow-x-scroll mobile:mx-3 tablet:overflow-x-scroll tablet:justify-start tablet:mx-3 scrollbar- custom-scrollbar lg:mx-2 ' >
            {categories.map((category) => (
                <CategoryButton key={category} label={category} />
            ))}

        </div>
    );
};
