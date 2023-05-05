import React from 'react'


export default function PreviewHeaderSection({headerInfo}) {
    
   console.log(headerInfo)

  return (
     <div className='p-6 flex sm:flex-row flex-col items-center'>
         <div>
            <img src={headerInfo?.images[0].url} alt="" className='md:min-w-[300px] sm:min-w-[200px] min-w-[50px]' />
         </div>
         <div className='text-white mx-3'>
            <h4 className='text-xl font-bold font-poppins uppercase my-5'>{headerInfo?.type}</h4>
            <h1 className='text-3xl font-bold my-5'>{headerInfo?.name}</h1>
            <p className='font-semibold text-lg'>{headerInfo?.description || headerInfo?.album_type}</p>
            {/* <PlayCircleFilledOutlinedIcon fontSize='large' className=' my-2 cursor-pointer text-green-600'/>    */}
         </div>
     </div>
  )
}
