import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarPlaylist({title, images, id}) {
   
  return (
    <Link to={`/playlist/${id}`}> 
     <div className='text-white'>
          <div className='flex justify-start items-center mt-3 cursor-pointer'>
            <img src={images?.url} alt="" className='w-[50px]  rounded-lg ' />
            <p className='ml-5 text-lg font-semibold'>{title}</p>
          </div>
     </div>
     </Link>
  )
}
