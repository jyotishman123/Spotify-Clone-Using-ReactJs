import React,{useState, useEffect} from "react";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import { getTokenFromUrl } from "./Spotify";
import { useContexValue } from "./ContexProvider";
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi();


function App() {
 
 const [ {token, items}, dispatch] = useContexValue() 
 

   useEffect(()=>{
       const hash = getTokenFromUrl();
       window.location.hash = ""
       const _token = hash.access_token
       
       if(_token){
        spotify.setAccessToken(_token)
          dispatch({
            type:'SET_TOKEN',
            payload:_token
          })

          dispatch({
            type:'SET_SPOTIFY',
            payload:spotify
          }) 

       spotify.getUserPlaylists()
       .then((response)=>{
         dispatch({
          type:'SET_PLAYLIST',
          payload:response
         })
       })

       spotify.getMe()
       .then((user)=>{
         dispatch({
          type:'SET_USER',
          payload:user
         })
       })

       }
      

        // spotify.getMyCurrentPlaybackState()
        // .then((res)=>{
        //    dispatch({
        //     type:'SET_ITEMS',
        //     payload:res.item
        //    })
        // })

        // if(items == null){
        //   dispatch({
        //     type:'SHOW_FOOTER',
        //     payload:true
        //   })
        // }else{
        //    dispatch({
             
        //       type:'SHOW_FOOTER',
        //       payload:false
            
        //    })
        // }

   },[])

  

  return (
    <div className="App">
           {
            token ? (
              <Main/>
            ):
            (
              <Login/>
            )
           }
    </div>
  );
}

export default App;
