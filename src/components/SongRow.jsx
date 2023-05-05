import React from 'react'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

export default function SongRow({allsong,playSong}) {
    console.log(allsong?.items)
  return (
     <div className='bg-slate-900  px-6 py-1 pb-[150px]'>
                     

        {allsong?.items.map((item)=>{
            return(
                <div className='my-6 hover:bg-slate-500 p-4 rounded-md ' onClick={()=> playSong(item?.uri || item?.track?.uri)}>
                   
                    
                { item?.track?.album.images[0]?.url ? (
                <div className='flex text-slate-400 items-center cursor-pointer  hover:text-white'>
                    <img src={item?.track?.album?.images[0]?.url} alt="" className='w-[60px] mx-4 rounded-md' />
                     <h1 className='mx-4 text-lg font-semibold font-poppins'>{item?.track.name}</h1>
                </div>)
                
                :(
                    <div className='flex items-center cursor-pointer'>
                        <MusicNoteOutlinedIcon className='text-white mx-4'/>
                         <h1 className='text-white mx-4 font-lg font-semibold font-poppins'>{item?.name || item?.track?.name}</h1>
                </div>
                )
                }
                </div>
            )
        })}
     </div>
  )
}
