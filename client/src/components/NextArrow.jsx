import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
  const {onClick}=props;
  return (
    <div className='w-14 h-14 bg-black bg-opacity-40 rounded-full text-white hover:bg-opacity-100 flex hoverEffect items-center justify-center absolute top-[27%] right-2.5 z-10 cursor-pointer' onClick={onClick}>
      <FaLongArrowAltRight/>
    </div>
  )
}

export default NextArrow
