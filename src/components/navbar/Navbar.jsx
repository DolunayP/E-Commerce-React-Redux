import React from 'react'
import NavbarRight from './navbarItems/NavbarRight'
import NavbarLeft from './navbarItems/NavbarLeft'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar