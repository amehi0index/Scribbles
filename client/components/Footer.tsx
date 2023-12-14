import React from 'react'
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-16 py-4 justify-between items-center text-gray-300">
    <div className="flex flex-col lg:flex-row items-center lg:w-1/5 w-full py-2">
      <div className="py-2 text-gray-400 text-sm">FOLLOW US ON</div>
      <div className="py-2 flex justify-start lg:justify-center items-center">
          <FaInstagram className="cursor-pointer hover:text-slate-500 duration-400 mx-2"/>
          <FaTwitter className="cursor-pointer hover:text-slate-500 duration-400 mx-2"/>
          <FaTiktok className="cursor-pointer hover:text-slate-500 duration-400 mx-2"/>
      </div>
    </div>
    <div className="text-gray-400 text-sm">
        Copyright @2024 Nibbles & Scribbles
    </div>
</div>

  )
}

export default Footer