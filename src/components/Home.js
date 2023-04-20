import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Topslider from './Topslider';
import Mainpagebrands from './Mainpagebrands';
import Mainpagedealoftheday from './Mainpagedealoftheday';
import Sellingcard from './Sellingcard';
import Mainpagefeatureproducts from './Mainpagefeatureproducts';
import Mainpagecategories from './Mainpagecategories';
import Bestsellingandtoprated from './Bestsellingandtoprated';
import Delivery from './Delivery';

export default function Home() {
  return (
   < >
   <div className='max-w-6xl mx-auto '>
     <Topslider/>
       <Mainpagebrands/>  
       <Mainpagedealoftheday/>  
       <Mainpagefeatureproducts/>  
       <Bestsellingandtoprated/>   
       <Mainpagecategories/> 
       <Delivery/> 

     
    
   </div>
   </>
  )
}
