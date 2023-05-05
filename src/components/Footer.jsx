import React from 'react'
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { useContexValue } from "../ContexProvider"
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';


export default function Footer() {

  const [{isPlaying,showFooter, items, spotifyDetails},dispatch] = useContexValue()
   
  function handlePlayPause(){
    if (isPlaying) {
      spotifyDetails.pause();
      dispatch({
        type: "SET_PLAY",
        payload: false,
      });
    } else {
      spotifyDetails.play();
       spotifyDetails.getMyCurrentPlayingTrack()
       .then((r)=>{
        dispatch({
          type: "SET_ITEM",
          payload: r.item,
        });
       })
      dispatch({
        type: "SET_PLAY",
        payload: true,
      });
    }
  }

  const skipNext = () => {
    spotifyDetails.skipToNext();
    spotifyDetails.play()
    spotifyDetails.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEMS",
        payload: r.item,
      });
      dispatch({
        type: "SET_PLAY",
        payload: true,
      });
    });
  };

  const skipPrevious = () =>{
    spotifyDetails.skipToPrevious();
    spotifyDetails.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEMS",
        payload: r.item,
      });
      dispatch({
        type: "SET_PLAY",
        payload: true,
      });
    });
  }
 
console.log(items,isPlaying)
  return (
     <div className={showFooter ? ('fixed bottom-0 bg-gray-800 w-screen p-4 sm:p-6 flex justify-between items-center'):('hidden')}>

         <div className='flex items-center flex-[5] sm:flex-[3]'>
         <img src={items?.album?.images[0]?.url} className='w-[50px] mx-2 rounded-lg' />   
         <h2 className='mx-2 text-white font-semibold text-sm sm:text-lg'>{items?.name}</h2>
         </div>
         

         <div className='flex-[5] sm:flex-[6] text-center'>
          
          <SkipPreviousOutlinedIcon className='mx-2 text-white cursor-pointer' onClick={skipPrevious}/>
          {!isPlaying ? (
          <PlayCircleOutlinedIcon fontSize='large' className='mx-2 cursor-pointer text-white' onClick={handlePlayPause}/>
          ):(
            <PauseCircleOutlineIcon fontSize='large' className='mx-2 cursor-pointer text-white' onClick={handlePlayPause}/>
          )}
           <SkipNextOutlinedIcon className='mx-2 text-white cursor-pointer' onClick={skipNext}/>

         </div>

         <div className='flex-[3] hidden sm:block'>
         <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className='text-green-600 cursor-pointer'  />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon className='text-green-600 cursor-pointer'/>
          </Grid>
          <Grid item xs>
            <Slider size='small' className='text-white'/>
          </Grid>
        </Grid>
         </div>
         {/* <Slider/> */}
     </div>
  )
}
