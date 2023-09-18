import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';


const Category = ({ setCategory }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='min-w-[260px] max-w-[260px] bg-gray-200 p-4'>
            <div className='text-xl font-bold'>
                <div className='border-b-4 border-gray-400 mb-2 pb-1'>Kategoriler</div>
                <div onClick={() => { setCategory('') }} className='cursor-pointer mb-1 py-2 hover:bg-gray-300 capitalize'> Tüm Ürünler </div>
                {categories.map((category, i) => {
                    return <div onClick={() => {
                        setCategory(category)
                    }} className='cursor-pointer mb-1 py-2 hover:bg-gray-300 capitalize' key={i}> {category} </div>
                })}
            </div>
        </div>
    )
}

export default Category