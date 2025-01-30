import React from 'react'
import NotFount from './NotFount'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

const AdminDashboard = () => {
    const { userProfile } = useSelector(state => state.users)

    if (!userProfile?.isAdmin) {
        return (
            <div>
                <NotFount />
            </div>
        )
    }
    return (
        <div className=' text-gray-800'>
            <Outlet/>
        </div>
    )
}

export default AdminDashboard
