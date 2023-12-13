import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import Input from './Input'

const SubscriptionForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createNewEmailSubscriber(email);
    // Redirect to verification page on success
    router.push('/email-subscribers/verify');
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
        console.log('data from be', data)
        setShowSuccess(true);
        setSubscriptionStatus(data.message)
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div>
      <form onSubmit={handleSubmit} className="lg:w-1/2 sm:w-full flex flex-row py-8 lg:ml-16  ml-0 sm:mt-6">
        <Input onChange={onChange} name="email" placeholder="Email" value={email}/>
        <button dir="rtl" type="submit" className="text-white bg-slate-700 hover:bg-slate-800 duration-300 p-3 rounded-s-lg w-1/5">Join</button>
      </form>
      {showSuccess && <h1 className="text-orange-700 text-lg ml-16">{subscriptionStatus}</h1>}
    </div>
  );
};

export default SubscriptionForm;