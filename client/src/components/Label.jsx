import React from 'react'
import { cn } from './ui/cn'

const Label = ({children, className, htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className={cn('font-semibold text-base text-gray-700 ',className)}>{children}</label >
  )
}

export default Label
