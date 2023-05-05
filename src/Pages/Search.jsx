import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchArea from '../components/SearchArea'
import Footer from '../components/Footer'

export default function Search() {
  return (
    <div className='flex'>
      <Sidebar/>
      <SearchArea/>
      <Footer/>
    </div>
  )
}
