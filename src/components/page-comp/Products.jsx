import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "./ProductCard";
import { motion } from 'motion/react';
import emptyProducts from "../../assets/empty-product.json"
import { Player } from '@lottiefiles/react-lottie-player';


const Products = () => {
    const { products } = useSelector(state => state.products)
    const { categories } = useSelector(state => state.categories)
    const { selectCategoryId } = useSelector(state => state.actions)
    const selectProducts = selectCategoryId ? products.filter(item => item.categoryId == selectCategoryId) : products
    return (
        <div className='py-[7px]'>
                {selectProducts.length > 0 ?
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 px-[7px] mx-auto max-w-[1400px]'>
                        {selectCategoryId ?
                            products.filter(item => item.categoryId == selectCategoryId).map(item => (
                                <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name} />
                            ))
                            :
                            products.map(item => (
                                <ProductCard key={item.id} item={item} categoryName={categories.find(catItem => catItem.id === item.categoryId)?.name} />
                            ))}
                    </div>
                    :
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: [0, 1], y: [30, -10, 0] }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        className='flex justify-center items-center flex-col min-h-[calc(100vh-200px)]'>
                        <div className='max-w-[200px]'>
                            <Player
                                src={emptyProducts}
                                loop
                                autoplay
                            />
                        </div>
                        <div className='text-gray-600 mb-[10px] text-[14px]'>
                            There are no products in this category
                        </div>
                    </motion.div>}
            </div>
    )
}

export default Products
