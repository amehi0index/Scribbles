import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import Header from './Header'
import Input from './Input'
import Footer from './Footer'
import SubscriptionForm from './SubscriptionForm'


const Base = () => {

    

    // useEffect(()=> {
    //     fetch("http://localhost:5000/api/home").then(
    //         response => response.json()
    //         ).then(
    //         data => {
    //             setMessage(data.message)
    //         }
    //     )
    // },[])
    
    return (
        <div className="h-screen w-screen flex lg:items-start items-center justify-between flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] px-14 ">
            <div className="pt-24 w-full">
                <Header />
                <SubscriptionForm />
            </div>
            <Footer/>
        </div>  
    )
}

export default Base