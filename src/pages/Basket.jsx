import React from 'react'
import { useSelector } from 'react-redux'
import BasketCard from '../components/page-comp/BasketCard'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router'
import CheckoutCard from '../components/page-comp/CheckoutCard'
import emptyBasket from "../assets/empty-basket.json"
import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'motion/react'

const Basket = () => {
  const { basket } = useSelector(state => state.actions)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      className='p-[7px] relative'>
      {basket.length > 0 ?
        <div className='flex gap-[10px] items-start flex-col md:flex-row'>
          <div className='md:flex-[2] w-full flex flex-col gap-[10px]'>
            {basket.map(item => (
              <BasketCard key={item.id} item={item} />
            ))}
          </div>
          <div className='md:flex-[1] bg-indigo-50 md:bg-white shadow-[0_-2px_5px_1px_rgb(0,0,0,0.07)] md:shadow-sm border-[1px] md:rounded-md rounded-sm p-[7px] text-gray-800 bottom-[0px] sticky w-full md:top-[7px]'>
            <CheckoutCard />
          </div>
        </div>
        :
        <div className='flex justify-center items-center flex-col min-h-[calc(100vh-200px)]'>
          <div className='max-w-[200px]'>
            <Player
              src={emptyBasket}
              loop
              autoplay
            />
          </div>
          <div className='text-gray-700 mb-[10px] text-center'>
            Your basket products are not available.
          </div>
          <Link to={"/products"} className="flex justify-center items-center gap-1 px-[10px] py-[5px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-md text-[14px] font-medium">
            <span className="text-[18px]">
              <BiLeftArrowAlt />
            </span>
            <span>Product page</span>
          </Link>
        </div>}
    </motion.div>
  )
}

export default Basket
