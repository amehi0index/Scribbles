import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import EmailVerification from '@/components/EmailVerification'
import EmailConfirmation from '@/components/EmailConfirmation'

const Verify = () => {
    const [verificationStatus, setVerificationStatus] = useState('Verifying your email...')
    const [isVerified, setIsVerified] = useState(false)

    const router = useRouter()
    const { token } = router.query

    useEffect(() => {
        if (!token) {
            setVerificationStatus('Please click the verification link sent to your email.')
            return
        }

        const verifyEmailToken = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000' 
                const response = await fetch(`${apiUrl}/api/email-subscribers/verify?token=${token}`)

                if (!response.ok) {
                    throw new Error('Email verification failed')
                }

                const data = await response.json()
                console.log(data)
                setIsVerified(true)
                setVerificationStatus(data.message)
            } catch (error) {
                setVerificationStatus('Verification failed. Invalid or expired token.')
                console.error(error)
            }
        }
        verifyEmailToken()
        // console.log("isVerified:", isVerified);
    }, [token, isVerified])

    return (       
        <div className="h-screen w-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C] px-14">
            <div className=" flex flex-col items-center justify-center text-center text-white w-full">
                { isVerified 
                    ? (<EmailConfirmation isVerified={isVerified} /> )
                    : (<EmailVerification  isVerified={isVerified} />)
                }     
                <p className="sm:text-md lg:text-xl mb-4">{ verificationStatus }</p>
            </div>   
        </div>
    )
}

export default Verify