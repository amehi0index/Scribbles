import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmailConfirmation = () => {
    const [verificationStatus, setVerificationStatus] = useState('');
    const router = useRouter();
    const { token } = router.query; 

    useEffect(() => {
        const verifyEmail = async () => {
            if (token) {
                try {
                    const response = await fetch(`/api/email-subscribers/verify?token=${token}`);
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