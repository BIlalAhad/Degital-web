import React from 'react'
import logo from '../Assets/logo.png'
import {SlSocialFacebook} from 'react-icons/sl'
import {SlSocialPintarest,SlSocialLinkedin} from 'react-icons/sl'

export default function Footer() {
    return (
        <>
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 -mt-[550px]">
        <section className="  mt-[605px]  sm:text-start sm:flex justify-between  px-5  sm:pt-16">
            <div className="">
                <img src={logo} alt="img" />
            </div>
            <div>
                <ul className="text-white space-y-3">
                    <li className="text-2xl font-bold underline font-serif text-blue-50">
                    SPECIAL
                    </li>
                    <li className="mt-5">
                        Feature Products
                    </li>
                    <li>
                        Latest Products
                    </li>
                    <li>
                        Best Selling Product
                    </li>
                    <li>
                       Top Rated Products
                    </li>
                    <li>
                       Top Rated Products
                    </li>
                </ul>
            </div>
            <div>
            <ul className="text-white space-y-3">
                    <li className="text-2xl  font-bold underline font-serif text-blue-50">
                   SHIPPING INFO
                    </li>
                    <li className="mt-5">
                        Profile Info
                    </li>
                    <li>
                        Wish List 
                    </li>
                    <li>
                       Track Order
                    </li>
                    <li>
                       Return Policy
                    </li>
                    <li>
                       Cnacellation Policy
                    </li>
                </ul>
            </div>
            <div>
            <ul className="text-white space-y-3 text-center mt-7 sm:mt-0">
                    <li className="text-2xl font-bold underline font-serif text-blue-50">
                    NEWS LETTER
                    </li>
                    <li className="mt-5">
                    Subscribe to our new channel to get latest updates
                    </li>
                    <li>
                        <input  className="text-center w-[75%] p-2 border rounded-md border-blue-300" placeholder="Enter Your Email" />
                        <button className="px-5 py-2 bg-blue-900 rounded-md my-3">Submit</button>
                    </li>
                    
                </ul>
            </div>
        </section>
        <section className="mx-auto w-full sm:w-[30%]">
            <ul className="flex gap-5 mx-auto border-b-4 border-white p-5">
                <li className="p-3 bg-white rounded-full hover:brightness-75 w-10 mx-auto "><SlSocialFacebook/></li>
                <li className="p-3 bg-white rounded-full hover:brightness-75 w-10 mx-auto"><SlSocialPintarest/></li>
                <li className="p-3 bg-white rounded-full hover:brightness-75 w-10  mx-auto"><SlSocialLinkedin/></li>
            </ul>
            <p className="text-center p-2 shadow-lg  shadow-white">
                Copy Righted By Bilal Ahad
            </p>
        </section>
        </section>
        </>
    )
}
