import React, { useEffect } from 'react'
import { BsFillSuitHeartFill, BsSearch } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { itemCount } = useSelector(state => state.carts)
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, itemCount])

    return (
        <div className='flex items-center justify-center gap-8'>
            <div className='relative w-[320px] p-2 bg-gray-200 rounded-lg me-4'>
                <input className=' w-full outline-none bg-transparent' type="text" placeholder='Aramak istediğiniz ürünü yazınız...' />
                <BsSearch className='absolute top-1/4 right-2 cursor-pointer' />
            </div>
            <div className='flex items-center justify-center '>
                <BsFillSuitHeartFill size={25} />
            </div>
            <div onClick={() => navigate("cart")} className='relative cursor-pointer'>
                <SlBasket size={25} />
                <div className='absolute -top-3 -right-3 bg-black rounded-full flex justify-center items-center text-white w-5 h-5'>{itemCount}</div>
            </div>
        </div>
    )
}

export default NavbarRight