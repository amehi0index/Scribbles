
import React from 'react';
import Image from 'next/image';
import Logo from '../images/ns5.svg';
import Tomato from '../images/tomato.svg';

const Header: React.FC = () => {
  return (
    <div className="w-full">
        <div className="w-1/2">
            {/* <Image src={Tomato} alt="Logo" className="m-0"/> */}
            <Image src={Logo} alt="Logo" className=" pl-1 pb-0 mb-0 w-5/6 h-auto"/>
            <p className="text-xl text-white pl-16 p-0 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!</p>
        </div>
    </div>
  )
}

export default Header;