import React from 'react'
import { cn } from './ui/cn'

const Input = ({type,placeholder,className,value,onChange,required}) => {
  return (
    <div>
       <input type={type} placeholder={placeholder} className={cn('w-full h-8 placeholder:text-sm placeholder:tracking-wide text-base px-4 font-medium placeholder:font-normal rounded-md border outline-none border-gray-400 ',className)}
       value={value} onChange={onChange} required={required}/>
    </div>
  )
}

export default Input
