import React from 'react'
import { useSelector } from 'react-redux'
import AdminCreateProduct from '../../../pages/admin-pages/AdminCreateProduct'

const UpdateProductModal = () => {
    const {selectItemId} = useSelector(state => state.actions)
    const {products} = useSelector(state => state.products)
    const baseData = products.find(item => item.id === selectItemId)
  return (
    <div>
      <AdminCreateProduct baseData={baseData}/>
    </div>
  )
}

export default UpdateProductModal
