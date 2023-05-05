import React from 'react'
import { useContexValue } from "../ContexProvider"
import { Link } from 'react-router-dom'

export default function Card({images,name,type,id,desc}) {

   

   

  

   switch(type){
    case 'playlist':{
      return(
        <Link to={`/${type}/${id}`}> 
        <div className='mx-3 mt-6 bg-slate-800 min-w-[250px] p-5 rounded-lg cursor-pointer  '> 
     
        <img src={images[0].url} alt="" className='w-[200px] h-[180px]' />
        <h1 className='text-white mt-3 text-xl font-semibold'>{name}</h1>
        <p className='text-slate-500 mt-3  font-normal'>{desc.slice(0,20)}</p>
   
     </div>
     </Link>
      )
    }
   
    case 'album':{
      return(
        <Link to={`/${type}/${id}`}> 
        <div className='mx-3 mt-6 bg-slate-800 min-w-[250px]   p-5 rounded-lg cursor-pointer'> 
     
        <img src={images[0].url} alt="" className='w-[200px] h-[180px]' />
        <h1 className='text-white mt-3 text-xl font-semibold'>{name.slice(0,10)}</h1>
         
   
     </div>
     </Link>
      )
    }
   }


//   return (
//     <div> 
//     {type == 'playlist' ? ( 
//     <div className='mx-3 mt-6 bg-slate-800  p-5 rounded-lg cursor-pointer  '> 
     
//         <img src={images[0].url} alt="" className='w-[200px] h-[180px]' />
//         <h1 className='text-white mt-3 text-xl font-semibold'>{name}</h1>
//         <p className='text-slate-500 mt-3  font-normal'>{desc.slice(0,20)}</p>
   
//      </div>
//     ):(
//       <div className='mx-2 mt-6  p-5 rounded-lg cursor-pointer text-center '> 
     
//       <img src={images[0].url} alt="" className='w-[150px] rounded-full ' />
//       <h1 className='text-white mt-3 text-lg font-semibold'>{name}</h1>
       
 
//    </div>
//     )}
//     </div>
//   )
}
