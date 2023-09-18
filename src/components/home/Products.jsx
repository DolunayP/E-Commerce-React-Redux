import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getCategoryProducts } from '../../redux/ProductSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort, search }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector((state) => state.products);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category));
            setItemOffset(0);
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, category]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {
                productsStatus === "LOADING" ? <Loading /> : <div>
                    <div className='flex flex-wrap w-full justify-center gap-5 p-2'>
                        {filteredProducts
                            .sort((a, b) => {
                                return sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null;
                            }).slice(itemOffset, endOffset).map((product, index) => {
                                return <Product key={index} product={product} />;
                            })
                        }
                    </div>
                    <ReactPaginate
                        className='paginate'
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </div>
            }
        </>
    );
};

export default Products;
