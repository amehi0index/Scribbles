import React from 'react'
import { FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-1/5 flex justify-between items-center text-white px-16 pt-4">
        <div className="w-1/3 h-full flex bg-[url('../images/carrot2.svg')] bg-no-repeat bg-opacity-75 pt-8">
           <div className="text-lg">FOLLOW US ON</div>   
           <div className="flex justify-evenly w-1/2">
                <FaInstagram style={{ fontSize: '24px'}}/>
                <FaTwitter style={{ fontSize: '24px' }}/>
                <FaTiktok style={{ fontSize: '24px' }}/>
            </div>
        </div> 
       
        <div>Copyright @2024 Nibbles & Scribbles</div> 
    </div>
  )
}

export default Footer