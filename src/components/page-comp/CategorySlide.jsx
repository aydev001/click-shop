import { IoIosArrowForward } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { setSelectCategory } from "../../store/actionSlice/actionSlice";
import { motion} from "motion/react";

const CategorySlide = () => {
    const { categories, loading, error } = useSelector(state => state.categories)
    const dispatch = useDispatch()
    const { selectCategoryId } = useSelector(state => state.actions)


    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: [50, -10, 0] }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            className='flex justify-start items-center gap-1 max-w-[1400px] mx-auto'>
            <div onClick={() => dispatch(setSelectCategory(null))} className='border-[1px] bg-white relative overflow-hidden min-w-max hover:bg-gray-50 active:scale-95 duration-75 cursor-pointer px-[15px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1'>
                <div className="min-h-[20px] sm:min-h-[25px] flex justify-center items-center">
                    <BiCategoryAlt />
                </div>
                <div className="font-semibold text-[12px] sm:text-[14px]">
                    All <span className="hidden md:inline">Products</span>
                </div>
                <div className={`absolute h-[3px] left-0 right-0 duration-75 bottom-0 ${selectCategoryId === null ? "bg-indigo-600" : "bg-slate-100"}`}>

                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={"auto"}
                navigation={{
                    nextEl: ".swiper-button-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,  // 640px ekranlarda 1 ta slayd
                    },
                    520: {
                        slidesPerView: 3,  // 768px ekranlarda 2 ta slayd
                    },
                    838: {
                        slidesPerView: 4,  // 768px ekranlarda 2 ta slayd
                    },
                    1024: {
                        slidesPerView: 5,  // 768px ekranlarda 2 ta slayd
                    },
                    1200: {
                        slidesPerView: 6,  // 1024px ekranlarda 3 ta slayd
                    },
                }}
            >
                {categories.map(item => (
                    <SwiperSlide key={item.id} className="min-w-max">
                        <div onClick={() => dispatch(setSelectCategory(item.id))} className='border-[1px] bg-white hover:bg-gray-50 relative overflow-hidden active:scale-95 duration-75 cursor-pointer px-[5px] sm:px-[10px] py-[5px] rounded-md shadow-sm flex justify-center items-center gap-1'>
                            <div>
                                <img className="max-h-[20px] sm:max-h-[25px] sm:min-h-[25px] sm:min-w-[25px] object-contain" src={item.image} alt="" />
                            </div>
                            <div className="font-semibold text-[12px] sm:text-[14px]">
                                {item.name}
                            </div>
                            <div className={`absolute h-[3px] duration-200 left-0 right-0 bottom-0 ${selectCategoryId === item.id ? "bg-indigo-600" : "bg-slate-100"}`}>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={`swiper-button-next cursor-pointer hover:text-indigo-600 hover:scale-110 active:scale-95`}>
                <IoIosArrowForward />
            </button>
        </motion.div>
    )
}

export default CategorySlide
