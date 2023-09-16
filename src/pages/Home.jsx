import React, { useState } from 'react'
import HomeComp from '../components/home/HomeComp'
import Products from '../components/home/Products'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'

const Home = () => {
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div >
            <HomeComp />
            <Sorting setSort={setSort} />
            <div className='flex'>
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home