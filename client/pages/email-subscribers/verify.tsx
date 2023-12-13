import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../images/tomato.svg';
import Email from '../../images/email-ow.svg';
import { useRouter } from 'next/router';

const EmailVerification = () => {
    const [verificationStatus, setVerificationStatus] = useState('Verifying your email...');

    const router = useRouter();
    const { token } = router.query;

    const navigateHome = () => {
      router.push('/'); 
    };

    useEffect(() => {
        if (!token) {
            setVerificationStatus('Please click the verification link sent to your email.');
            return;
        }

        const verifyEmailToken = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'; 
                const response = await fetch(`${apiUrl}/api/email-subscribers/verify?token=${token}`);

                if (!response.ok) {
                    throw new Error('Email verification failed');
                }
                const data = await response.json();
                setVerificationStatus(data.message || 'Email verified successfully!');
            } catch (error) {
                setVerificationStatus('Verification failed. Invalid or expired token.');
                console.error(error);
            }
        };

        verifyEmailToken();
    }, [token]);

    return (
    
<div className="h-screen w-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] px-14">
<div className="text-center text-white">
{/* <div className="flex flex-col items-center justify-center rounded w-1/2 px-4 pb-4"> */}
  <Image src={Logo} alt="Logo" className="mx-auto w-2/3"/>
  <Image src={Email} alt="Email" className="mx-auto w-1/3 h-auto my-4"/>
  <p className="sm:text-md lg:text-xl mb-4">{verificationStatus}</p>
  <button onClick={navigateHome} className="text-white bg-slate-700 hover:bg-slate-800 duration-300 p-3 my-3 rounded w-1/5">Home</button>
</div>
</div>
    );
};

export default EmailVerification;