import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { motion } from "framer-motion"


const Product = ({ product }) => {
    const { price, title, rating, image } = product;
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)


    return (
        <div onClick={() => navigate(`products/${product?.id}`)} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className='group relative overflow-hidden hover:scale-105 transition-all w-[300px] h-[340px] border rounded-xl text-center cursor-pointer shadow-lg'>
            <div className='w-[210px] h-[210px] mx-auto p-2'><img className="w-full h-full object-contain" src={image} alt="" /></div>
            <div className='mt-6 font-bold px-6'>
                <div className='text-sm truncate group-hover:whitespace-normal'>{title}</div>
                <div className='absolute bottom-3 w-full left-0 flex justify-around items-center '>
                    <Rating name="half-rating-read" value={rating.rate} precision={0.5} size='small' readOnly />
                    <div className='text-lg'>{price}₺</div>
                </div>
            </div>
            <motion.div
                className='bg-gray-100 absolute top-[50%] w-full z-10'
                initial={{ x: '-100%' }}
                animate={{ x: visible ? 0 : '-100%' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}>
                Ürün Detaylarına Git
            </motion.div>
        </div>
    )
}

export default Product;