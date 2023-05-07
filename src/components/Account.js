import React from 'react'
import bilal from '../Assets/profile/bilal.JPG'

export default function Account() {
  return (
    <>
    <section className='sm:ml-7 relative '>
        <section className=''>
            <div className='sm:w-[25%] sm:h-[100vh] bg-gray-100 p-5 shadow sm:border-r-8 border-blue-700'>
                <h2 className='text-xl font-bold font-serif  text-blue-700'>My Account</h2>
                <div>
                    <div className='space-y-2 mt-6'>
                        <p>My Details</p>
                        <p>My Address</p>
                        <p>My Newsletters</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
            <div className='sm:absolute top-8 sm:w-[68%]  right-8'>
                <div className=''>
                    <div className='flex gap-8 p-5 shadow'>
                    <img className='w-[100px] rounded-full' src={bilal} alt='img' />
                    <div className='text-sm'>
                        <h3 className='font-bold text-lg font-serif'>Bilal Ahad</h3>
                        <p>WEB DEVELOPER</p>
                        <p>Pakistan mingora swat</p>
                    </div>
                    </div>
                    <div className='p-5 shadow mt-5 space-y-2'>
                    <h3 className='font-bold text-lg font-serif mb-3'>Persional Information</h3>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Shop Name:</h3>
                        <p>j.</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Email:</h3>
                        <p>engr.bilalahad2001@gmail.com</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Address:</h3>
                        <p>City Cenetr</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Phone:</h3>
                        <p>+92-211-89675</p>
                    </div>
                    </div>
                    <div className='p-5 shadow mt-5 space-y-2'>
                    <h3 className='font-bold text-lg font-serif mb-3'>Shop Information</h3>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Shop Name:</h3>
                        <p>j.</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Email:</h3>
                        <p>engr.bilalahad2001@gmail.com</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Address:</h3>
                        <p>City Cenetr</p>
                    </div>
                    <div className='text-sm grid grid-flow-cols grid-cols-2 justify-between border-b-2 gap-8'>
                        <h3 className='font-bold'>Phone:</h3>
                        <p>+92-211-89675</p>
                    </div>
                    </div>
                </div>    
            </div>
        </section>
    </section>
    </>
  )
}
