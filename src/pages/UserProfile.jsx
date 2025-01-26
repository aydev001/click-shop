import { BsCheck2All } from "react-icons/bs";
import React from 'react'
import { useSelector } from 'react-redux'
import NotFount from "./NotFount";

const UserProfile = () => {
    const { userProfile } = useSelector(state => state.users)
    console.log(userProfile)

    if(!userProfile) {
        return (
            <div>
                <NotFount/>
            </div>
        )
    }

    return (
        <div className='p-[7px] text-gray-800'>
            <div className='flex justify-between items-center gap-[2px] flex-col border-b-[1px] pb-[5px]'>
                {
                    userProfile?.isActive ?
                        <div className='flex-1 text-[14px] border-[1px] rounded-sm py-[5px] flex-col w-full px-[10px] bg-green-100 border-green-200 font-medium flex justify-center items-center'>
                            <div className="flex justify-center items-center gap-1">
                                <div>Acount: </div>
                                <div className="text-green-600 font-semibold flex justify-start items-center gap-1">
                                    <span>Verified</span>
                                    <span className="text-[18px]"><BsCheck2All /></span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex-1 text-[14px] border-[1px] rounded-sm py-[5px] flex-col w-full px-[10px] bg-red-100 border-red-200 font-medium flex justify-center items-center'>
                            <div className="flex justify-center items-center gap-1">
                                <div>Acount: </div>
                                <div className="text-red-500 font-semibold">
                                    Not verified !
                                </div>
                            </div>
                            <div className="text-[12px] font-medium text-gray-600 text-center">
                                An activation link has been sent to your email, click it to activate your account.
                            </div>
                        </div>

                }
                <div className='flex-1 text-[14px] font-medium flex justify-start items-center gap-1'>
                    <span>User name: </span>
                    <span className='font-semibold'>{userProfile?.userName}</span>
                </div>
                <div className='flex-1 text-[14px] font-medium flex justify-start items-center gap-1'>
                    <span>Email: </span>
                    <span className='font-semibold'>{userProfile?.email}</span>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
