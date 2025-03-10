import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

const PreviousArrow = (props) => {
  const {onClick}=props;
  return (
    <div className='w-14 h-14 bg-black bg-opacity-40 rounded-full text-white hover:bg-opacity-100 flex hoverEffect items-center justify-center absolute top-[27%] left-1 z-10 cursor-pointer' onClick={onClick}>
      <FaLongArrowAltLeft/>
    </div>
  )
}

export default PreviousArrow
