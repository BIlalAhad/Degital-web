import React from 'react';
import {BsStarFill} from 'react-icons/bs';

export default function Sellingcard(props) {
  return (
    <>
        <div className='p-4 shadow shadow-blue-400 relative bg-white'>
            <img src={props.img} alt='img' />
            <h3 className=' w-full mt-3'>{props.heading}</h3>
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
                </p>            <p className='bg-blue-700 py-1 px-2 text-white absolute top-0 left-0'>{props.off}</p>
            <p className='mt-5'>{props.price}</p>
        </div>
    </>
  )
}
