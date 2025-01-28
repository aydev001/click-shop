import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../../api/axiosInstance'
import { fetchUserOrders } from '../../store/userSlice/userSlice'
import { errorToast, infoToast, succsessToast } from '../../services/toastService'
import { removeAllItemBasket } from '../../store/actionSlice/actionSlice'

const CheckoutCard = () => {
  const { basket } = useSelector(state => state.actions)
  const dispatch = useDispatch()
  const allPrice = basket.map(baskItem => baskItem.price * baskItem.basketCount)
  const allProduct = basket.map(baskItem => baskItem.basketCount)
  const allProductCount = allProduct.length > 0 ? allProduct.reduce((sum, prev) => sum + prev) : 0
  const totalPrice = allPrice.length > 0 ? allPrice.reduce((sum, item) => sum + item) : 0

  const [pending, setPending] = useState(false)

  const bodyData = {
    products: basket.map(item => {
      return { name: item.name, image: item.image, price: item.price, quantity: item.basketCount }
    })
  }

  const checkOutProducts = async (products) => {
    try {
      setPending(true)
      await axiosInstance.post("/users/create-order", products)
      dispatch(fetchUserOrders())
      setPending(false)
      succsessToast("Your orders have been sent.")
      dispatch(removeAllItemBasket())
    } catch (error) {
      setPending(false)
      errorToast(error.response.data?.message)
    }
  }

  return (
    <div>
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
            <span className="line-through text-gray-600 font-medium">$ {Number(Number(totalPrice / 0.9).toFixed()).toLocaleString()}</span>
            <div className='px-[5px] bg-indigo-100 font-medium rounded-sm'>
              -10%
            </div>
          </div>
        </div>
        <div className='font-medium flex justify-between items-center'>
          <span className='text-[14px]'>All total price:</span> <span className='font-semibold'>$ {Number(totalPrice).toLocaleString()}</span>
        </div>
      </div>
      <hr className='my-[5px]' />
      <button
        disabled={pending} onClick={() => { checkOutProducts(bodyData) }}
        className={`px-[10px] w-full text-[14px] ${pending ? "cursor-wait" : "cursor-pointer"} py-[7px] rounded-[5px] duration-100 bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-indigo-600 active:scale-95 text-white font-medium`}>
        {pending ? "SENDING" : "CHECKOUT"}
      </button>
    </div >
  )
}

export default CheckoutCard
