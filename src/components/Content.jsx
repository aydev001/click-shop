import React from 'react'

const Content = ({children}) => {
  return (
    <div className='border-[1px] bg-white rounded-lg min-h-[calc(100vh-79px)] max-h-[calc(100vh-79px)] shadow-sm overflow-y-auto mt-[5px] p-[10px]'>
      {children}
    </div>
  )
}

export default Content