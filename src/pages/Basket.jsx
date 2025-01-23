import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from '../components/page-comp/BasketCard'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router'
import basketImg from "../assets/basket.gif"

const Basket = () => {
  const { favourite, basket } = useSelector(state => state.actions)
  const dispatch = useDispatch()
  const allPrice = basket.map(baskItem => baskItem.price * baskItem.basketCount)
  const allProduct = basket.map(baskItem => baskItem.basketCount)
  const allProductCount = allProduct.length>0? allProduct.reduce((sum, prev) => sum + prev) : 0
  const totalPrice = allPrice.length > 0 ? allPrice.reduce((sum, item) => sum + item) : 0
  return (
    <div className='p-[7px] relative'>
      {basket.length > 0 ?
        <div className='flex gap-[10px] items-start flex-col md:flex-row'>
          <div className='md:flex-[2] w-full flex flex-col gap-[10px]'>
            {basket.map(item => (
              <BasketCard key={item.id} item={item} />
            ))}
          </div>
          <div className='md:flex-[1] bg-indigo-50 md:bg-white shadow-sm border-[1px] rounded-md p-[7px] text-gray-800 bottom-[7px] sticky w-full md:top-[7px]'>
            <h2 className='font-semibold'>
              Order Summary
            </h2>
            <hr className='my-[5px]' />
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between items-center text-[14px]'>
                <div className='font-medium'>
                  Products:
                </div>
                <div className='flex justify-start gap-1 font-semibold'>
                  {allProductCount}
                </div>
              </div>
              <div className='flex justify-between items-center text-[14px]'>
                <div className='font-medium'>
                  The discount:
                </div>
                <div className='flex justify-start gap-1'>
                  <span className="line-through text-gray-600 font-medium">$ {Number(totalPrice + totalPrice * 0.1).toLocaleString()}.00</span>
                  <div className='px-[5px] bg-indigo-100 font-medium rounded-sm'>
                    -10%
                  </div>
                </div>
              </div>
              <div className='font-medium flex justify-between items-center'>
                <span className='text-[14px]'>All total price:</span> <span className='font-semibold'>$ {Number(totalPrice).toLocaleString()}.00</span>
              </div>
            </div>
            <hr className='my-[5px]' />
            <div className='flex justify-end'>
              <button className='px-[10px] py-[5px] rounded-md duration-100 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-medium'>
                Checkout
              </button>
            </div>
          </div>
        </div>
        :
        <div className='flex justify-center items-center flex-col min-h-[calc(100vh-200px)]'>
          <iframe src="https://lottie.host/embed/a5889c32-00ca-4abf-97aa-e72a5b3b8338/Kmfc6f9yFP.lottie"></iframe>
          <div className='text-gray-700 mb-[10px]'>
            Your basket products are not available.
          </div>
          <Link to={"/"} className="flex justify-center items-center gap-1 px-[10px] py-[5px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-md text-[14px] font-medium">
            <span className="text-[18px]">
              <BiLeftArrowAlt />
            </span>
            <span>Home page</span>
          </Link>
        </div>}
    </div>
  )
}

export default Basket
