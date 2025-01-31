import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'


const Content = ({ children }) => {
  const { selectCategoryId } = useSelector(state => state.actions)
  const scrollCont = useRef()
  const { pathname } = useLocation()
  useEffect(() => {
    scrollCont.current.scrollTop = 0
  }, [selectCategoryId, pathname])
  return (
    <div ref={scrollCont} className='border-[1px] bg-white flex-1 rounded-md relative min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-[5px]'>
      {children}
    </div>
  )
}

export default Content