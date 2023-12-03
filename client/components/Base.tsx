import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Header from './Header'
import Input from './Input'
import Footer from './Footer'


const Base = () => {

    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    // useEffect(()=> {
    //     fetch("http://localhost:5000/api/home").then(
    //         response => response.json()
    //         ).then(
    //         data => {
    //             setMessage(data.message)
    //         }
    //     )
    // },[])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        await sendEmailToBackend(email);
        console.log('I submitted! Go me')
    };

    const sendEmailToBackend = async (email: string): Promise<void> => {
        try {
            const response = await fetch('http://localhost:5000/api/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="h-screen w-screen flex  justify-between flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] px-14 ">
            <div className="pt-16">
                <Header />

                <form onSubmit={handleSubmit} className="w-1/2 flex flex-row py-8 ml-16 mt-6">
                    <Input onChange={onChange} name="email" placeholder="Email" />
                    <button dir="rtl" type="submit" className="text-white bg-slate-800 hover:bg-slate-700 duration-300 p-3 rounded-s-lg w-1/5">Join</button>
                </form>

                <h1 className="text-purple-700 ml-16">{message}</h1>
            </div>

            <Footer/>
        </div>
        
    )
}

export default Base