import React from 'react';
import {BsStarFill} from 'react-icons/bs';
import shirt from '../Assets/shirt.jpg'
import shirt1 from '../Assets/shirt1.jpg'
import bag1 from '../Assets/bag1.jpeg'
import shoes1 from '../Assets/shoes1.jpg'
import lepstick from '../Assets/lepstick.jpg'
import Sellingcard from './Sellingcard';
import {Carousel} from 'react-responsive-carousel'

export default function Mainpagedealoftheday() {
  return (
   <>
    <section className='sm:flex gap-3 items-center  bg-white p-3 shadow  hidden '>
        <div className=' bg-blue-700 h-full pt-10 pb-10 px-7 text-white'>
            <h2 className='text-xl ml-1 font-serif'>Deal of the day</h2>
            <div className='p-2 '>
            <img className='w-full' src={shoes1} alt='img'/>
            <h3>Artifical Leather shoes</h3>
            <p className='flex mt-3 gap-1 '>
                <p className='text-yellow-500'>
                    <BsStarFill/>
                </p>
                <p className='text-yellow-500'>
                    <BsStarFill/>
                </p>
                <p className='text-yellow-500'>
                    <BsStarFill/>
                </p>
                <p className='text-yellow-500'>
                    <BsStarFill/>
                </p>
                <p className='text-yellow-500'>
                    <BsStarFill/>
                </p>
                </p>
                <p>100PKR</p>
                <button className='px-3 py-1 mt-5 text-white  bg-white text-black'>Buy Now</button>
            </div>
        </div>
        <div className='grid grid-flow-cols gap-5 mt-10 grid-cols-2 sm:grid-cols-4'>
            <Sellingcard heading={'Exclusive & Fashionable'} img={shoes1} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={shirt} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={shirt1} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={lepstick} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={lepstick} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={bag1} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={lepstick} price={'10000PKR'} off={'10%'}/>
            <Sellingcard heading={'Exclusive & Fashionable'} img={shirt} price={'10000PKR'} off={'10%'}/>

       </div>
     </section>
     <section className='sm:hidden mt:6 sm:mt-10'>
        <div className='flex justify-between mb-5 px-3'>
            <h2 className='text-xl border-b-2 border-blue-800 font-serif'>Deal Of The Day</h2>
            <button className='text-blue-700'>view all</button>
        </div>
        <Carousel className='bg-blue-700'>

            <div className='grid grid-flow-cols gap-4 m-5 grid-cols-2 '>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
            </div>
            <div className='grid grid-flow-cols gap-4 m-5 grid-cols-2 '>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
           </div>
            </Carousel>

        </section>

    
   </>
  )
}
