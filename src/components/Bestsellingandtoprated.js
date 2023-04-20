import React from 'react'
import Sellingcard from './Sellingcard'
import shirt from '../Assets/shirt.jpg'
import shirt1 from '../Assets/shirt1.jpg'
import bag1 from '../Assets/bag1.jpeg'
import shoes1 from '../Assets/shoes1.jpg'
import lepstick from '../Assets/lepstick.jpg'
import {Carousel} from 'react-responsive-carousel'

export default function Bestsellingandtoprated() {
  return (
    <>
    
    <section className='sm:grid grid-flow-cols mt-10 grid-cols-2 gap-10 hidden '>
        <div className='grid grid-flow-cols gap-5 pt-16  sm:grid-cols-3 bg-[#F3F4F6] relative shadow-2xl shadow-blue-700 p-8'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={shoes1} />
            <h2 className='absolute py-2 px-3 bg-blue-400 text-white top-0 left-0'>Best Selling</h2>
            <button className='absolute right-2 text-blue-700 top-2'>View all</button>
        </div>
        <div className='grid grid-flow-cols gap-5 pt-16  sm:grid-cols-3 shadow bg-[#F3F4F6] shadow-2xl shadow-blue-700 p-8 relative'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={'1000pkr'} img={shoes1} />
            <h2 className='absolute py-2 px-3 bg-blue-400 text-white top-0 left-0'>Best Selling</h2>
            <button className='absolute right-2 text-blue-700 top-2'>View all</button>

        </div>

    </section>
    <section className='sm:hidden mt-10'>
        <div className='flex justify-between mb-5 px-3'>
            <h2 className='text-xl border-b-2 border-blue-800 font-serif'>Best selling and top rated products</h2>
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
