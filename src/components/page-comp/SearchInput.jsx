import { BiSearch } from "react-icons/bi"; 
import React from 'react'

const SearchInput = () => {
    return (
        <div className='relative border-[2px] rounded-full overflow-hidden border-indigo-600'>
            <input type="text" placeholder='Search' className='px-[18px] py-[5px] pr-[40px] outline-none text-[14px]' />
            <div className="absolute top-[1px] right-[1px] bottom-[1px] rounded-full bg-indigo-50 hover:bg-indigo-100 active:scale-95 cursor-pointer w-[30px] flex justify-center items-center">
                <BiSearch />
            </div>
        </div>
    )
}

export default SearchInput
