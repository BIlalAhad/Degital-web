import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import carosel1 from '../Assets/Caroselimg1.jpg';
import carosel2 from '../Assets/Caroselimg2.jpg';

export default function Topslider() {
  return (
    
    <>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}  className=''>
                <div>
                    <img src={carosel1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carosel2} />
                    <p className="legend">Legend 2</p>
                </div>
               
     </Carousel>
    </>
  )
}
