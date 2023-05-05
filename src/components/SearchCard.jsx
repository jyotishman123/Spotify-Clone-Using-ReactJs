import React from 'react'
import { Link } from 'react-router-dom'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

export default function SearchCard({item}) {
  return (
    <div className='px-6 bg-slate-950 rounded-lg hover:bg-slate-800'>
        <Link to={`../${item?.type}/${item?.id}`} >
        <div className='flex items-center my-5 p-2'>
            <PlayCircleFilledOutlinedIcon fontSize='large' className='text-green-600 mr-6'/>
            <img src={item?.album?.images[0]?.url} alt="" className='sm:w-[80px] w-[50px] mx-3'  />
            <h1 className='mx-3 sm:text-xl text-lg text-white font-semibold'>{item?.name}</h1>
        </div>
        </Link>
    </div>
  )
}
