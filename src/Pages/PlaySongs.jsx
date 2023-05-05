import React from 'react'
import Sidebar from '../components/Sidebar'
import PlayPreviewArea from '../components/PlayPreviewArea'
import Footer from '../components/Footer'

 

export default function PlaySongs() {
   
  return (
    <div className='flex sm:flex-row flex-col'>
       <Sidebar/> 
        <PlayPreviewArea/>
        <Footer/>
    </div>
  )
}
