import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import StarRating from '../components/page-comp/StarRaiting'
import { setBasket, setFavourite } from "../store/actionSlice/actionSlice";
import { motion } from "motion/react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

const ProductDetail = () => {
  const { id } = useParams()
  const { categories } = useSelector(state => state.categories)
  const { products } = useSelector(state => state.products)
  const selectProduct = products.find(item => item.id === id)
  const { favourite, basket } = useSelector(state => state.actions)
  const dispatch = useDispatch()
  const baskCount = basket?.find(baskItem => baskItem?.id === selectProduct?.id)
  const checkFavItem = favourite?.find(favItem => favItem?.id === selectProduct?.id)

  return (
    <div className='p-[10px] text-gray-800 w-full lg:w-[95%] mx-auto max-w-[1400px]'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className='flex flex-col md:flex-row gap-[10px]'>
        <div className='flex-1 relative'>
          <div className="w-full h-full  border-[1px] rounded-[5px] p-[5px] shadow-sm overflow-hidden">
            <InnerImageZoom src={selectProduct ? selectProduct.image : ""} zoomType="hover" />
          </div>
          <div className="px-[10px] py-[5px] absolute top-[10px] left-[10px] font-semibold text-[12px] bg-indigo-800 bg-opacity-55 rounded-sm text-white backdrop-blur-[2px] flex justify-center items-center">
            {categories?.find(catItem => catItem.id === selectProduct?.categoryId)?.name}
          </div>
        </div>
        <div className='flex-[1.5] p-[10px] flex flex-col gap-[10px] justify-between'>
          <div className="hidden md:block">
            <div className='flex justify-between items-center gap-[10px]'>
              <Link to={-1}>
                <button className="px-[10px] py-[5px] font-medium text-[14px] bg-slate-100 rounded-sm text-slate-700 active:scale-95 hover:bg-slate-200 flex justify-center items-center gap-1">
                  <div>
                    <IoMdArrowBack />
                  </div>
                  <div>
                    Back
                  </div>
                </button>
              </Link>
              <button onClick={() => dispatch(setFavourite(selectProduct))} className='w-[35px] h-[35px] flex justify-center hover:bg-red-50 items-center border-[1px] border-red-400 active:scale-95 text-red-500 font-medium rounded-sm'>
                <span className="text-[20px]">
                  {checkFavItem ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
                </span>
              </button>
            </div>
            <hr className='my-[7px]' />
          </div>
          <div className='flex flex-col gap-[10px] flex-1 justify-center'>
            <h3 className='text-[20px] font-semibold'>{selectProduct?.name}</h3>
            <div>
              <h5 className='font-semibold text-[14px]'>Description:</h5>
              <p className='text-[12px] lg:text-[14px] font-medium'>
                {selectProduct?.description}
              </p>
            </div>
            <div className='flex justify-between items-center gap-1'>
              <div className='flex gap-1 items-center'>
                <span className='font-medium'>price: </span>
                <span className='font-semibold text-[18px] text-indigo-700'>$ {Number(selectProduct?.price).toLocaleString()}</span>
              </div>
              <div className='flex gap-1 items-center'>
                <span className='font-medium'>{selectProduct?.rate}</span>
                <span className='text-orange-500'>
                  <StarRating rate={selectProduct?.rate} />
                </span>
              </div>
            </div>
          </div>
          <div>
            <hr className='my-[7px]' />
            <div className='flex justify-end gap-[10px]'>
              <button onClick={() => dispatch(setFavourite(selectProduct))} className='w-[35px] h-[35px] flex md:hidden justify-center items-center border-[1px] border-red-400 active:scale-95 text-red-500 font-medium rounded-sm'>
                <span className="text-[20px]">
                  {checkFavItem ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
                </span>
              </button>
              <button onClick={() => dispatch(setBasket(selectProduct))} className='duration-100 px-[10px] relative py-[5px] flex justify-center items-center gap-1 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium rounded-sm'>
                <span className="text-[18px]">
                  <MdAddShoppingCart />
                </span>
                <span>Add to cart</span>
                {baskCount &&
                  <span className="text-[12px] absolute top-[-5px] pt-[1px] right-[-7px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-orange-500 rounded-full text-white">
                    {baskCount.basketCount}
                  </span>}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductDetail
