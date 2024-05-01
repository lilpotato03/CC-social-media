import React, { useContext } from 'react'
import { Context } from '../../context/AppContext'
import axios from 'axios'

function SettingsModal() {

async function logout(){
  await axios.get('/api/logout')
}

 const {setLoggedIn,setModalState,setModalContent,setCurrentView}=useContext(Context)
  return (
    <div className='min-w-[20rem] w-[30%] h-[80%] gap-y-4 bg-neutral-700 rounded-md p-5 flex flex-col justify-center items-center fill-neutral-50'>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4'>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            </div>
            <div className='font-semibold'>Change Appearance</div>
          </div>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4'>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            </div>
            <div className='font-semibold'>Saved</div>
          </div>
          <div className=' w-[15rem] h-[3rem] flex gap-x-2 items-center pl-4 cursor-pointer' onClick={()=>{
          setModalState(false)
          setModalContent(<></>)
          setCurrentView('home')
          logout()
          setLoggedIn(false)
          }}>
            <div className='size-7 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            </div>
            <div className='font-semibold'>Log Out</div>
          </div>     
        </div>
  )
}

export default SettingsModal