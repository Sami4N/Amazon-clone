import React, { useState } from 'react'
import Logo from '../assets/logo.webp'
import { GrLocation } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  const [search, setSearch] = useState('')
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
      <div className='w-[30%] flex justify-between items-center mx-10'>
        <div className='flex items-end'>
          <h4 className='text-sm'>Hello, sign in <br /><span className=' text-md font-bold'>Account & Lists</span></h4>
          <FaCaretDown />
        </div>
        <h4 className='text-sm'>Returns <br /><span className=' text-md font-bold'>& Orders</span></h4>
        <div><PiShoppingCartSimpleBold size={40}/></div>
      </div>
    </div>
    <div className='w-full myblue h-11 text-white flex justify-start items-center p-2'>
      <div className='flex items-center hover:border-[1px] hover:py-2 px-2'>
        <IoMenu size={35}/>
        <p className='mx-3 ml-0 font-bold'>All</p>
      </div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2'>Today's Deals</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2'>Customer Service</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2'>Registry</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2'>Gift Cards</div>
      <div className='mx-1 font-medium hover:border-[1px] hover:py-2 px-2'>Sell</div>
    </div>
    </>
    
  )
}

export default Header
