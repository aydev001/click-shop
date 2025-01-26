import React from 'react'
import CategorySlide from '../components/page-comp/CategorySlide'
import Products from '../components/page-comp/Products'

const HomeProducts = () => {
  return (
    <div>
      <div className='sticky right-[10px] z-[1] left-[10px] top-[-2px] bg-white p-[7px] border-b-[1px] shadow-sm'>
        <CategorySlide />
      </div>
      <Products />
    </div>
  )
}

export default HomeProducts
