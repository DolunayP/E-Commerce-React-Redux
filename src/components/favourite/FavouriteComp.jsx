import React, { useEffect, useState } from 'react'
import { removeFromFavourite } from '../../redux/favouriteSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCartTotal } from '../../redux/cartSlice';
import { Alert, Fade, Snackbar } from '@mui/material';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavouriteComp = ({ favourite }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const notify = () => toast.info('Başarıyla Favorilerden Kaldırıldı', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const removeItem = () => {
        notify();
        dispatch(removeFromFavourite(favourite?.id));
    }

    const addBasket = () => {
        setIsAdd(true)
        dispatch(addToCart({ id: favourite.id, title: favourite.title, price: favourite.price, stock: favourite.stock, image: favourite.image, quantity: 1 }))
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 2000);
        dispatch(getCartTotal());
    }

    return (
        <>
            <div className='my-8 grid grid-cols-1 items-center w-[300px] pr-4 mr-4 border-r-2 border-gray-200'>
                <div>
                    <div className='text-md truncate font-bold'>{favourite?.title}</div>
                    <div>{favourite?.description}</div>
                    <img className='mx-auto w-[150px] h-[150px] object-contain my-5' src={favourite?.image} alt="" />
                </div>
                <div className='flex justify-around items-center'>
                    <div onClick={removeItem}
                        className='bg-gray-200 hover:bg-red-400 hover:scale-95 transition-all px-4 h-16 text-xs font-bold cursor-pointer rounded-lg flex text-center items-center justify-center w-[125px]'>
                        Favorilerden Kaldır </div>
                    <div onClick={addBasket} className='bg-gray-200 hover:bg-green-200 hover:scale-95 transition-all px-4 h-16  text-xs font-bold cursor-pointer rounded-lg flex text-center items-center justify-center w-[125px]'>
                        Sepete Ekle </div>
                </div>
                <div onClick={() => navigate(`/products/${favourite?.id}`)} className='bg-gray-200 hover:bg-blue-200  hover:scale-95 transition-all p-4 text-xs font-bold cursor-pointer rounded-lg flex mx-auto items-center justify-center w-full my-2'>
                    Ürün Detaylarına Git </div>
            </div>
            <Snackbar open={open} TransitionComponent={Fade}>
                <Alert severity='success'>Ürün başarıyla sepete eklendi.</Alert>
            </Snackbar>

            <ToastContainer transition={Slide} />
        </>
    )
}

export default FavouriteComp