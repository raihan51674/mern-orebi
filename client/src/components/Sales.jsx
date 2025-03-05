import React from 'react'
import { saleImgOne, saleImgThree, saleImgTwo } from '../assets/images'
import { Link } from 'react-router-dom'

const Sales = () => {
    return (
        <div className='w-full h-auto md:h-[500px] flex flex-col md:flex-row justify-between gap-10 items-center'>
            <div className='w-full md:w-1/2 h-[150px] md:h-full border rounded-md border-gray-300 overflow-hidden relative group'>
                <img src={saleImgOne} alt="salesImage" className='w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out' />
                <div className='absolute w-full h-full top-0 left-0 bg-black/40 text-white/80 flex items-center md:justify-center'>
                    <div className='flex flex-col md:items-center gap-2 p-10'>
                        <p className='text-sm md:text-lg font-medium text-white'>10% sales ongoing on phone</p>
                        <p className='text-sm md:text-xl font-semibold'>Offers on limited time</p>
                        <Link to='/shop' className='bg-white/70 text-black px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium'>Shop Now</Link>

                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-full flex flex-col justify-between gap-10 md:gap-0'>
                <div className='w-full h-[250px] md:h-[45%] border rounded-md border-gray-300 overflow-hidden relative group'><img src={saleImgTwo} alt="salesImage" className='w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out' />
                    <div className='absolute w-full h-full top-0 left-0 bg-black/40 text-white/80 flex items-center '>
                        <div className='flex flex-col items-start gap-2 p-10'>
                            <p className='text-sm md:text-lg font-medium text-white'>10% sales ongoing on phone</p>
                            <p className='text-sm md:text-xl font-semibold'>Offers on limited time</p>
                            <Link to='/shop' className='bg-white/70 text-black px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium'>Shop Now</Link>

                        </div>
                    </div></div>
                <div className='w-full h-[250px] md:h-[45%] border rounded-md border-gray-300 overflow-hidden relative group'><img src={saleImgThree} alt="SalesImage" className='w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out' />
                    <div className='absolute w-full h-full top-0 left-0 bg-black/40 text-white/80 flex items-center '>
                        <div className='flex flex-col items-start gap-2 p-10'>
                            <p className='text-sm md:text-lg font-medium text-white'>10% sales ongoing on phone</p>
                            <p className='text-sm md:text-xl font-semibold'>Offers on limited time</p>
                            <Link to='/shop' className='bg-white/70 text-black px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium'>Shop Now</Link>

                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default Sales
