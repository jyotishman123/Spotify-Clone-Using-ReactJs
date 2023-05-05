import React,{useEffect,useState} from 'react'
import { useContexValue } from "../ContexProvider"
import Card from './Card'



export default function HeroSection({fync,array,title}) {
  const myplaylists = ['37i9dQZF1E373ShovuTBJH', '37i9dQZF1E38QKBfTm9Vsp','37i9dQZF1E35H8AEHaEoIx','37i9dQZEVXbkvOaMpZHC2j']
  const [play,setPlay] = useState([])
    const [{spotifyDetails},dispatch] = useContexValue()
    console.log(spotifyDetails)
    useEffect(()=>{
        
            
         
            array.map((id)=>{
              Promise.all(array.map(id =>  fync(id)))
              .then(res => {
                setPlay([...play,...res]);
              })
              .catch(error => console.error(error));
            })
         
    
        
    },[])
   

    console.log(play)

  return (
    <div> 
      <h1 className='mx-3 mt-6 px-3 text-white font-poppins text-3xl font-bold'>{title}</h1>
    <div className='flex  overflow-x-scroll'>
       {play.map((ele)=>{
        return(
          
          <Card images={ele?.images} name={ele?.name} type={ele?.type} id={ele?.id} desc={ele?.description}/>
        )
       })}
    </div>
    </div>
  )
}
 