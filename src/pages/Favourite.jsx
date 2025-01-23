import { BiLeftArrowAlt } from "react-icons/bi";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/page-comp/ProductCard'
import { Link } from "react-router";

const Favourite = () => {
  const { favourite } = useSelector(state => state.actions)
  const { categories } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  return (
    <div className='p-[7px]'>
      {favourite.length > 0 ?
        <div className='grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 w-[95%] mx-auto max-w-[1400px]'>
          {favourite.map(item => (
            <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name} />
          ))}
        </div>
        :
        <div className='flex justify-center items-center flex-col min-h-[calc(100vh-200px)]'>
          <iframe src="https://lottie.host/embed/07311c55-8328-43f4-81a9-099f6c754d4d/xsb2kcEfNb.lottie"></iframe>
          <div className='text-gray-700 mb-[10px]'>
            Your favorite products are not available.
          </div>
          <Link to={"/"} className="flex justify-center items-center gap-1 px-[10px] py-[5px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-md text-[14px] font-medium">
            <span className="text-[18px]">
              <BiLeftArrowAlt />
            </span>
            <span>Home page</span>
          </Link>
        </div>}
    </div>
  )
}

export default Favourite
