import React from 'react'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

export default function TrackHeader({trackHeader,playSong}) {
  return (
   <div className='px-6 py-6 sm:py-2 flex justfy-center flex-col sm:flex-row   items-start sm:items-center h-[100vh] '>
    <div className='mx-3'> 
     <img src={trackHeader?.album?.images[0]?.url} className='xl:min-w-[320px] lg:min-w-[250px] sm:min-w-[220px]'/>
    </div>
    <div className='mx-3 pb-[190px] sm:pb-0'>
        <h4 className='text-xl font-semibold text-white uppercase my-3'>{trackHeader?.type}</h4>
        <h1 className='text-3xl font-semibold text-white uppercase my-3'>{trackHeader?.name}</h1>
        <p className='text-lg font-semibold text-white uppercase my-3'>{trackHeader?.artists[0]?.name}</p>
         <PlayCircleFilledOutlinedIcon fontSize='large' className='text-green-600 cursor-pointer' onClick={()=>playSong(trackHeader?.uri)} />
    </div>
   </div>
  )
}
