import { BiLeftArrowAlt } from "react-icons/bi";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAlert } from '../../../store/actionSlice/actionSlice'
import { FaTrash } from "react-icons/fa";
import axiosInstance from "../../../api/axiosInstance";
import { errorToast, succsessToast } from "../../../services/toastService";
import { fetchProducts } from "../../../store/productSlice/productSlice";

const DeleteProductModal = () => {
  const { selectItemId } = useSelector(state => state.actions)
  const dispatch = useDispatch()
  const [pending, setPending] = useState()
  const handleDeleteProduct = async (id) => {
    try {
      setPending(true)
      const res = await axiosInstance.delete(`/products/delete/${id}`)
      setPending(false)
      dispatch(fetchProducts())
      dispatch(closeModalAlert())
      succsessToast("Product was successfully deleted")
    } catch (error) {
      setPending(false)
      errorToast(error.response?.data?.message)
    }
  }
  return (
    <div>
      <p className='text-[14px] font-medium'>Are you sure you want to delete this product ?</p>
      <div className='flex justify-end gap-[5px] mt-[10px]'>
        <button onClick={() => {
          dispatch(closeModalAlert())
        }} className="text-[12px] font-semibold flex justify-center  gap-1 items-center px-[10px] py-[4px] rounded-sm border-[1px] border-blue-500 bg-blue-500 hover:bg-blue-600 hover:shadow-sm duration-75 active:scale-95 text-white">
          <div>
            Cancel
          </div>
        </button>
        <button disabled={pending} onClick={() => handleDeleteProduct(selectItemId)} className={`${pending? "cursor-wait" : "cursor-pointer"} text-[12px] font-semibold flex justify-center  gap-1 items-center px-[10px] py-[4px] rounded-sm border-[1px] border-red-500 bg-red-500 hover:bg-red-600 hover:shadow-sm duration-75 active:scale-95 text-white`}>
          <div className='flex justify-center items-center text-[14px]'>
            <FaTrash />
          </div>
          <div>
            Yes
          </div>
        </button>
      </div>
    </div>
  )
}

export default DeleteProductModal
