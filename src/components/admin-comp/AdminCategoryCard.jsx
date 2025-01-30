import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import React from 'react'
import { motion } from "motion/react";
import { openModalAlert, setSelectItemId } from "../../store/actionSlice/actionSlice";
import { useDispatch } from "react-redux";

const AdminCategoryCard = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: [0, 1], y: [20, -5, 0] }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            key={item.id} className='border-[1px] p-[5px] rounded-[5px] border-indigo-200 shadow-sm bg-gradient-to-r from-indigo-100 to-blue-100'>
            <div className='flex justify-start gap-[5px] h-full'>
                <div className='border-[1px] rounded-md min-w-[115px] min-h-[115px] flex justify-center border-indigo-100 items-center bg-white'>
                    <img className='max-h-[100px] max-w-[115px] p-[5px]' src={item.image} alt={item.title} />
                </div>
                <div className='text-[14px] font-semibold flex flex-col justify-between gap-[5px] flex-1'>
                    <h3 className="mt-[5px]">{item.name}</h3>
                    <p className='text-[12px] text-slate-500 break-all bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-100 font-medium max-h-[60px] min-h-[60px] p-[3px] border-[1px] rounded-[4px] overflow-y-auto'>{item.description}</p>
                    <div className='flex justify-end gap-[5px]'>
                        <button onClick={() => {
                            dispatch(setSelectItemId(item.id))
                            dispatch(openModalAlert("update-categ"))
                        }} className="text-[12px] font-semibold flex justify-center  gap-1 items-center px-[10px] py-[3px] rounded-sm border-[1px] border-blue-500 bg-blue-500 hover:bg-blue-600 hover:shadow-sm duration-75 active:scale-95 text-white">
                            <div className='flex justify-center items-center text-[14px]'>
                                <AiFillEdit />
                            </div>
                            <div>
                                Update
                            </div>
                        </button>
                        <button onClick={() => {
                            dispatch(setSelectItemId(item.id))
                            dispatch(openModalAlert("delete-categ"))
                        }} className="text-[12px] font-semibold flex justify-center  gap-1 items-center px-[10px] py-[3px] rounded-sm border-[1px] border-red-500 bg-red-500 hover:bg-red-600 hover:shadow-sm duration-75 active:scale-95 text-white">
                            <div className='flex justify-center items-center text-[14px]'>
                                <FaTrash />
                            </div>
                            <div>
                                Delete
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AdminCategoryCard
