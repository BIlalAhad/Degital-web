import React from 'react'

export default function Login() {
  return (
    <>
    <section className='max-w-lg font-serif mx-auto shadow p-5 bg-gray-50 mt-10'>
        <div className='space-y-4'>
            <h2 className='text-2xl font-bold my-3'>Sign In</h2>
            <div>
            <label className='text-lg'>Phone</label>
            <input className='w-full rounded-sm border-2 h-[37px]'></input>
            </div>
            <div>
            <label className='text-lg '>Passward</label>
            <input className='w-full rounded-sm border-2 h-[37px]'></input>
            </div>
            <button className='w-full bg-blue-700 text-white p-2 hover:brightness-75 border-2 center '>Sign In </button>
        </div>
        <div className='flex justify-between mt-5'>
            <p>No account Signup now</p>
            <button className='p-1 border-2 border-blue-700 hover:bg-blue-700 px-2'>Sign Up</button>
        </div>
        <div className='grid grid-flow-cols grid-cols-2 gap-5 mt-5'>
        <div className='border-2 p-1 border-blue-800 hover:bg-blue-700'>Sign In with Google</div>
        <div className='border-2 p-1 border-blue-800 hover:bg-blue-700'>Sign In with Facebook</div>
        </div>
    </section>
    </>

  )
}
