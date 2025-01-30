import React from 'react'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalAlert } from '../../store/actionSlice/actionSlice'
import { motion } from 'motion/react'
import Login from '../modal-cont/Login'
import SignUp from '../modal-cont/SignUp'
import DeleteCategModal from '../modal-cont/admin-modal/DeleteCategModal'
import UpdateCategModal from '../modal-cont/admin-modal/UpdateCategModal'
import DeleteProductModal from '../modal-cont/admin-modal/DeleteProductModal'
import UpdateProductModal from '../modal-cont/admin-modal/UpdateProductModal'

const ModalAlert = () => {
    const { modalContent, isModalAlert } = useSelector(state => state.actions)
    const dispatch = useDispatch()
    return (
        <div className={`${isModalAlert ? "flex" : "hidden"} overlay fixed z-20 top-0 bg-black bg-opacity-35 backdrop-blur-[1px] py-[20px] left-0 right-0 bottom-0  justify-center overflow-y-auto`}>
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: [0, 1], y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                className='w-[500px] z-30 bg-white h-max p-[15px] mx-[10px] my-auto rounded-md shadow-sm border-[1px]'>
                <div className='flex justify-between items-center'>
                    <div className='text-[16px] font-semibold'>
                        {
                            modalContent === "login" && "Login"
                        }
                        {
                            modalContent === "sign-up" && "Create account"
                        }
                        {
                            modalContent === "delete-categ" && "Delete category"
                        }
                        {
                            modalContent === "update-categ" && "Update category"
                        }
                        {
                            modalContent === "delete-product" && "Delete product"
                        }
                        {
                            modalContent === "update-product" && "Update product"
                        }
                    </div>
                    <button onClick={() => dispatch(closeModalAlert())} className=" hover:bg-gray-300 active:scale-95 bg-gray-100 w-[25px] h-[25px] rounded-sm flex justify-center items-center">
                        <CgClose />
                    </button>
                </div>
                <hr className='my-[5px]' />
                <div>
                    {
                        modalContent === "login" && <Login />
                    }
                    {
                        modalContent === "sign-up" && <SignUp />
                    }
                    {
                        modalContent === "delete-categ" && <DeleteCategModal />
                    }
                    {
                        modalContent === "update-categ" && <UpdateCategModal />
                    }
                    {
                        modalContent === "delete-product" && <DeleteProductModal/>
                    }
                    {
                        modalContent === "update-product" && <UpdateProductModal/>
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default ModalAlert
