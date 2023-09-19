import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import SimilarProduct from './SimilarProduct';


const SimilarProducts = () => {
    const dispatch = useDispatch()
    const { products, productsStatus } = useSelector(state => state.products)
    const itemsPerPage = products.slice(0, 6);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            {
                productsStatus == "LOADING" ? <Loading /> :
                    <div className='mt-[5rem]'>
                        <h2 className='text-center text-3xl font-bold'>En Çok Satanlar</h2>
                        <div className=' items-center flex overflow-hidden w-full justify-center gap-4 p-2'>
                            <div className='text-3xl font-extrabold cursor-pointer'>&lt;</div>
                            {itemsPerPage.map((product, index) => {
                                return <SimilarProduct product={product} key={index} />
                            })
                            }
                            <div className='text-3xl font-extrabold cursor-pointer'>&gt;</div>
                        </div>

                    </div>
            }
        </>
    )
}

export default SimilarProducts