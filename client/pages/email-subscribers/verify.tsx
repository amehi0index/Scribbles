import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmailVerification = () => {
    const [verificationStatus, setVerificationStatus] = useState('');
    const router = useRouter();
    const { token } = router.query;

    useEffect(() => {
        if (!token) return;
        const verifyEmailToken = async () => {
            try {
                // const response = await fetch(`http://localhost:5000/api/email-subscribers/verify?token=${token}`);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'; 
                const response = await fetch(`${apiUrl}/api/email-subscribers/verify?token=${token}`);

                if (!response.ok) {
                    throw new Error('Email verification failed');
                }
                const data = await response.json();
                console.log("FE Verification response:", data); 
                setVerificationStatus(data.message || 'Email verified successfully!');
            } catch (error) {
                setVerificationStatus('Verification failed. Invalid or expired token.');
                console.log(error)
            }
        };

        verifyEmailToken();
    }, [token]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <p>{verificationStatus || 'Verifying your email...'}</p>
            </div>
        </div>
    );
};

export default EmailVerification;