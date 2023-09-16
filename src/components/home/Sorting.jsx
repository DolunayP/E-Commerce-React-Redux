import React from 'react'

const Sorting = ({ setSort }) => {

  return (
    <div className='bg-gray-100 my-5 p-5 flex justify-end items-center' >
      <select onChange={e => setSort(e.target.value)} className='bg-white p-3 outline-none rounded-xl' name="" id="">
        <option disabled value="">Seçiniz!</option>
        <option value="inc">Fiyata Göre Artan</option>
        <option value="dec">Fiyata Göre Azalan</option>
      </select>
    </div>

  )
}

export default Sorting