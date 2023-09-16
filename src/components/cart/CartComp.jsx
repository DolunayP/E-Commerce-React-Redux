import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice'

const CartComp = ({ cart }) => {
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeFromCart(cart?.id));
    }
    const decrement = () => {
        dispatch(decrementQuantity(cart.id));
    };
    const increment = () => {
        if (cart.quantity < cart.stock) {
            dispatch(incrementQuantity(cart.id))
        };
    }

    return (
        <div>
            <div className='my-8 grid grid-cols-5 items-center justify-between border-b-[3px] '>
                <img className='w-[150px] h-[150px] object-contain my-5' src={cart?.image} alt="" />
                <div>
                    <div className='text-xl font-bold'>{cart?.title}</div>
                    <div>{cart?.description}</div>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <div onClick={() => decrement()} className='text-4xl cursor-pointer'>-</div>
                    <input className='w-12 text-center text-3xl font-bold' type="text" value={cart.quantity} onChange={() => console.log(cart.quantity)} />
                    <div onClick={() => increment()} className='text-3xl cursor-pointer'>+</div>
                </div>
                <div className='text-center'>{cart?.price}₺ ({cart?.quantity})</div>
                <div onClick={removeItem} className='bg-red-400 hover:bg-red-500 hover:scale-95 transition-all w-[140px] h-12 text-xl font-bold cursor-pointer rounded-lg flex items-center justify-center'>Ürünü Sil</div>
            </div>
        </div>
    )
}

export default CartComp