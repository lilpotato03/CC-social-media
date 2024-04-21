import { useContext, useEffect, useState } from "react"
import Modal from "./assets/components/Modal"
import Navbar from "./assets/sections/Navbar"
import PostSections from "./assets/sections/PostSections"
import StoryReel from "./assets/sections/StoryReel"
import AppContext, { Context } from "./context/AppContext"
import Login from "./assets/sections/Login"
import axios from 'axios'
function App() {

  const {modalState,loggedIn}=useContext(Context)
  if(loggedIn){
  return (
    <div className="bg-neutral-900 w-[100vw] h-[100vh]  text-white  md:pt-0">
      <Navbar />
      <div className=" min-w-[28rem] lg:w-[50%] h-full items-center flex flex-col relative p-5 gap-y-5 overflow-y-scroll lg:ml-[12rem] no-scrollbar ">
        <StoryReel /> 
        <div className="gap-y-10 w-[25rem]  items-center flex-col flex mb-[5rem]">
        {genPosts()}
        </div>
      </div>
      {modalState?<Modal />:<></>}
    </div>
  )
}
else{
  return(<Login />)
}
}

export default App
