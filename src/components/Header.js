import React from 'react'
import '../App.css';
import top from '../Assets/logo.png'
import shoes from '../Assets/shoes.jpg'
import bag from '../Assets/handbags.jpg'
import cloths from '../Assets/cloths.jpg'
import perfumes from '../Assets/perfumes.jpg'
import {BsCartPlusFill,BsFillPersonFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {MdOutlineCall} from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";
import Cartpage from './Cartpage';


const user=true;

export default function Header() {
    function hamburger(){
       var show=document.getElementById("navitems");
       show.classList.toggle("hidden");
    }
    function display(){
     const display= document.getElementById('popup');
     display.classList.toggle('hidden');
    }
    return (
        <div>
             <section>
         <section className="px-8 py-1 text-blue-700 bg-gray-100 flex gap-2 items-center shadow-md">
           <h2 className="text-xl"><MdOutlineCall/></h2>
           <h2>+92-3448354004</h2>
         </section>
        <nav className="flex items-center justify-between  px-8">
          <img src={top} alt='img' width="80" />
          <div className="sm:flex sm:w-[60%] items-center hidden ">
            <input type="search" className="border-2 w-full h-11 border-blue-400 rounded-l-lg shadow text-center" placeholder="Search here" />
            <h1 className="text-white text-3xl bg-blue-700 p-2 border-y-3 rounded-r-lg border-white"><BiSearchAlt/></h1>
          </div>
          <div className="flex gap-3  items-center">
            <h1 className="text-2xl text-blue-700 p-2 rounded-full bg-gray-200"><Link to='/account' ><BsFillPersonFill/></Link></h1>
            <h1 className="text-2xl text-blue-700 p-2 rounded-full bg-gray-200"><Link to='/Cartpage' ><BsCartPlusFill/></Link></h1>
            <button onClick={hamburger}><ul className="space-y-1 shadow-lg hover:brightness-50 p-2 rounded-md sm:hidden">
                <li className="w-7 h-1 rounded-full bg-blue-700"></li>
                <li className="w-7 h-1 rounded-full bg-blue-700"></li>
                <li className="w-7 h-1 rounded-full bg-blue-700"></li>
            </ul></button>
          </div>
        </nav>
       </section>
       <section className="bg-blue-700 max-w-6xl mx-auto ">

        <nav id="navitems" className="sm:text-center hidden items-center sm:flex justify-between relative">
          <button className='bg-white mt-5 sm:mt-0 font-bold text-center p-3 rounded-md mx-4 w-[150px] border-2 border-blue-700 hover:bg-blue-200' onClick={display}>
            Categories     </button>
          <section id='popup' className=' max-w-full text-center top-20 mx-auto hidden bg-white  absolute z-10 p-8 left-0 right-0 shadow-2xl'>
           <section className='grid sm:grid-flow-col sm:grid-cols-5 gap-8'>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={shoes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Shose</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={bag} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Hamdbags</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={cloths} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Cloths</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={perfumes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Perfumes</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={shoes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Shose</h2>
           </div>
           </section><section className='grid sm:grid-flow-col mt-5 sm:grid-cols-5 gap-8'>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={shoes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Shose</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={bag} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Hamdbags</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={cloths} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Cloths</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={perfumes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Perfumes</h2>
           </div>
           <div>
           <img className='sm:w-[190px] w-full rounded-md border-r-4 border-blue-700' src={shoes} alt=''/>
            <h2 className='pt-1 font-serif font-bold'>Shose</h2>
           </div>
           </section>
          </section>
          <ul className="text-sm  text-white sm:flex gap-9  p-4 font-serif space-y-2 sm:space-y-0">
            <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/">Home</Link></li>
            <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/allbrands">All Brands</Link></li>
            <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/discountproducts">Discount products</Link></li>
            <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/allsellers">All Sellers</Link></li>
             
                <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/login" id='account'>Login</Link></li>
                <li className=" hover:cursor-pointer hover:underline border-2 p-1 sm:p-0 border-white sm:border-0"><Link to="/signup" id='account'>Sign Up</Link></li>
            
            
          </ul>
        </nav>

       </section>
       
    
        </div>
    )
}
