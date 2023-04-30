import React from 'react'

export default function Signup() {
  return (
    <>
    <form className='max-w-lg font-serif mx-auto shadow p-5 bg-gray-50 mt-10'>
        <h2 className='text-2xl font-bold mt-3'>Sign Up</h2>
        <p className='text-blue-700'>Register Control Your Order</p>
        <section className='grid gap-2 mt-4'>
            <div className='grid grid-flow-cols grid-cols-2 gap-2'>
                <div>
                    <label>First Name</label>
                    <input className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
            </div>
            <div className='grid grid-flow-cols grid-cols-2 gap-2'>
                <div>
                    <label>Email Address</label>
                    <input type='email' className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
                <div>
                    <label>Phone</label>
                    <input className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
            </div>
            <div className='grid grid-flow-cols grid-cols-2 gap-2'>
                <div>
                    <label>Passward</label>
                    <input type='email' className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
                <div>
                    <label>Confirm Passward</label>
                    <input className='w-full rounded-sm border-2 h-[37px]'></input>
                </div>
            </div>
            <div className='grid grid-flow-cols grid-cols-2 gap-5 mt-5'>
        <div className='border-2 p-1 border-blue-800 hover:bg-blue-700'>Sign In with Google</div>
        <div className='border-2 p-1 border-blue-800 hover:bg-blue-700'>Sign In with Facebook</div>
        </div>
        <button className='p-2 center bg-blue-700 text-white w-full hover:brightness-75'>Sign Up</button>

        </section>
    </form>
    </>
  )
}
