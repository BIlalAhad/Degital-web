import React from 'react'
import { MdAccessTimeFilled} from 'react-icons/md';
import {AiFillDollarCircle} from 'react-icons/ai';
import {GiReturnArrow} from 'react-icons/gi';
import {BsFillCheckCircleFill} from 'react-icons/bs';

export default function Delivery() {
  return (
    <>
    <section className='p-10 mt-16 bg-blue-200 grid grid-flow-cols grid-cols-4  mx-auto text-center'>
        <div className=' text-blue-700  '>
            <div className='text-5xl sm:text-7xl '>
            <MdAccessTimeFilled/>
            </div>
            <h2 className='mt-5 text-left-0 text-sm sm:text-lg'>Fast Delivery All Over The Country</h2>
        </div>
        <div className=' text-blue-700'>
            <div className='sm:text-7xl  text-5xl'>< AiFillDollarCircle/></div>
            <h2 className='mt-5 text-sm sm:text-lg'>Safe Payment</h2>
            </div>
        <div className=' text-blue-700'>
            <div className='sm:text-7xl text-5xl'>
            <GiReturnArrow/>
            </div>
            <h2 className='mt-5 text-sm sm:text-lg'>7 Days Return Policy</h2>
        </div>
        <div className=' text-blue-700 '>
            <div className='sm:text-7xl text-5xl '>
            <BsFillCheckCircleFill/>
            </div>
            <h2 className='mt-5 text-sm sm:text-lg'>100% Authentication Products</h2>
            </div>
    </section>
    </>
  )
}
