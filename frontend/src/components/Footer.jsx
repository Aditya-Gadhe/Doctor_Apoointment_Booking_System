import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ----left section---- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem quidem amet obcaecati quae esse deserunt sint nihil. Quae voluptas corrupti iure in mollitia soluta cumque magni commodi nesciunt! Animi.</p>
            </div>

            {/* ----center section---- */}
            <div >
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* ----right section---- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9527089728</li>
                    <li>adityagadhe08@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        {/* ----copyright section---- */}
        <div className='text-center mt-5 text-gray-600 text-sm font-semibold mb-5'>
            <p>copyright 2025@ aditya - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer