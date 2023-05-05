import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { useContexValue } from "../ContexProvider";
import SearchCard from './SearchCard';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link } from 'react-router-dom';

export default function SearchArea() {

const  [{user,spotifyDetails}] = useContexValue()
const  [track, setTrack] = useState();
const  [songName, setName] = useState()



  function handleChange(e){
   
    spotifyDetails.searchTracks(e.target.value, { limit: 50 })
    .then((response)=>{
        console.log(response.tracks.items)
        setTrack(response?.tracks?.items)
    })
    setName(e.target.value)
    if(e.target.value === ""){
      setTrack(null)
    }
  }

  console.log(track)

  return (
    <div className='flex-[7] bg-gradient-to-t h-[100vh]  pb-[150px] p-6 overflow-y-scroll from-slate-800 to-slate-900 overflow-y-scrol'> 
  <Link to={"/"}>  <ArrowCircleLeftOutlinedIcon   className='text-white'/> </Link>
        <div className=' m-6 flex justify-between'>
            <div>
            <input type="text" className=' px-5 w-[280px] py-2 rounded-3xl' placeholder='Search your favourite song' onChange={handleChange} />
            </div>
            <div className='flex items-center'>
            <Avatar src={user?.images[0].url}/>
            <div className='bg-slate-500 w-auto lg:inline-block  hidden ml-2 px-3 py-2 rounded-2xl text-white font-semibold font-poppins'>{user?.display_name
}</div>
         </div>
    </div>


   

      <div className='mx-6 mt-[50px] mb-[30px]'>
        <h1 className='font-semibold text-white text-3xl'>Search For:  {songName}</h1>
      </div>

      {track?.map((item)=>{
        return(
            <SearchCard item={item}/>
        )
      })}


    </div>
  )
}


