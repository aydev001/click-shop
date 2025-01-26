import { CgSpinner } from "react-icons/cg"; 
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from "react-router";
import SearchInput from "./page-comp/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { openModalAlert } from "../store/actionSlice/actionSlice";
import { motion } from "motion/react";
import ProfileButton from "./page-comp/ProfileButton";

const Header = () => {
    const dispatch = useDispatch()
    const { favourite, basket } = useSelector(state => state.actions)
    const allPrice = basket.map(baskItem => baskItem.price * baskItem.basketCount)
    const totalPrice = allPrice.length > 0 ? allPrice.reduce((sum, item) => sum + item) : 0
    const { userProfile, loading } = useSelector(state => state.users)

    return (
        <motion.div
            className="border-[1px] bg-white rounded-lg max-h-[60px] min-h-[60px] flex justify-between items-center gap-1 p-[15px] shadow-sm">
            <Link to={"/"}>
                <img className='h-[30px] sm:h-[35px] object-contain active:scale-95 duration-100' src={logo} alt="logo" />
            </Link>
            <div className="flex justify-end items-center gap-[15px]">
                <div className="hidden sm:block">
                    <SearchInput />
                </div>
                <Link to={"/favourite"} className="flex cursor-pointer group text-[22px] relative justify-center items-center gap-[5px]">
                    <AiOutlineHeart className="group-hover:text-indigo-600" />
                    <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">
                        {favourite.length}
                    </span>
                </Link>
                <Link to={"/basket"} className="flex cursor-pointer group justify-center items-center gap-[7px]">
                    <div className="flex text-[22px] relative justify-center items-center gap-[5px]">
                        <MdOutlineShoppingCart className="group-hover:text-indigo-600" />
                        <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">
                            {basket.length}
                        </span>
                    </div>
                    <span className="text-[14px] font-semibold group-hover:text-indigo-600">${Number(totalPrice).toLocaleString()}{basket.length>0? "" : ".00"}</span>
                </Link>
                <div>
                    {userProfile ?
                        <ProfileButton userData={userProfile}/>
                        :
                        <button disabled={loading} onClick={() => dispatch(openModalAlert("login"))} className="btn btn-primary flex justify-center items-center">
                            {loading? <span className="animate-spin text-[22px] flex justify-center items-center py-[1px]"><CgSpinner /></span> : <span className="px-[10px]">Login</span>}
                        </button>
                    }

                </div>
            </div>
        </motion.div>
    )
}

export default Header
