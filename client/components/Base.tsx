import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Header from './Header'
import Input from './Input'
import Footer from './Footer'


const Base = () => {

    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    // useEffect(()=> {
    //     fetch("http://localhost:5000/api/home").then(
    //         response => response.json()
    //         ).then(
    //         data => {
    //             setMessage(data.message)
    //         }
    //     )
    // },[])

     // Define the API base URL
     const apiBaseUrl = process.env.NODE_ENV === 'development' 
     ? 'http://localhost:5000' 
     : 'https://scribbles-dac22275e7f8.herokuapp.com';

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showSuccess) {
            timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000); 
        }
        return () => clearTimeout(timer); 
    }, [showSuccess]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        await createNewEmailSubscriber(email);
        setEmail('')
    };

    const createNewEmailSubscriber = async (email: string): Promise<void> => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/email-subscribers/new`, {
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
            setShowSuccess(true);
            setMessage(data.message)
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="h-screen w-screen flex lg:items-start items-center justify-between flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] px-14 ">
            <div className="pt-24 w-full">
                <Header />

                <form onSubmit={handleSubmit} className="lg:w-1/2 sm:w-full flex flex-row py-8 lg:ml-16  ml-0 sm:mt-6">
                    <Input onChange={onChange} name="email" placeholder="Email" value={email}/>
                    <button dir="rtl" type="submit" className="text-white bg-slate-800 hover:bg-slate-700 duration-300 p-3 rounded-s-lg w-1/5">Join</button>
                </form>

                {showSuccess && <h1 className="text-purple-700 ml-16">{message}</h1>}

            </div>

            <Footer/>
        </div>
        
    )
}

export default Base