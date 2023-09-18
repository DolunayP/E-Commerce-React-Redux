import React, { useEffect, useState } from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { itemCount } = useSelector((state) => state.carts);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch, itemCount]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex items-center justify-center gap-8 relative'>
            <div className='group text-lg font-bold cursor-pointer inline-block text-gray-700 hover:text-black ' onClick={toggleMenu}>
                Hesabım
                {isMenuOpen && (
                    <div className='overflow-hidden font-bold z-10 absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                        <div className='px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer' onClick={() => console.log('Kayıt ol')}>
                            Kayıt Ol
                        </div>
                        <div className='px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer' onClick={() => console.log('Giriş yap')}>
                            Giriş Yap
                        </div>
                        <div className='px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer' onClick={() => console.log('Şifremi Unuttum')}>
                            Şifremi Unuttum
                        </div>
                    </div>
                )}
            </div>
            <div onClick={() => navigate('favourite')} className='flex items-center justify-center cursor-pointer'>
                <BsFillSuitHeartFill size={25} />
            </div>
            <div onClick={() => navigate('cart')} className='relative cursor-pointer'>
                <SlBasket size={25} />
                <div className='absolute -top-3 -right-3 bg-black rounded-full flex justify-center items-center text-white w-5 h-5'>{itemCount}</div>
            </div>
        </div>
    );
};

export default NavbarRight;
