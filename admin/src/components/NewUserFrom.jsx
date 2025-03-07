import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { IoMdClose } from 'react-icons/io'
import { serverUrl } from '../../config.js'
import Input, { Label } from './ui/input.tsx'


const NewUserFrom = ({ isOpen, close, setIsOpen, getUsersList, setselecteUsers, selecteUsers }) => {


     const [formData, setFormData] =useState({
        name :"",
        email : "",
        password : "",
     });
     useEffect(()=>{
        if(selecteUsers){
            //if user exit
           setFormData({
          _id: selecteUsers?._id || null,
           name:selecteUsers?.name || "",
           email:selecteUsers?.email || "",
            password:"",
           })
        }else{
            //add new users
            setFormData({
              name:"",
              email:"",
              password:"",
            });
        }

     },[selecteUsers])

     const handleChange=(e)=>{
       const{name, value} =e.target
       setFormData((prevData)=>(
        {
            ...prevData,[name]: value
          }
       ))
     
     }

     const handleAddOrUpdateUser= async(e)=>{
        e.preventDefault();
        try {
            let response;
            if (selecteUsers){
                response = await axios.put(`${serverUrl}/api/user/update/${selecteUsers?._id}`,
                    formData
                )

            }else{
                response = await axios.post(`${serverUrl}/api/user/register`,
                    formData
                )

            }
            const data = await response?.data;
            if(data?.success){
                toast.success(data?.message);
                setIsOpen(false);
                getUsersList();
            }else{
                toast.error(data?.message)
            }
            
        } catch (error) {
            console.log("users save error",error);
            toast.error(error?.response?.data?.message || "an error occurred")
            
        }
     }

    return (
        <>


            {isOpen && <div className="w-full fixed min-h-screen bg-black/70 top-0 left-0">

                <Dialog open={isOpen} as="div" onClose={close} className='relative z-10 focus:outline-none'>

                    <div className='fixed inset-0 w-screen overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 rounded-md'>
                            <DialogPanel className='w-full max-w-xl px-10 py-5 bg-white rounded-lg shadow-md shadow-orange-200 border border-gray-300 text-black'>

                                <div className='flex items-center justify-between'
                                >

                                    <DialogTitle>
                                        {selecteUsers ? "Edit User" : "Add User"}
                                    </DialogTitle>
                                    <IoMdClose onClick={()=>setIsOpen(false)} className='text-lg hover:text-red-600 duration-300 cursor-pointer' />


                                </div>

                                <div className='mt-3'>
                                    <form onSubmit={handleAddOrUpdateUser} className='flex flex-col gap-5'>
                                        <div className='flex flex-col gap-1'>
                                            <Label>Enter Name</Label>
                                            <Input id='name' name="name" type="text" placeholder="Enter name..." onChange={handleChange} value={formData.name} />

                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <Label>Enter Email</Label>
                                             
                                            <Input id='email' name="email" type="email" placeholder="Enter Email..." onChange={handleChange} value={formData.email} />

                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <Label>Enter Password</Label>
                                            <Input id='password' name="password" type="password" placeholder="Enter password..." onChange={handleChange} value={formData.password} />

                                        </div>
                                        <button type='submit' className='bg-black/80 text-white w-32 py-2 rounded-md text-sm font-semibold hover:bg-black duration-300'>Submit</button>
                                    </form>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>

                </Dialog>
            </div>}
        </>
    )
}
export default NewUserFrom