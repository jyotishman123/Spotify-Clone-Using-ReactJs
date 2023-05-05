import React from 'react'
import { loginUrl } from '../Spotify'


export default function Login() {
  return (
    <div className='h-[100vh] w-[100vw] bg-black'>
        <div className='flex flex-col justify-center h-full  items-center'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className='h-[300px]' />
       
      
        <div className='mt-6'>
            <button className='text-white bg-green-600 py-3 px-6 font-bold rounded-full border-2-white'>
                <a href={loginUrl}>Login to Continue</a>
            </button>
        </div>

      </div>
       

    </div>
  )
}
