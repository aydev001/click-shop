import { SiDash } from "react-icons/si";
import React from 'react'
import { btnData } from "../services/const";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/actionSlice/actionSlice";
import { motion } from "motion/react";

const Sidebar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handdleClick = (path) => {
        navigate(path)
        dispatch(toggleSidebar())
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: [0, 1], y: [10, -5, 0] }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
            <div className="flex justify-center items-center font-bold text-indigo-700 gap-1 italic">
                <div>
                    <SiDash />
                </div>
                <div>
                    Dashboard
                </div>
            </div>
            <hr className="my-[5px]" />
            <div className="flex flex-col gap-1">
                {btnData.map(item => (
                    <button onClick={() => handdleClick(item.path)} key={item.id} className={`${item.path === pathname ? "bg-indigo-500 border-indigo-600 text-white hover:bg-indigo-600" : "bg-white text-gray-700 hover:bg-indigo-100 hover:border-indigo-200"} duration-200 py-[3px] px-[15px] border-[1px]  active:scale-95 rounded-sm shadow-sm w-full flex justify-start font-semibold items-center gap-1 text-[14px]`}>
                        <div className="text-[16px] flex justify-center items-center">
                            {item.icon()}
                        </div>
                        <div>{item.title}</div>
                    </button>
                ))}
            </div>
        </motion.div>
    )
}

export default Sidebar
