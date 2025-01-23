import { AiFillHeart } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import StarRating from './StarRaiting'
import { AiOutlineHeart } from 'react-icons/ai'
import { motion } from 'motion/react'
import { useDispatch, useSelector } from 'react-redux'
import { setBasket, setFavourite } from '../../store/actionSlice/actionSlice'

const ProductCard = ({ item, categoryName }) => {
    const { selectCategoryId, favourite, basket } = useSelector(state => state.actions)
    const dispatch = useDispatch()
    const [key, setKey] = useState(0);
    const baskCount = basket.find(baskItem => baskItem.id === item.id)
    useEffect(() => {
        setKey(prev => prev + 1)
    }, [selectCategoryId])
    const checkFavItem = favourite.find(favItem => favItem.id === item.id)
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className='border-[1px] cursor-pointer group hover:border-indigo-100 h-full duration-100 flex flex-col rounded-md overflow-hidden shadow-sm bg-white relative text-gray-700'>
            <button onClick={() => dispatch(setFavourite(item))} className={`w-[35px] h-[35px] flex justify-center items-center bg-black text-[18px] duration-150 text-white hover:scale-105 border-[1px] ${checkFavItem ? "border-red-400 bg-opacity-15" : "border-gray-200 bg-opacity-20"} hover:bg-opacity-15 rounded-full absolute top-[7px] right-[7px] active:scale-100`}>
                {checkFavItem ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
            </button>
            <div className='absolute text-[12px] font-medium bg-black shadow-sm bg-opacity-45 text-white top-[10px] left-[10px] py-[2px] px-[5px] rounded-sm'>
                {categoryName}
            </div>
            <div className="flex justify-center items-center p-[10px] border-b-[1px]">
                <img className='max-h-[170px] min-h-[170px] sm:max-h-[200px] sm:min-h-[200px] object-contain' src={item.image} alt={item.name} />
            </div>
            <div className='px-[10px] py-[7px] flex flex-col gap-2 justify-between flex-1 bg-slate-50 group-hover:bg-indigo-50 duration-100'>
                <h3 className='text-[14px] md:text-[16px] font-semibold'>{item.name}</h3>
                <div className="flex justify-start items-center text-[12px] font-medium gap-1">
                    <div>
                        {item.rate}
                    </div>
                    <div className="text-[14px] text-orange-500">
                        <StarRating rate={item.rate} />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-between items-start">
                        <div className="text-[12px]">
                            <span className="line-through font-medium text-gray-500">${item.price + item.price * 0.1}.00</span> <span className="bg-indigo-200 inline-block px-[2px] rounded-sm">-10%</span>
                        </div>
                        <div className="text-[16px] font-semibold">
                            <span>$ {Number(item.price).toLocaleString()}.00</span>
                        </div>
                    </div>
                    <div className="relative">
                        <button onClick={() => dispatch(setBasket(item))} className="w-[38px] h-[38px] flex justify-center items-center rounded-lg text-[20px] shadow-sm bg-gradient-to-r from-blue-600 to-indigo-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 text-white active:shadow-none active:bg-gradient-to-r active:from-blue-600 active:to-indigo-700">
                            <MdAddShoppingCart />
                        </button>
                        {baskCount &&
                            <span className="text-[12px] absolute top-[-5px] pt-[1px] right-[-7px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-orange-500 rounded-full text-white">
                                {baskCount.basketCount}
                            </span>}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
