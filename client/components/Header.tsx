
import React from 'react'
import Image from 'next/image'
import Logo from '../images/tomato.svg'

const Header: React.FC = () => {
  return (
    <div className="w-full lg:flex lg:items-start sm:flex-col sm:items-center sm:justify-center">
      <div className="lg:w-1/2 sm:w-full flex flex-col items-center lg:items-start">
          <Image src={Logo} alt="Logo" className="pl-1 pb-0 mb-0 w-5/6 h-auto"/>
          <p className="w-full lg:ml-16 text-center lg:text-left text-white sm:text-md lg:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!</p>
      </div>
    </div>

  )
}

export default Header