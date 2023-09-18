import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Sorting = ({ setSort, setSearch, search }) => {

  return (
    <div className='bg-gray-100 my-5 p-5 flex justify-between items-center' >
      <div className='relative w-[320px] p-2 bg-white rounded-lg me-4'>
        <input className='w-full outline-none bg-transparent' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Aramak istediğiniz ürünü yazınız...' />
        <BsSearch className='absolute top-1/4 right-2 cursor-pointer' />
      </div>
      <select onChange={e => setSort(e.target.value)} className='bg-white p-3 outline-none rounded-xl' name="" id="">
        <option disabled value="">Seçiniz!</option>
        <option value="pop">En Popüler</option>
        <option value="inc">Fiyata Göre Artan</option>
        <option value="dec">Fiyata Göre Azalan</option>
      </select>
    </div>

  )
}

export default Sorting