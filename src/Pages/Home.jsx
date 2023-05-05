import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
   <div className=' flex flex-col sm:flex-row'>
   <Sidebar/>
   <Body/>
   <Footer/>
   </div>
    
  )
}
