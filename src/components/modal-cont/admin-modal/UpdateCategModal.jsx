import React from 'react'
import AdminCreateCategory from '../../../pages/admin-pages/AdminCreateCategory'
import { useSelector } from 'react-redux'

const UpdateCategModal = () => {
    const {selectItemId} = useSelector(state => state.actions)
    const {categories} = useSelector(state => state.categories)
    const baseData = categories.find(item => item.id === selectItemId)
  return (
    <div>
      <AdminCreateCategory baseData={baseData}/>
    </div>
  )
}

export default UpdateCategModal
