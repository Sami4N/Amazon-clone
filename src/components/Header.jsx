import React, { useState } from 'react'
import Logo from '../assets/logo.webp'
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [search, setSearch] = useState('')
  const [nav, setNav] = useState(false)
  const [hov, setHov] = useState(true)

  const handleNav = () =>{
    setNav(!nav)
}
const handleHover = () =>{
  setHov(!hov)
}
  return (
    <>
    <div className='w-full myblack h-20 text-white flex justify-around'>
      <div className='flex items-center leading-none'>
        <img className=' w-40 m-1 p-6 hover:border-[1px]  hover:py-4 cursor-pointer rounded-sm' src={Logo} alt="/" />
        <div className='flex justify-center items-end hover:border-[1px] hover:py-4 cursor-pointer rounded-sm'>
          <GrLocation size={23} className='pb-[-5px]'/>
          <p className='w-20 font-bold '><span className=' text-gray-300 text-sm font-normal'>Deliver to </span>Ethiopia</p>
        </div>
      </div>
      <div className='w-full px-6 pr-0 flex justify-center items-center'>
          <input className='w-[100%] mx-20 mr-0 p-3 rounded-md rounded-r-none placeholder:text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#ea8a0c]' type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search Amazon'/>
          <IoSearchSharp className='text-gray-600 w-[50px] h-[48px] px-[10px] bg-[#FEBD69] rounded-r-md' />
      </div>
      <div className='w-[40%] flex justify-between items-center mx-10'>
        <div className='relative'>
            <div className='flex items-end  hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer dropdown'>
              <h4 className='text-sm'>Hello, sign in <br /><span className=' text-md font-bold'>Account & Lists</span></h4>
              <FaCaretDown />
            </div>
              <div className='w-[35rem] fixed top-[70px] right-[-100%] bg-slate-300 text-black rounded-sm  drop ease-in-out duration-700'>
                <div className='flex flex-col items-center py-4 mx-6 border-b-[1px]'>
                  <button className='myyellow px-[6rem] py-2 rounded-lg'>Sign in</button>
                  <p className='text-[13px]'>New customer? <a className=' text-blue-500 hover:text-red-800 hover:underline' href="#">Start here</a></p>
                </div>
                <div  className='grid grid-cols-2 py-4'>
                  <div className=' border-r-2'>
                    <h1 className='font-bold text-[19px] px-6 mb-3'>Your Lists</h1>
                    <ul>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Create a List</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Find a List or Registry</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold text-[19px] px-6 mb-3'>Your Account</h1>
                    <ul>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Account</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Orders</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Recommendations</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Browsing History</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Watchlist</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Video Purchases & Rentals</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Kindle Unlimited</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Content & Devices</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Subscribe & Save Items</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Memberships & Subscription</li>
                      <li className='px-6 hover:cursor-pointer hover:text-red-700 hover:underline'>Music Library</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
        <h4 className='text-sm hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Returns <br /><span className=' text-md font-bold'>& Orders</span></h4>
        <div className='flex items-end font-semibold  hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'><PiShoppingCartSimpleBold size={40}/>Cart</div>
      </div>
    </div>
    <div className='w-full myblue h-11 text-white flex justify-start items-center p-2'>
      <div onClick={handleNav} className='flex items-center hover:border-[1px] hover:py-1 px-2 hover:cursor-pointer'>
        <IoMenu size={35}/>
        <p className='mx-3 ml-0 font-bold'>All</p>
      </div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Today's Deals</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Customer Service</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Registry</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Gift Cards</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2 hover:cursor-pointer'>Sell</div>
    </div>
    <div className={nav ?' bg-black fixed top-0 left-0 w-full h-full bg-opacity-40  ease-in-out duration-700' : 'fixed left-[-100%]'}>
    <div className={nav ? 'w-[25rem] bg-white text-black fixed top-0 left-0 ease-in-out duration-700' : 'fixed left-[-100%]'}>
      <div className='flex justify-between items-center myblue text-white font-serif  font-semibold px-6 py-4 text-xl'>
        <div className='flex items-center cursor-pointer'>
          <FaUser size={28} className='text-[#232F3E] bg-white p-[2px] mx-3 rounded-full'/>
          Hello, sign in
        </div>
         <IoMdClose onClick={handleNav} size={30} className=' mr-[-20px] cursor-pointer'/>
      </div>
      <div className='text-gray-600 font-semibold overflow-y-scroll h-[calc(100vh)]'>
        <div  className='border-b-2'>
          <h1 className='text-xl font-bold text-gray-800 py-6 px-9 pb-2'>
            Digital Content & Devices
          </h1>
          <ul>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Amazon Music <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Kindle E-readers & Books <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 mb-3 hover:cursor-pointer'>Amazon Appstore <IoIosArrowForward /></li>
          </ul>
        </div>
        <div  className='border-b-2'>
          <h1 className='text-xl font-bold text-gray-800 py-6 px-9 pb-2'>
             Shop by Department
          </h1>
          <ul>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Electronics <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Computers <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Smart Home <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 mb-3 hover:cursor-pointer'>Arts & Crafts <IoIosArrowForward /></li>
          </ul>
        </div>
        <div  className='border-b-2'>
          <h1 className='text-xl font-bold text-gray-800 py-6 px-9 pb-2'>
              Programs & Features
          </h1>
          <ul>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Gift Cards <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Shop By Interest</li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Amazon Live <IoIosArrowForward /></li>
            <li className='flex justify-between items-center hover:bg-slate-100 px-9 py-3 mb-3 hover:cursor-pointer'>International Shopping <IoIosArrowForward /></li>
          </ul>
        </div>
        <div  className='border-b-2'>
          <h1 className='text-xl font-bold text-gray-800 py-6 px-9 pb-2'>
             Help & Settings
          </h1>
          <ul>
            <li className=' hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Your Account</li>
            <li className='flex items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'><TbWorld size={20} className='mr-3'/> English</li>
            <li className='flex items-center hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'><LiaFlagUsaSolid size={20} className='mr-3'/> United States</li>
            <li className=' hover:bg-slate-100 px-9 py-3 hover:cursor-pointer'>Cusromer Service</li>
            <li className=' hover:bg-slate-100 px-9 py-3 mb-[7rem] hover:cursor-pointer'>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  
    
    </>
    
  )
}

export default Header
