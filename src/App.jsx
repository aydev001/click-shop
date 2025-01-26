import { TbReload } from "react-icons/tb";
import React, { useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from './store/categorySlice/categorySlice'
import { fetchProducts } from './store/productSlice/productSlice'
import { Player } from '@lottiefiles/react-lottie-player'
import Loading from "./assets/loading.json"
import Error from "./assets/error.json"
import ModalAlert from "./components/page-comp/ModalAlert";
import { ToastContainer } from 'react-toastify';
import { fetchUserProfile } from "./store/userSlice/userSlice";

const App = () => {
  const dispatch = useDispatch()
  const { loading: catLoading, error: catError } = useSelector(state => state.categories)
  const { loading: proLoading, error: proError } = useSelector(state => state.products)
  const { loading: userLoading} = useSelector(state => state.users)
  
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
    dispatch(fetchUserProfile())
  }, [dispatch])

  return (
    <div className='p-[5px] font-mont bg-gray-100'>
      <Header />
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
      <ModalAlert />
      <ToastContainer />
    </div>
  )
}

export default App
