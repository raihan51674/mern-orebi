import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdAdd } from "react-icons/io";
import { serverUrl } from '../../config';
import Loader from '../components/Loader';
import Title from '../components/Title';


const Users = ({token}) => {
  const [UsersList, setUsersList]= useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selecteUsers, setselecteUsers] = useState(null);

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


  return (
    <div>
     {isLoading ? <Loader/>: <div>
       <div>
       <Title>Users List</Title>
       <button className='flex items-center gap-1'><IoMdAdd/> Add Users</button>

       </div>
      </div>}
    </div>
  )
}

export default Users
