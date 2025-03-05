import React from 'react'
import {FaEnvelope ,FaGithub, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const linkData =[
    {icon :<FaGithub/>, href : "https://github.com/"},
    {icon :<FaFacebook/>, href : "https://github.com/"},
    {icon :<FaEnvelope/>, href : "https://github.com/"},
    {icon :<FaLinkedin/>, href : "https://github.com/"},
    {icon :<FaYoutube/>, href : "https://github.com/"},
]



const SocialLinks = () => {
  return (
    <div className='flex gap-x-2 items-center text-xl text-white/50  '>
      {linkData?.map((item,index)=>(
        <a key={index} href={item?.href} target='blank' className='border border-white/20 inline-flex p-2 cursor-pointer hover:text-white hover: border-white rounded-full hoverEffect'> {item?.icon}</a>
      ))}
    </div>
  )
}

export default SocialLinks
