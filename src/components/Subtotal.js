import React from 'react'

export default function Subtotal() {
  return (
    <>
        <div className='space-y-4 '>
            <div className='flex justify-between '>
                <p>Sub Total</p>
                <p>1000Pkr</p>
            </div>
            <div className='flex justify-between '>
                <p>Text</p>
                <p>1000Pkr</p>
            </div>
            <div className='flex justify-between '>
                <p>Shipping</p>
                <p>1000Pkr</p>
            </div>
            <div className='flex justify-between '>
                <p>Discount</p>
                <p>1000Pkr</p>
            </div>
            <input className='border-2 border-gray-200 w-full p-2' placeholder='Coupon Coad' />
            <button className='bg-blue-700 text-white hover:brightness-75 rounded-lg text-center w-full p-2'>Apply Now</button>
            <br/>
            <div className='flex justify-between'>
            <p>Total:</p>
            <p>7600PKR</p>
            </div>
        </div>
    </>
  )
}
