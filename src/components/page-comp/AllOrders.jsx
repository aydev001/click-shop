import { RiHistoryFill } from "react-icons/ri"; 
import { MdHistory } from "react-icons/md";
import React from 'react'
import { useSelector } from "react-redux";


const AllOrders = () => {
    const { orders } = useSelector(state => state.users)
    
    if (!orders.length > 0) {
        return (
            <div className="flex justify-center items-center flex-col text-gray-400 min-h-[calc(100vh-300px)]">
                <div className="text-[30px]">
                    <RiHistoryFill />
                </div>
                <div className="text-[14px] font-medium">
                    Your order history is empty.
                </div>
            </div>
        )
    }
    return (
        <div className="">
            <h1 className="font-semibold my-1 flex justify-start items-center gap-1">
                <span className="flex justify-center items-center text-[18px]"><MdHistory /></span>
                <span>Your order history</span>
            </h1>
            <div className="flex flex-col-reverse gap-[10px]">
                {orders.map((order) => (
                    <div key={order._id} className="bg-slate-50 border-[1px] shadow-sm rounded-md p-[10px]">
                        <div className="mb-1 flex justify-between items-center">
                            <p className="text-[14px] font-medium text-gray-600">
                                Created at: <span className="text-gray-800 font-semibold">{new Date(order.createdAt).toLocaleString("uz-UZ",{hour12: false})}</span>
                            </p>
                            <p className="text-[14px] bg-orange-400 px-[5px] rounded-sm font-semibold text-white">
                                $ {Number(order.products.map(item => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)).toLocaleString()}
                            </p>
                        </div>
                        <hr className="mb-[5px]" />
                        <div className="space-y-2">
                            {order.products.map((product) => (
                                <div
                                    key={product._id}
                                    className="flex items-center justify-between border-b pb-2 last:pb-0 last:border-none"
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-[60px] h-[60px] border-[1px] rounded-sm bg-white flex items-center justify-center text-sm text-gray-500">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[14px]">{product.name}</p>
                                            <p className="font-medium text-[12px] text-gray-600">
                                                <span>Price: </span><span className="text-gray-800 font-semibold">$ {Number(product.price).toLocaleString()}</span>
                                            </p>
                                            <p className="text-[12px] font-medium text-gray-600">
                                                Quantity: <span className="text-gray-800 font-semibold">{product.quantity}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end flex-col items-center">
                                        <div className="text-[14px] font-medium">
                                            Total price
                                        </div>
                                        <p className="font-semibold text-[14px] text-gray-800">
                                            $ {Number(product.price * product.quantity).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllOrders
