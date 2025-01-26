import { BsArrowRightShort } from "react-icons/bs";
import React from 'react'
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='p-[7px] relative min-h-[calc(100vh-79px)] overflow-hidden max-w-[2000px] mx-auto flex justify-center items-center flex-col gap-3'>
            <div
                className="flex relative z-[1] flex-col justify-center items-center gap-3">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                    className='text-[30px] md:text-[40px] lg:text-[45px] font-bold leading-[36px] md:leading-[50px] lg:leading-[55px] text-center mx-[5%] text-indigo-700 drop-shadow-md max-w-[1000px]'>
                    Find life-easing technologies only at Click Shop!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
                    className='text-gray-600 font-medium text-center max-w-[700px] mx-[5%] text-[12px] md:text-[14px]'>
                    We have the latest smartphones, modern laptops, computers, and various accessories. Only with us you can buy quality technology at affordable prices!
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                    onClick={() => navigate("/products")} className='pl-[20px] pr-[15px] text-[16px] py-[7px] flex justify-center items-center gap-1 hover:shadow-lg rounded-full duration-100 bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium'>
                    <span>
                        Get started
                    </span>
                    <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 7 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.2
                        }}
                        className='text-[20px] flex justify-center items-center'>
                        <BsArrowRightShort />
                    </motion.span>
                </motion.button>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: [0, 1], x: [30, -10, 0] }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
                className="w-[250px] h-[250px] left-[10%] top-[20%] bg-purple-500 bg-opacity-30 rounded-full blur-[200px] absolute">

            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: [0, 1], x: [-30, 10, 0] }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
                className="w-[300px] h-[300px] top-[50%] right-[10%] bg-indigo-500 bg-opacity-30 rounded-full blur-[200px] absolute">

            </motion.div>
        </div>
    )
}

export default Home
