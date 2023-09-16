import React from 'react'
import { useNavigate } from 'react-router-dom'

const SimilarProduct = ({ product }) => {
    const { price, title, image } = product;

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/products/${product?.id}`)} className='relative w-[180px] h-[180px] border rounded-xl text-center cursor-pointer'>
            <div className='w-[120px] h-[120px] mx-auto p-2'><img className="w-full h-full object-contain" src={image} alt="" /></div>
            <div className='mt-2 px-3'>
                <div className='truncate text-xs'>{title}</div>
                <div className='absolute bottom-3 w-full left-0 flex justify-around items-center'>
                    <div className='text-sm font-bold'>{price}₺</div>
                </div>
            </div>
        </div>
    )
}

export default SimilarProduct