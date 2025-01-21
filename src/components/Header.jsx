import { BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from "react-router";
import SearchInput from "./page-comp/SearchInput";

const Header = () => {
    return (
        <div className="border-[1px] bg-white rounded-lg max-h-[60px] min-h-[60px] flex justify-between items-center gap-1 p-[15px] shadow-sm">
            <Link to={"/"}>
                <img className='h-[35px] object-contain' src={logo} alt="logo" />
            </Link>
            <div className="flex justify-end items-center gap-[15px]">
                <div>
                    <SearchInput/>
                </div>
                <Link to={"/favourite"} className="flex cursor-pointer group text-[22px] relative justify-center items-center gap-[5px]">
                    <AiOutlineHeart className="group-hover:text-indigo-600" />
                    <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">
                        0
                    </span>
                </Link>
                <Link to={"/basket"} className="flex cursor-pointer group justify-center items-center gap-[7px]">
                    <div className="flex text-[22px] relative justify-center items-center gap-[5px]">
                        <BiCartAlt className="group-hover:text-indigo-600"/>
                        <span className="text-[12px] absolute top-[-10px] pt-[2px] right-[-10px] font-semibold flex justify-center items-center w-[20px] h-[20px] bg-indigo-600 rounded-full text-white">
                            0
                        </span>
                    </div>
                    <span className="text-[14px] font-semibold">$0.00</span>
                </Link>
                <div>
                    <button className="btn btn-primary">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
