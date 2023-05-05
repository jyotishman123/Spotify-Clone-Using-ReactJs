import React ,{useEffect,useState}from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SidebarPlaylist from './SidebarPlaylist';
import { useContexValue } from "../ContexProvider"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';




export default function Sidebar() {
  const [{myPlaylists}, dispatch] = useContexValue()
  const {type} = useParams();
  const [showSlider, setShowSlider] = useState(true)
  

  useEffect(()=>{
     if(window.location.pathname == "/")
     {setShowSlider(true)}
     else{
      setShowSlider(false)
     }
     
  },[])
  
    
  return (
    <div className={showSlider ? ('h-[100vh] bg-black overflow-y-scroll flex-[3] p-5') : ('hidden   sm:block h-[100vh] bg-black overflow-y-scroll flex-[3] p-5')}>
         
         <div className='flex justify-center mt-6'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className='w-[250px]' alt="" />
         </div>

          <div  >
          <Link to={"/"}>   <SidebarOption title={"Home"} Icon={HomeIcon}/> </Link>
           <Link to={"/search"}> <SidebarOption title={"Search"} Icon={SearchIcon}/> </Link>
             
             <div className='bg-zinc-900 p-3 rounded-md mt-4 sm:pb-[150px] pb-6'> 
             <h1 className='text-white font-poppins text-2xl font-semibold mt-6 mb-6'>My Playlists</h1>
             {myPlaylists?.items?.map((item, index)=>{
              return (<SidebarPlaylist title={item?.name} key={index} id={item?.id}  images={item?.images[0] || item?.images[1]}/>)
              
             })}
             </div>
           

          </div>
        </div>
  )
}
