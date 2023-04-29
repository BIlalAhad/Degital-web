import React ,{useState} from 'react'
import {BsCartPlusFill,BsFillPersonFill} from 'react-icons/bs'
import Subtotal from './Subtotal';


export default function Cartpage() {
  function increment(){
    setData(Data+1);
  }
  function decrement(){
    if(Data>0){
      setData(Data-1);
    }
  }
  const [Data,setData]=useState(0);
  return (
    <>
    <section className='relative my-5 bg-gray-100 max-w-7xl mx-auto py-12'>

        <section className='px-7 sm:w-[65%] sm:bg-white shadow shadow-2xl shadow-blue-200 py-1 sm:mx-8'>
        <section className=' items-center flex justify-between items-center  mt-7  border-b-2  border-blue-700  '>
            <h3 className='text-lg text-blue-700'>Continue Shopping</h3>
            <button className=''>Checkout</button>
        </section>
        <section className='py-7 '>
          <p className='pb-4'>Shop name: Mart Morning</p>
          <table className=' text-center w-full text-sm '>
            <thead className=' text-blue-700'>
              <tr className='h-[50px] border-b-2  bg-gray-100 text-sm font-bold font-serif '>
                <td className=''>
                  Sl#
                </td>
                <td className=''>
                  Products Details
                </td>
                <td className=''>
                  Unit Price
                </td>
                <td className=''>
                  Qty
                </td>
                <td className=''>
                  Price
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className='h-[50px] border-b-2'>
                <td>
                  1
                </td>
                <td>
                 
                  Running Shoes 225
                </td>
                <td>
                  2000pkr
                </td>
                <td className='flex  gap-1  pt-3  '>
                  <button className='bg-gray-200  w-7 hover:bg-blue-700 hover:text-white' onClick={increment}>+</button>
                  <p>{Data}</p>
                  <button  className='bg-gray-200  w-7 hover:bg-blue-700 hover:text-white' onClick={decrement}>-</button>
                </td>
                <td>
                  4000pkr
                </td>

              </tr>

            </tbody>
          </table>
            <div className='flex justify-between p-3 mt-3 gap-3   sm:w-full items-center'>
                <select className='p-5 border border-2 border-gray-300 bg-gray-100 w-[180px] sm:w-full sm:rounded-2xl h-16'>
                  <option>Chose payment Method</option>
                  <option>Easypaisa</option>
                  <option>Bank Transfer</option>
                  <option>Binance</option>
                </select>
                <p>Shipping Cost : 0pkr</p>
                </div>
        </section>
        <section className='w-full'>
          <textarea className='w-full border-2 p-2' placeholder='write message '></textarea>
        </section>
        </section>
        <section className='sm:w-[27%] shadow bg-white sm:absolute top-12 right-7 p-6'>
        <Subtotal/>
        </section>
    </section>

    </>
  )
}
