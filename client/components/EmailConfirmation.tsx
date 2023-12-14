import {useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../images/tomato-stem.svg'
import EmailChecked from '../images/email-checked.svg'

interface EmailVerificationProps {
    isVerified: boolean;
}

const EmailConfirmation: React.FC<EmailVerificationProps> = ({ isVerified }) => {
    const router = useRouter()

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isVerified) {
            timer = setTimeout(() => {
                router.push('/')
            },10000) 
        }
        return () => clearTimeout(timer) 
    }, [isVerified, router])


  return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="rounded w-1/2 px-4 pb-4">
            <Image src={Logo} alt="Logo" className="mx-auto w-1/2"/>
            <Image src={EmailChecked} alt="Email" className="mx-auto w-1/3 h-auto my-4"/>
            {/* <button onClick={navigateHome} className="text-white bg-slate-700 hover:bg-slate-800 duration-300 p-3 my-3 rounded w-1/5">Home</button> */}
        </div>
    </div>
  )
}

export default EmailConfirmation