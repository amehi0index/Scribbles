import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmailConfirmation = () => {
//     const [verificationStatus, setVerificationStatus] = useState('');
//     const [isVerified, setIsVerified] = useState(false);
//     const router = useRouter();
//     const { token } = router.query; 

//     // Define the API base URL

//     const apiBaseUrl = process.env.NODE_ENV === 'development' 
//      ? 'http://localhost:5000' 
//      : 'https://scribbles-dac22275e7f8.herokuapp.com';

//     useEffect(() => {
//         const verifyEmail = async () => {
//             if (token) {
//                 try {
//                     const response = await fetch(`${apiBaseUrl}/api/email-subscribers/verify?token=${token}`);
//                     if (!response.ok) {
//                         throw new Error('Verification failed');
//                     }
//                     const data = await response.json();
//                     setVerificationStatus(data.message);
//                     setIsVerified(true);
//                     //redirect to confirm??
//                 } catch (error) {
//                     setVerificationStatus('Verification failed. Invalid or expired token.');
//                     setIsVerified(false);
//                 }
//             }
//         };

//         verifyEmail();
//     }, [token]); 

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="text-center p-6 bg-white shadow-md rounded-lg">
//                 <p className={`text-lg ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
//                     {verificationStatus || 'Verifying...'}
//                 </p>
//                 {isVerified && (
//                     <button 
//                         onClick={() => router.push('/')}
//                         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                         Go to Home
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
return(
    <div></div>
)
 };



export default EmailConfirmation;