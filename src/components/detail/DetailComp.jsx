import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, getCartTotal } from '../../redux/cartSlice';
import { Alert, Fade, Rating, Snackbar } from '@mui/material';
import Comments from './Comments';
import SimilarProducts from './SimilarProducts';
import { addToFavourite } from '../../redux/favouriteSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Slide, ToastContainer, toast } from 'react-toastify';

const DetailComp = ({ ...productDetail }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const [quantity, setQuantity] = useState(1)
    const { price, title, description, image } = productDetail;
    const notify = () => toast.info('Favorilere Eklendi', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }
    const increment = () => {
        if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
    }

    const addBasket = () => {
        dispatch(addToCart({ id: productDetail.id, title, image, quantity, price, stock: productDetail?.rating?.count }))
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 2000);
    }
    const addFavourite = (e) => {
        e.stopPropagation();
        notify();
        dispatch(addToFavourite({ id: productDetail.id, title, image, price, stock: productDetail.rating.count }))
    }

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, addBasket])
    return (<>
        <div className='border-t-2 pt-6 gap-8 grid grid-cols-2'>
            <div className='w-full m-auto h-[240px] relative'>
                <div onClick={addFavourite} className='absolute top-1 left-6 cursor-pointer hover:scale-150 transition-all'><FavoriteIcon fontSize='large' /></div>
                <img className="w-full h-full object-contain" src={image} alt="" />
            </div>
            <div className='mt-3 font-bold'>
                <div className='font-bold text-lg'>{title}</div>
                <div className='text-md font-light my-3'>{description}</div>
                <div><Rating name="half-rating-read" defaultValue={productDetail?.rating?.rate} precision={0.5} size='small' readOnly />, {productDetail?.rating?.rate}                </div>
                <div className='my-2'>Stok Adeti: {productDetail?.rating?.count}</div>
                <div className='text-2xl'>{price} ₺</div>
            </div>
            <div className='flex items-center gap-5 justify-center'>
                <div onClick={() => decrement()} className='text-5xl cursor-pointer'>-</div>
                <input onChange={() => console.log('asdklasf')} className='w-12 text-center text-4xl font-bold' type="text" value={quantity} />
                <div onClick={() => increment()} className='text-4xl cursor-pointer'>+</div>
            </div>
            <div onClick={addBasket} className='w-[260px] hover:bg-gray-300 hover:scale-95 transition-all text-2xl font-bold rounded-md bg-gray-200 cursour-pointer h-16 flex items-center justify-center cursor-pointer'>Sepete Ekle <AddShoppingCartIcon className='ms-3' /></div>
            <Snackbar open={open} TransitionComponent={Fade}>
                <Alert severity="success" >Ürün başarıyla sepete eklendi.</Alert>
            </Snackbar>

        </div>
        <SimilarProducts />
        <Comments />
        <ToastContainer transition={Slide} />
    </>
    )
}

export default DetailComp