import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import { useContexValue } from "../ContexProvider"
import { Request } from '../Request'


export default function Body() {
  const [{spotifyDetails},dispatch] = useContexValue()
  
   
  return (
    <div className=' flex-[7] bg-gradient-to-t h-[100vh] py-[100px] sm:p-3 from-slate-800 to-slate-900 overflow-y-scroll'>
       <Header/>
       <HeroSection fync={spotifyDetails.getPlaylist} array={Request.Good_Morning} title={"Good Morning"}/>
       <HeroSection fync={spotifyDetails.getPlaylist} array={Request.Top_Playlist} title={"Top Playlists"}/>
       <HeroSection fync={spotifyDetails.getAlbum} array={Request.Top_Album} title={"Top Album"}/>
       <HeroSection fync={spotifyDetails.getPlaylist} array={Request.Top_IndieChill} title={"Indie Chill"}/>


      
       


       


       
    </div>
  )
}
