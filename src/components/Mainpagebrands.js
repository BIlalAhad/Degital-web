import React from 'react'
import brand1 from '../Assets/brands/brand1.jpg';
import brand2 from '../Assets/brands/brand2.jpg';
import brand3 from '../Assets/brands/brand3.jpg';
import brand4 from '../Assets/brands/brand4.jpg';
import brand5 from '../Assets/brands/brand5.jpg';
import brand6 from '../Assets/brands/brand6.jpg';
import brand7 from '../Assets/brands/brand7.jpg';
import brand8 from '../Assets/brands/brand8.jpg';
import brand9 from '../Assets/brands/brand9.jpg';
import brand10 from '../Assets/brands/brand10.jpg';
import brand11 from '../Assets/brands/brand11.jpg';
import { Carousel } from 'react-responsive-carousel';import Brandcard from './Brandcard';
;

export default function Mainpagebrands() {
  return (
    <>
         <div className='flex justify-between mb-5 px-3 mt-10'>
            <h2 className='text-xl border-b-2 border-blue-800 font-serif'>Brands</h2>
            <button className='text-blue-700'>view all</button>
        </div>
     <Carousel autoPlay infiniteLoop showStatus={false} >
                <div className='grid grid-flow-cols grid-cols-5 sm:grid-cols-10 gap-8 bg-blue-700 py-20 p-5'>
                    <Brandcard img={brand1} />
                    <Brandcard img={brand2} />
                    <Brandcard img={brand3} />
                    <Brandcard img={brand4} />
                    <Brandcard img={brand5} />
                    <Brandcard img={brand6} />
                    <Brandcard img={brand7} />
                    <Brandcard img={brand8} />
                    <Brandcard img={brand9} />
                    <Brandcard img={brand10} />
                </div>
                <div className='grid grid-flow-cols grid-cols-5 sm:grid-cols-10 gap-8 bg-blue-700 py-20 p-5'>
                    <Brandcard img={brand1} />
                    <Brandcard img={brand2} />
                    <Brandcard img={brand3} />
                    <Brandcard img={brand4} />
                    <Brandcard img={brand5} />
                    <Brandcard img={brand6} />
                    <Brandcard img={brand7} />
                    <Brandcard img={brand8} />
                    <Brandcard img={brand9} />
                    <Brandcard img={brand10} />
                </div>
                
     </Carousel>
      
    </>
  )
}
