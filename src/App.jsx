import React, { useEffect } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchCategories } from './store/categorySlice/categorySlice'
import { fetchProducts } from './store/productSlice/productSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='p-[5px] font-mont bg-gray-100'>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default App
