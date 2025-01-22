import React, { useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Outlet } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from './store/categorySlice/categorySlice'
import { fetchProducts } from './store/productSlice/productSlice'

const App = () => {
  const dispatch = useDispatch()
  const { loading: catLoading, error: catError } = useSelector(state => state.categories)
  const { loading: proLoading, error: proError } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='p-[5px] font-mont bg-gray-100'>
      <Header />
      <Content>
        {catLoading && proLoading ?
          <div className='min-h-[calc(100vh-150px)] flex justify-center items-center flex-col'>
            <iframe src="https://lottie.host/embed/0465c3c9-c6b8-4b1a-a915-8a6e6c589485/rQCt48fMMK.lottie"></iframe>
          </div>
          :
          <Outlet />}
      </Content>
    </div>
  )
}

export default App
