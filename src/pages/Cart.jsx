import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'
import { useNavigate } from 'react-router-dom'
import SimilarProducts from '../components/detail/SimilarProducts'
import PaymentsIcon from '@mui/icons-material/Payments';

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { carts, totalAmount } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, carts])

    return (
        <>
            {
                carts?.length > 0 ? <div>{
                    carts?.map((cart, i) => { return <CartComp key={i} cart={cart} /> })
                } <div className='flex items-center justify-end text-xl'>Toplam Tutar: <span className='font-bold text-3xl ml-1'> {totalAmount.toFixed(2)} ₺</span></div>
                    <button className='flex ms-auto border rounded-xl mt-3 py-3 px-7 text-lg font-bold bg-green-200 hover:bg-green-300 hover:scale-95 transition-all'>Ödemeye Geç <PaymentsIcon className='ms-2 my-auto' /></button>
                </div> : <div className='mt-[48px] gap-6 flex flex-col items-center justify-center text-lg'>
                    <div>Sepetiniz Boş, Lütfen Satın Almak İstediğiniz Ürünleri Sepetinize Ekleyiniz...</div>
                    <button className='border p-4 text-xl font-bold rounded-lg hover:scale-95 hover:bg-gray-300 bg-gray-200 transition-all' onClick={() => navigate(`/`)}>
                        Ürünler Sayfasına Git </button>
                </div>
            }
            <SimilarProducts />
        </>
    )
}

export default Cart