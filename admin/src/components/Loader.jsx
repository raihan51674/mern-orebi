import React from 'react';
import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
  return (
    <div className='text-orange-600 text-5xl justify-center flex w-full py-40 items-center flex-col'>
      <ImSpinner2 className='animate-spin'/>
      <p className='text-lg text-black mt-2 font-medium tracking-wider'>Loading...</p>
    </div>
  )
}

export default Loader
