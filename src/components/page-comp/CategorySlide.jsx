import { BiCategoryAlt } from "react-icons/bi";
import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CategorySlide = () => {
    const { categories, loading, error } = useSelector(state => state.categories)
    return (
        <div className='flex justify-start items-center gap-2'>
            <div className='border-[1px] min-w-max px-[15px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1'>
                <div className="min-h-[25px] flex justify-center items-center">
                    <BiCategoryAlt />
                </div>
                <div className="font-semibold text-[14px]">
                    All Products
                </div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                breakpoints={{
                    0: {
                        slidesPerView: 1,  // 640px ekranlarda 1 ta slayd
                    },
                    768: {
                        slidesPerView: 2,  // 768px ekranlarda 2 ta slayd
                    },
                    1024: {
                        slidesPerView: 5,  // 1024px ekranlarda 3 ta slayd
                    },
                }}
            >
                {categories.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='border-[1px] cursor-pointer min-w-max px-[15px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1'>
                            <div>
                                <img className="max-h-[25px] min=h-[25px] min-w-[25px] object-contain" src={item.image} alt="" />
                            </div>
                            <div className="font-semibold text-[14px]">
                                {item.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategorySlide
