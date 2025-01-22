import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "./ProductCard";


const Products = () => {
    const { products} = useSelector(state => state.products)
    const { categories } = useSelector(state => state.categories)
    const { selectCategoryId } = useSelector(state => state.actions)
    return (
        <div className='p-[7px]'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 w-[95%] mx-auto max-w-[1400px]'>
                {selectCategoryId ?
                    products.filter(item => item.categoryId == selectCategoryId).map(item => (
                        <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name}/>
                    ))
                    :
                    products.map(item => (
                        <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name}/>
                    ))}
            </div>
        </div>
    )
}

export default Products
