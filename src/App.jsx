import { TbReload } from "react-icons/tb";
import React, { useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Outlet, useLocation, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from './store/categorySlice/categorySlice'
import { fetchProducts } from './store/productSlice/productSlice'
import { Player } from '@lottiefiles/react-lottie-player'
import Loading from "./assets/loading.json"
import Error from "./assets/error.json"
import ModalAlert from "./components/page-comp/ModalAlert";
import { ToastContainer } from 'react-toastify';
import { fetchUserOrders, fetchUserProfile } from "./store/userSlice/userSlice";
import Sidebar from "./components/Sidebar";
import { toggleSidebar } from "./store/actionSlice/actionSlice";
import { IoIosArrowForward } from "react-icons/io";

const App = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { loading: catLoading, error: catError } = useSelector(state => state.categories)
  const { loading: proLoading, error: proError } = useSelector(state => state.products)
  const { userProfile, loading: userLoading } = useSelector(state => state.users)
  const { isSidebar } = useSelector(state => state.actions)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
    dispatch(fetchUserProfile())
    dispatch(fetchUserOrders())
  }, [dispatch])
  return (
    <div className='p-[5px] font-mont bg-gray-100'>
      <Header />
      <div className="flex gap-[5px] relative">
        {pathname.slice(0, 6) === "/admin" && userProfile?.isAdmin &&
          <div className={`absolute ${isSidebar ? "left-[0px]" : "left-[-224px]"} duration-300 w-[220px] border-[1px] shadow-sm rounded-md p-[10px] top-[5px] bottom-[0px] z-20 bg-white md:relative md:top-[5px] md:bottom-0 md:mb-[5px] md:left-0`}>
            <Sidebar />
            <button onClick={() => dispatch(toggleSidebar())} className="h-[40px] w-[25px] bg-indigo-500 text-white rounded-sm text-[20px] flex md:hidden justify-center items-center hover:bg-indigo-600 bg-opacity-50 active:scale-95 absolute top-[50%] translate-y-[-50%] right-[-30px]">
              <div className={`${isSidebar ? "rotate-[180deg]" : "rotate-[0]"} duration-300`}>
                <IoIosArrowForward />
              </div>
            </button>
          </div>
        }
        <Content>
          {catLoading || proLoading && userLoading ?
            <div className='min-h-[calc(100vh-150px)] flex justify-center items-center flex-col'>
              <div className='max-w-[200px]'>
                <Player
                  src={Loading}
                  loop
                  autoplay
                />
              </div>
            </div>
            :
            catError && proError ?
              <div className='flex justify-center items-center flex-col min-h-[calc(100vh-100px)]'>
                <div className='max-w-[200px]'>
                  <Player
                    src={Error}
                    loop
                    autoplay
                    className="max-h-[230px]"
                  />
                </div>
                <div className='text-gray-700 mb-[10px] text-center'>
                  There was an error retrieving information, please reload the page.
                </div>
                <button onClick={() => window.location.href = "/"} className="flex justify-center items-center gap-1 px-[10px] py-[5px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-md text-[14px] font-medium">
                  <span className="text-[18px]">
                    <TbReload />
                  </span>
                  <span>Reload the page</span>
                </button>
              </div>
              :
              <Outlet />
          }
        </Content>
      </div>
      <ModalAlert />
      <ToastContainer />
    </div>
  )
}

export default App
