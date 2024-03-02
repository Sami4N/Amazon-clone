import React from 'react'
import Logo from '../assets/logo.webp'
import { TbWorld } from "react-icons/tb";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <>
        <div className='bg-white text-black py-10 pb-6 flex flex-col items-center'>
            <div className='w-full border-y-2  flex flex-col items-center py-10 pb-6'>
                <p>See personalized recommendations</p>
                <button className='myyellow text-sm font-bold px-[110px] py-2 rounded-md m-2'>Sign in</button>
                <p className='text-sm'>New Customer? <a className='text-blue-500 hover:text-red-700' href="#">Start here.</a></p>
            </div>
        </div>
        <div className='mygray flex justify-center hover:bg-slate-600 cursor-pointer'>
            <p className='text-white py-4'>Back to top</p>
        </div>
        <div className='flex justify-around myblue text-white pb-16'>
            <div className='py-10'>
                <h1 className='font-bold text-[17px] my-3'>Get to Know Us</h1>
                <ul>
                    <li className=' hover:underline cursor-pointer'>Careers</li>
                    <li className=' hover:underline cursor-pointer'>Blog</li>
                    <li className=' hover:underline cursor-pointer'>About Amazon</li>
                    <li className=' hover:underline cursor-pointer'>Investor Relations</li>
                    <li className=' hover:underline cursor-pointer'>Amazon Devices</li>
                    <li className=' hover:underline cursor-pointer'>Amazon Science</li>
                </ul>
            </div>
            <div className='py-10'>
                <h1 className='font-bold text-[17px] my-3'>Make Money with Us</h1>
                <ul>
                    <li className='hover:underline cursor-pointer'>Sell products on Amazon</li>
                    <li className='hover:underline cursor-pointer'>Sell on Amazon Business</li>
                    <li className='hover:underline cursor-pointer'>Sell apps on Amazon</li>
                    <li className='hover:underline cursor-pointer'>Become an Affiliate</li>
                    <li className='hover:underline cursor-pointer'>Advertise Your Products</li>
                    <li className='hover:underline cursor-pointer'>Self-Publish with Us</li>
                    <li className='hover:underline cursor-pointer'>Host an Amazon Hub</li>
                </ul>
            </div>
            <div  className='py-10'>
                <h1 className='font-bold text-[17px] my-3'>Amazon Payment Products</h1>
                <ul>
                    <li className='hover:underline cursor-pointer'>Amazon Business Card</li>
                    <li className='hover:underline cursor-pointer'>Shop with Points</li>
                    <li className='hover:underline cursor-pointer'>Reload Your Balance</li>
                    <li className='hover:underline cursor-pointer'>Amazon Currency Converter</li>
                </ul>
            </div>
            <div  className='py-10'>
                <h1 className='font-bold text-[17px] my-3'>Let Us Help You</h1>
                <ul>
                    <li className='hover:underline cursor-pointer'>Amazon and COVID-19</li>
                    <li className='hover:underline cursor-pointer'>Your Account</li>
                    <li className='hover:underline cursor-pointer'>Your Orders</li>
                    <li className='hover:underline cursor-pointer'>Shipping Rates & Policies</li>
                    <li className='hover:underline cursor-pointer'>Returns & Replacements</li>
                    <li className='hover:underline cursor-pointer'>Manage Your Content and Devices</li>
                    <li className='hover:underline cursor-pointer'>Amazon Assistant</li>
                    <li className='hover:underline cursor-pointer'>Help</li>
                </ul>
            </div>
        </div>
        <div className=' myblack text-white py-10 pb-16 border-y-[1px] border-b-0'>
            <div className='flex justify-center items-center'>
                <img className='w-20 h-7 mx-20' src={Logo} alt="/" />
                <button className='flex items-center justify-center mx-1 border-[1px] rounded-md py-2 px-5'><TbWorld size={20} className='mr-3'/> English</button>
                <button className=' mx-1 border-[1px] rounded-md py-2 px-5'>$ <span>USD-U.S. Dollar</span></button>
                <button className='flex items-center justify-center mx-1 border-[1px] rounded-md py-2 px-5'><LiaFlagUsaSolid size={20} className='mr-3'/> United States</button>
            </div>
            <div className='flex flex-col items-center text-sm mt-20'>
                <div className='flex justify-center'>
                    <p className='mx-3 my-1'>Conditions of Use</p>
                    <p className='mx-3 my-1'>Privacy Notice</p>
                    <p className='mx-3 my-1'>Your Ads Privacy Choices</p>
                </div>
                <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </>
    
  )
}

export default Footer
