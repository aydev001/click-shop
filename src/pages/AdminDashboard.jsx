import React, { useEffect } from 'react'
import NotFount from './NotFount'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { fetchUserAllOrders, fetchUsers } from '../store/userSlice/userSlice'


const AdminDashboard = () => {
    const { userProfile } = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchUserAllOrders())
    }, [dispatch])

    if (!userProfile?.isAdmin) {
        return (
            <div>
                <NotFount />
            </div>
        )
    }
    return (
        <div className=' text-gray-800'>
            <Outlet />
        </div>
    )
}

export default AdminDashboard
