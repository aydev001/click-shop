import { BiLeftArrowAlt } from "react-icons/bi";
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/page-comp/ProductCard'
import { Link } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import emptyFavourite from "../assets/empty-favourite.json"
import { motion } from "motion/react";

const Favourite = () => {
  const { favourite } = useSelector(state => state.actions)
  const { categories } = useSelector(state => state.categories)
  return (
    <div className='p-[7px]'>
      {favourite.length > 0 ?
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 w-[95%] mx-auto max-w-[1400px]'>
          {favourite.map(item => (
            <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name} />
          ))}
        </div>
        :
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className='flex justify-center items-center flex-col min-h-[calc(100vh-200px)]'>
          <div className='max-w-[200px]'>
            <Player
              src={emptyFavourite}
              loop
              autoplay
            />
          </div>
          <div className='text-gray-700 mb-[10px]'>
            Your favorite products are not available.
          </div>
          <Link to={"/"} className="flex justify-center items-center gap-1 px-[10px] py-[5px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-md text-[14px] font-medium">
            <span className="text-[18px]">
              <BiLeftArrowAlt />
            </span>
            <span>Home page</span>
          </Link>
        </motion.div>}
    </div>
  )
}

export default Favourite
