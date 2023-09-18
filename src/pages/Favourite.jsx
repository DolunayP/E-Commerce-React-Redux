import React, { useEffect } from 'react'
import FavouriteComp from '../components/favourite/FavouriteComp'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getFavouritesTotal } from '../redux/favouriteSlice'
import SimilarProducts from '../components/detail/SimilarProducts'

const Favourite = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { favourites} = useSelector(state => state.favourites)

    useEffect(() => {
        dispatch(getFavouritesTotal())
    }, [dispatch, favourites])


    return (
        <div>
            <h2 className='mt-8 mb-4 text-3xl font-bold text-center'>Favori Ürünleriniz</h2>
            {
                favourites?.length > 0 ? <div className='flex flex-wrap'>
                    {
                        favourites?.map((favourite, i) => { return <FavouriteComp key={i} favourite={favourite} /> })
                    }
                    <div className='flex items-center justify-end text-xl'></div>
                </div> : <div className='mt-[48px] gap-6 flex flex-col items-center justify-center text-lg'>
                    <div>Favorileriniz Boş, aşağıdaki buton ile ürünler sayfasından ürünlere ulaşarak favorilerinize ekleyebilirsiniz...</div>
                    <button className='border p-4 text-xl font-bold rounded-lg hover:scale-95 hover:bg-gray-300 bg-gray-200 transition-all' onClick={() => navigate(`/`)}>
                        Ürünler Sayfasına Git </button>
                </div>
            }
            <SimilarProducts />
        </div>
    )
}

export default Favourite