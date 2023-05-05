import React from 'react'
import Home from './Home'
import PlaySongs from './PlaySongs';
import Search from './Search';
 
import { Routes, Route } from "react-router-dom"
 
 

export default function Main() {
  return (
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/:type/:id" element={ <PlaySongs/> } />
    <Route path='/search' element={<Search/>} />

  </Routes>
  )
}
