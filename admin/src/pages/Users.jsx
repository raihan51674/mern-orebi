import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { serverUrl } from '../../config';
import Loader from '../components/Loader';
import NewUserFrom from '../components/NewUserFrom';
import Title from '../components/Title';


const Users = ({token}) => {
  const [UsersList, setUsersList]= useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selecteUsers, setselecteUsers] = useState(null);
  let [isOpen, setIsOpen] = useState(false)

  const getUsersList = async()=>{
     try {
      setLoading(true)
      const response =await axios.get(serverUrl + "/api/user/users",{
        headers:{
          token,
          "Content-Type": "Application/json",
        }
      });
      const data = response?.data
      if(data?.success){
        setUsersList(data?.users)
      }else{
        toast.error(data?.message)
      }
      
     } catch (error) {
       console.log("User list Fetching error", error?.message);
       toast.error(error?.message)
     } finally {
      setLoading(false);
   }
  };
   useEffect(()=>{
    getUsersList();
   },[])

   const handleRemoveUser=async(_id)=>{
    const confirmRemoval = window.confirm("Are you sure you want to remove this user?")
    if(confirmRemoval){
      setLoading(true)
      try {
         const response=await axios.post(serverUrl + '/api/user/remove',{
          _id,
         })

         const data =response?.data;
         if (data?.success){
          toast.success(data?.message)
          await getUsersList()

         }else{
           toast.error(data?.message)
         }

      } catch (error) {
        console.log('user remove error',error)
        toast.error(error?.message)
        
      } finally{
        setLoading(false)
      }
    }
   }
   const openLoginFrom=()=>{
    setselecteUsers(null)
    setIsOpen(true)
   }

   const closeLoginFrom=()=>{
    setIsOpen(false)
   }


  return (
    <div>
     {isLoading ? <Loader/>: <div>
       <div className='flex items-center justify-between max-w-3xl '>
       <Title>Users List</Title>
       <button onClick={openLoginFrom} className='flex items-center gap-1 bg-black/80 px-6 text-white text-sm font-medium py-2 rounded-md hover:bg-black duration-300 transition-colors mt-2'><IoMdAdd/> Add Users</button>

       </div>
       {UsersList?.length >0 ? <div className='max-w-3xl flex flex-col gap-2 mt-2'>

          <div className='py-1 px-2 border border-gray-100text-sm items-center my-1.5 grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr]'>
            <b className='hidden md:inline-block'>Name</b>
            <b>Email</b>
            <b className='hidden md:inline-block'>Admin</b>
            <b className='text-center'>Action</b>
            <b className='text-center'>Edit</b>
          </div>
          {UsersList?.map((item)=>(
            <div key={item?._id} className='py-1 px-2 border border-gray-100text-sm items-center my-1.5 grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr]'>
              <p className='hidden md:inline-block font-semibold'>{item?.name}</p>
              <p className='font-medium'>{item?.email}</p>
             <div className='ml-5 hidden md:inline-block'>
             <p className={item.isAdmin ? "font-bold": "font-normal"}> {item?.isAdmin? 'Admin' :'user'}</p>
             </div>
              <FaTrash onClick={()=>{handleRemoveUser(item?._id)}} className='text-lg text-black/60 cursor-pointer hover:text-red-600 duration-300 ease-in-out text-center w-full'/>
              <button onClick={()=>{setselecteUsers(item); setIsOpen(true)}} className='text-base cursor-pointer hover:text-green-700 duration-300 ease-in-out font-semibold'>Edit</button>
            </div>
          ))}

       </div> :<div className='mt-2'>
        <p className='mb-4'>you have no users in your databases</p>
        {/* <button className='bg-black/80 text-white py-2.5 px-5 rounded-md hover:bg-black duration-300 ease-in-out'> Add Users</button> */}
       </div> }
      </div>}
      <NewUserFrom isOpen={isOpen} setIsOpen={setIsOpen} close={closeLoginFrom} getUsersList={getUsersList} setselecteUsers={setselecteUsers} selecteUsers={selecteUsers}/>
    </div>
  )
}

export default Users
