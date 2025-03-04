import React from 'react'
import {cn} from "./ui/cn"

const Container = ({ childreen, className }) => {
  return (
    <div className={cn('max-w-screen-xl mx-auto px-4 py-10',className)}>
      {childreen}
    </div>
  )
}

export default Container;
