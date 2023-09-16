import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from '../../assets/nikep.jpg'
import img2 from '../../assets/niket.jpg'

const HomeComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (

        <Slider {...settings}>
            <div className='!flex items-center bg-gray-100'>
                <div className='w-10/12'>
                    <img src={img1} alt="" />
                </div>
                <div className='text-center p-4'>
                    <h2 className='text-6xl font-bold mb-5'>Orijinal ve en uygun fiyatlı ayakkabılar burada!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur alias et soluta molestias quo, fugiat quos quibusdam doloremque vel facere autem facilis ipsum ratione amet placeat reiciendis?
                    </p>
                    <div className='text-5xl p-4 hover:scale-95 hover:bg-gray-400 transition-all text-center cursor-pointer bg-gray-300 text-white rounded-full w-2/4 mx-auto my-4'>
                        Incele!
                    </div>
                </div>

            </div>
            <div className='!flex items-center bg-gray-100'>
                <div className='w-10/12'>
                    <img src={img2} alt="" />
                </div>
                <div className='text-center p-4'>
                    <h2 className='text-6xl font-bold mb-5'>Orijinal ve en uygun fiyatlı ayakkabılar burada!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur alias et soluta molestias quo, fugiat quos quibusdam doloremque vel facere autem facilis ipsum ratione amet placeat reiciendis?
                    </p>
                    <div className='text-5xl p-4 text-center hover:scale-95 hover:bg-gray-400 transition-all cursor-pointer bg-gray-300 text-white rounded-lg w-2/4 mx-auto my-4'>
                        Incele!
                    </div>
                </div>
            </div>
        </Slider>

    )
}

export default HomeComp