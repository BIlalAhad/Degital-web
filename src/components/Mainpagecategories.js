import React from 'react'
import Sellingcard from './Sellingcard'
import shirt from '../Assets/shirt.jpg'
import shirt1 from '../Assets/shirt1.jpg'
import bag1 from '../Assets/bag1.jpeg'
import shoes1 from '../Assets/shoes1.jpg'
import lepstick from '../Assets/lepstick.jpg'
import { Carousel } from 'react-responsive-carousel';
import Mainpagecategorycard from './Mainpagecategorycard'

export default function Mainpagecategories() {
  return (
    <>
    {/* for desktop screen  */}
       <section className='hidden sm:block'>
       <section className='mt-20 '>
            <div className='flex justify-between'>
            <h2 className='text-2xl border-b-2 border-blue-800 font-serif'>Bags and shoes</h2>
            <button className='text-blue-700'>view all</button>
            </div>
            <Carousel>
            <section className='grid grid-flow-cols sm:gap-8 mt-10 sm:p-5 grid-cols-3 gap-3 sm:grid-cols-5'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
            </section>
            <section className='grid grid-flow-cols sm:gap-8 mt-10 p-5 grid-cols-3 gap-3 sm:grid-cols-5'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
            </section>
            </Carousel>
        </section>
        <section className='mt-12'>
            <div className='flex justify-between'>
            <h2 className='text-2xl border-b-2 border-blue-800 font-serif'>Shirts & Bags</h2>
            <button className='text-blue-700'>view all</button>
            </div>
            <section className='grid grid-flow-cols gap-8 mt-10 grid-cols-2 sm:grid-cols-5'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
            </section>
        </section>
        <section className='mt-12'>
            <div className='flex justify-between'>
            <h2 className='text-2xl border-b-2 border-blue-800 font-serif'>Cloths & perfumes</h2>
            <button className='text-blue-700'>view all</button>
            </div>
            <Carousel autoPlay infiniteLoop showStatus={false} >
                <div className='grid grid-flow-cols gap-8 mt-10 grid-cols-2 sm:grid-cols-5'>
                <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
                <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
                <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
                <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
                <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
                </div>
                   
     </Carousel>
    
            <section className=''>
           
            </section>
        </section>
        <section className='mt-12'>
            <div className='flex justify-between'>
            <h2 className='text-2xl border-b-2 border-blue-800 font-serif'>Lepsticks & Socks</h2>
            <button className='text-blue-700'>view all</button>
            </div>
            <section className='grid grid-flow-cols gap-8 mt-10 grid-cols-2 sm:grid-cols-5'>
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
            <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
            </section>
        </section>
       </section>
        {/* for mobile screen */}
       <section className='sm:hidden'>
            <div className='flex justify-between mb-5 px-3'>
                <h2 className='text-xl border-b-2 border-blue-800 font-serif'>Categories</h2>
                <button className='text-blue-700'>view all</button>
            </div>
            <section className='p-2 grid grid-flow-cols grid-cols-3 gap-2'>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Bags&shose'} img={bag1} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Shirts'} img={shirt} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Cloths'} img={shirt1} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Bags&shose'} img={bag1} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Shirts'} img={shirt} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Cloths'} img={shirt1} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Bags&shose'} img={bag1} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Shirts'} img={shirt} />
            </div>
            <div className='hover:brightness-75 shadow'>
                <Mainpagecategorycard text={'Cloths'} img={shirt1} />
            </div>
            </section>
       </section>
    </>
  )
}
