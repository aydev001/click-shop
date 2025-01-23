import { CgClose } from "react-icons/cg"; 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementItemBasket, removeItemBasket, setBasket } from '../../store/actionSlice/actionSlice'

const BasketCard = ({ item }) => {
    const { favourite, basket } = useSelector(state => state.actions)
    const dispatch = useDispatch()
    const allPrice = basket.map(baskItem => baskItem.price * baskItem.basketCount)
    const totalPrice = allPrice.length > 0 ? allPrice.reduce((sum, item) => sum + item) : 0
    return (
        <div className='flex relative justify-between items-center gap-1 border-[1px] rounded-md shadow-sm p-[10px] text-gray-700'>
            <button onClick={() => dispatch(removeItemBasket(item))} className="absolute top-[8px] right-[8px] hover:bg-gray-300 active:scale-95 bg-gray-100 w-[25px] h-[25px] rounded-sm flex justify-center items-center">
                <CgClose />
            </button>
            <div>
                <img className='max-h-[100px] min-h-[100px] max-w-[100px] rounded-sm' src={item.image} alt={item.name} />
            </div>
            <div className='flex-[1]'>
                <h3 className='text-[16px] font-semibold'>{item.name}</h3>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-[14px]'>
                        <span>price: </span>
                        <span className='font-semibold'>$ {Number(item.price).toLocaleString()}.00</span>
                    </p>
                </div>
            </div>
            <div className='flex-[1] flex justify-between items-center pl-1'>
                <div className='border-[1px] p-[2px] font-semibold flex justify-between gap-1 items-center rounded-full'>
                    <button onClick={() => dispatch(incrementItemBasket(item))} className='min-w-[30px] h-[25px] rounded-l-full rounded-r-sm flex justify-center items-center hover:bg-gray-100 active:scale-95'>
                        -
                    </button>
                    <span className='w-[25px] flex justify-center items-center'>
                        {item.basketCount}
                    </span>
                    <button onClick={() => dispatch(setBasket(item))} className='min-w-[30px] h-[25px] rounded-r-full rounded-l-sm flex justify-center items-center hover:bg-gray-100 active:scale-95'>
                        +
                    </button>
                </div>
                <div className='flex justify-center text-[14px] items-center font-medium flex-col'>
                    <span>Total price</span>
                    <span className='font-semibold'>$ {Number(item.price*item.basketCount).toLocaleString()}.00</span>
                </div>
            </div>
        </div>
    )
}

export default BasketCard
