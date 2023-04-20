import React from 'react'
import jdot from '../Assets/jdotlogo.jpg'
import shirt from '../Assets/shirt.jpg'
import shirt1 from '../Assets/shirt1.jpg'
import bag1 from '../Assets/bag1.jpeg'
import shoes1 from '../Assets/shoes1.jpg'
import lepstick from '../Assets/lepstick.jpg'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {FaRegStar} from 'react-icons/fa'
import {BsStarFill} from 'react-icons/bs'
import Sellingcard from './Sellingcard'
import {Carousel} from 'react-responsive-carousel'
export default function Mainpagefeatureproducts() {
  return (
   <>
    <section className='mt-10 pt-10 bg-gray-100 p-5 hidden sm:block'>
     <h2 className='text-2xl text-center font-serif max-w-sm border-b-2 border-blue-700 mx-auto'>Featured Products</h2>
       <div className='grid grid-flow-cols gap-8 mt-10 grid-cols-2 sm:grid-cols-5'>
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt1} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shirt} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={lepstick} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={bag1} />
       <Sellingcard heading={'Exclusive & Fashionable'} off={'9% off'} price={1000} img={shoes1} />
       </div>
    </section>
    <section>
    <section className='sm:hidden mt-10'>
        <div className='flex justify-between mb-5 px-3'>
            <h2 className='text-xl border-b-2 border-blue-800 font-serif'>Featured Products</h2>
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
    </section>
   </>
  )
}
