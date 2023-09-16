import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/ProductSlice';
import DetailComp from '../components/detail/DetailComp';
import Loading from '../components/Loading';


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { productDetail, productDetailStatus } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id])

    return (
        <div>
            {
                productDetailStatus == "LOADING" ? <Loading /> : <DetailComp {...productDetail} />
            }

        </div>
    )
}

export default Detail