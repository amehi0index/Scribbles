import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input dir="ltr"
      {...props} 
      className={`outline-none bg-white text-gray-400 text-lg opacity-75 border-gray-300 border rounded-s-lg pl-2 w-4/5 focus:shadow-inputfocus focus:border-white ${props.className}`} 
      autoComplete="false" 
    />
  )
}

export default Input;