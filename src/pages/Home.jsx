import React, { useState } from 'react'
import HomeComp from '../components/home/HomeComp'
import Products from '../components/home/Products'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'

const Home = () => {
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div >
            <HomeComp />
            <Sorting setSort={setSort} search={search} setSearch={setSearch} />
            <div className='flex'>
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} search={search} />
            </div>
        </div>
    )
}

export default Home