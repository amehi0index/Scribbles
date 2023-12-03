import React from 'react'
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-1/5 flex justify-between items-center px-16 pt-4">
        <div className="w-1/3 h-full flex bg-[url('../images/carrot2.svg')] bg-no-repeat bg-opacity-75 pt-8 text-gray-400">
           <div className="text-lg font-semibold">FOLLOW US ON</div>   
           <div className="flex justify-evenly w-1/2">
                <FaInstagram style={{ fontSize: '24px'}} className="hover:text-slate-500 duration-400"/>
                <FaTwitter style={{ fontSize: '24px' }} className="hover:text-slate-500 duration-400"/>
                <FaTiktok style={{ fontSize: '24px' }} className="hover:text-slate-500 duration-400"/>
            </div>
        </div> 
       
        <div className="text-gray-400">Copyright @2024 Nibbles & Scribbles</div> 
    </div>
  )
}

export default Footer