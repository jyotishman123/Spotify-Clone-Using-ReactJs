import React from 'react'
import { useContexValue } from "../ContexProvider"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


export default function Header() {
 const [{user},dispatch] = useContexValue()
 console.log(user)

  return (
    <div className='p-6 flex justify-between'>
         <div>
       <Link to={"/"}>  <ArrowCircleLeftOutlinedIcon   className='m-2 text-white text-2xl cursor-pointer' /> </Link>
      
         </div>
         <div className='flex items-center ' >
           <Avatar src={user?.images[0].url}/>
            <div className='bg-slate-500 w-auto sm:inline-block ml-2   hidden px-3 py-2 rounded-2xl text-white font-semibold font-poppins'>{user?.display_name
}</div>
         </div>

    </div>
  )
}
