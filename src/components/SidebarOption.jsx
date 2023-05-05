import React from 'react'

export default function SidebarOption({title,Icon}) {
  return (
    <div className='flex items-center justify-start bg-zinc-900 p-3 rounded-md mt-2 cursor-pointer hover:bg-green-400 '>
        {Icon && <Icon fontSize="large" className="text-white    mr-2 text-3xl cursor-pointer"/>}
      {Icon ? <h4 className='text-white text-xl font-semibold cursor-pointer font-poppins'>{title}</h4> : <p className='text-white cursor-pointer text-2xl font-semibold  font-poppins'>{title}</p> }
        </div>
  )
}
