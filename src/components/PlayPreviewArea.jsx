import React,{useEffect,useState} from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
import { useContexValue } from "../ContexProvider"
import PreviewHeaderSection from './PreviewHeaderSection';
import SongRow from './SongRow';
import TrackHeader from './TrackHeader';
 



export default function PlayPreviewArea() {
    const  {type,id}  = useParams()
    const [songs,setSongs] = useState();
    const [songtype,setSongtype] = useState(type);
    const [trackSong, setTrackSong] = useState()
    const [getCurrentSong, setGetCurrentSong] = useState()
  const [{spotifyDetails,items, isPlaying, showFooter},dispatch] = useContexValue()


    useEffect(()=>{
       switch(type){
        case 'playlist':{
           spotifyDetails.getPlaylist(id)
           .then((response)=>{
              setSongs(response)
           })
        }


        case 'track':{
             spotifyDetails.getTrack(id)
             .then((response)=>{
               setTrackSong(response)
             })
        }
        
        case 'album':{
          spotifyDetails.getAlbum(id)
          .then((response)=>{
             setSongs(response)
          })
        }
       }
       setSongtype(type)
    },[id, type])
    


    

     function playSong(uri){
      setGetCurrentSong(uri)
      spotifyDetails.play({
        uris:[uri]
      })
       .then((res)=>{
        
         spotifyDetails.getMyCurrentPlayingTrack()
        .then((r)=>{
           console.log("This is", r)
            dispatch({
              type:'SET_ITEMS',
              payload:r.item
            })
        })
       
          dispatch({
           type: 'SET_PLAY',
           payload:true
         })
         dispatch({
           type:'SHOW_FOOTER',
           payload:true
         })
           
       

      })
       
      
     }

     

 
      

    console.log(items,isPlaying) 
     
  return (
    <div className='flex-[7] overflow-x-hidden  bg-gradient-to-t h-[100vh] overflow-y-scroll from-slate-800 to-slate-900 overflow-y-scrol'>
     <Header/>

     {songtype == 'track' ? (
      <div>
       <TrackHeader trackHeader = {trackSong} playSong={playSong}/>
      </div>
     ) :(
      
      <div>
      <PreviewHeaderSection headerInfo={songs}  />
      <SongRow allsong={songs?.tracks || songs} playSong={playSong}/>
      </div>
      )}

    </div>
  )
}
