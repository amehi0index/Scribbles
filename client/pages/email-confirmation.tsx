import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmailConfirmation = () => {
    const [verificationStatus, setVerificationStatus] = useState('');
    const router = useRouter();
    const { token } = router.query; 

    // Define the API base URL
    const apiBaseUrl = process.env.NODE_ENV === 'development' 
     ? 'http://localhost:5000' 
     : 'https://scribbles-dac22275e7f8.herokuapp.com';

    useEffect(() => {
        const verifyEmail = async () => {
            if (token) {
                try {
                    
                    const response = await fetch(`${apiBaseUrl}/api/email-subscribers/verify?token=${token}`);
                    if (!response.ok) {
                        throw new Error('Verification failed');
                    }
                    const data = await response.json();
                    setVerificationStatus(data.message);
                    // setVerificationStatus('Email verified successfully!');
                } catch (error) {
                    setVerificationStatus('Verification failed. Invalid or expired token.');
                }
            }
        };

        verifyEmail();
    }, [token]); 

    return (
        <div>
            <p>{verificationStatus}</p>
        </div>
    );
};

export default EmailConfirmation;